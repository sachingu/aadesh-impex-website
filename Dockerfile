# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev)
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:22-alpine

WORKDIR /app

# Install all dependencies (keep dev deps for drizzle-kit migrations)
COPY package*.json ./

RUN npm install

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Copy configuration files for migrations
COPY drizzle.config.ts ./
COPY shared ./shared

# Copy startup script
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

# Expose the port
EXPOSE 5000

# Set environment to production
ENV NODE_ENV=production

# Hardcoded Cloud SQL instance and default DATABASE_URL for Cloud Run
# WARNING: consider using Secret Manager instead of hardcoding credentials.
ENV CLOUDSQL_INSTANCE=aipl-website-486013:europe-west1:aipl-website-db
ENV DATABASE_URL=postgresql://pguser:pgpassword@/aipl?host=/cloudsql/aipl-website-486013:europe-west1:aipl-website-db

# Start the application with migrations
CMD ["/app/start.sh"]
