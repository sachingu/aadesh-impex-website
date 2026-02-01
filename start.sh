#!/bin/sh
set -e

echo "Starting application..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "WARNING: DATABASE_URL is not set. Skipping migrations."
  exec npm start
fi

echo "Running database migrations..."
npm run db:push || {
  echo "Migration failed, but continuing with app startup..."
}

echo "Starting application server..."
exec npm start
