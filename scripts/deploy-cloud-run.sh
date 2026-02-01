#!/bin/sh
set -e

# Cloud Run deploy helper
# Usage:
#  PROJECT_ID=your-gcp-project REGION=europe-west1 SERVICE=my-service IMAGE=gcr.io/PROJECT/IMAGE:TAG ./scripts/deploy-cloud-run.sh

PROJECT_ID=${PROJECT_ID:-aipl-website-486013}
REGION=${REGION:-europe-west1}
SERVICE=${SERVICE:-aadesh-impex-website}
IMAGE=${IMAGE:-gcr.io/${PROJECT_ID}/${SERVICE}:latest}
CLOUDSQL_INSTANCE=${CLOUDSQL_INSTANCE:-aipl-website-486013:europe-west1:aipl-website-db}
DB_USER=${DB_USER:-pguser}
DB_PASS=${DB_PASS:-pgpassword}
DB_NAME=${DB_NAME:-aipl}

DATABASE_URL="postgresql://${DB_USER}:${DB_PASS}@/${DB_NAME}?host=/cloudsql/${CLOUDSQL_INSTANCE}"

echo "Building image: ${IMAGE}"
gcloud builds submit --tag "${IMAGE}" --project "${PROJECT_ID}"

echo "Deploying ${SERVICE} to Cloud Run in ${REGION} (Cloud SQL instance: ${CLOUDSQL_INSTANCE})"
gcloud run deploy "${SERVICE}" \
  --image "${IMAGE}" \
  --region "${REGION}" \
  --project "${PROJECT_ID}" \
  --add-cloudsql-instances "${CLOUDSQL_INSTANCE}" \
  --set-env-vars "DATABASE_URL=${DATABASE_URL},NODE_ENV=production" \
  --platform managed \
  --allow-unauthenticated

echo "Deployment finished."
