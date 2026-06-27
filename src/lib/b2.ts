import { S3Client } from '@aws-sdk/client-s3';

// Only access these on the server (do not prefix with PUBLIC_)
const endpoint = import.meta.env.B2_ENDPOINT || '';
const accessKeyId = import.meta.env.B2_KEY_ID || '';
const secretAccessKey = import.meta.env.B2_APPLICATION_KEY || '';

export const b2Client = new S3Client({
  endpoint,
  region: 'us-west-004', // B2 typically requires this, or just a dummy region
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export const B2_BUCKET_NAME = import.meta.env.B2_BUCKET_NAME || '';
