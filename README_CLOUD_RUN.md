Cloud Run deployment

This project includes a helper script to build and deploy to Cloud Run using a Cloud SQL instance (Cloud SQL Auth Proxy).

Quick steps:

1. Ensure the Cloud SQL Admin API is enabled and your Cloud Run service account has `roles/cloudsql.client`.

2. Configure environment values or pass them when running the script, e.g.:

```bash
PROJECT_ID=aipl-website-486013 \
REGION=europe-west1 \
SERVICE=aadesh-impex-website \
IMAGE=gcr.io/aipl-website-486013/aadesh-impex-website:latest \
DB_USER=pguser DB_PASS=pgpassword DB_NAME=aipl \
./scripts/deploy-cloud-run.sh
```

3. The script sets `DATABASE_URL` to use the Unix socket path required by Cloud Run's Cloud SQL integration:

```
postgresql://<DB_USER>:<DB_PASS>@/<DB_NAME>?host=/cloudsql/PROJECT:REGION:INSTANCE
```

4. To run migrations separately, you can create a Cloud Run job or one-off job that runs `npm run db:push` with the same `DATABASE_URL` and Cloud SQL instance attached.

Notes:
- Do not commit real DB credentials to the repo. Use Secret Manager or Cloud Run environment variables.
- If using private IP instead, configure a Serverless VPC connector and use the private IP in `DATABASE_URL`.
