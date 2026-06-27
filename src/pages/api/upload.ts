import type { APIRoute } from 'astro';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { b2Client, B2_BUCKET_NAME } from '../../lib/b2';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || !(file instanceof File)) {
      return new Response(JSON.stringify({ error: 'No file uploaded' }), { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    // Create a unique key
    const ext = file.name.split('.').pop();
    const key = `uploads/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;

    const command = new PutObjectCommand({
      Bucket: B2_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    });

    await b2Client.send(command);

    // B2 public URL structure is typically: https://f004.backblazeb2.com/file/<bucket-name>/<key>
    // Or if using Cloudflare proxy, it would be the custom domain. Let's use the standard b2 structure
    // We can infer the download URL from the endpoint if it's s3.us-west-004.backblazeb2.com
    // It's usually https://<bucket-name>.s3.us-west-004.backblazeb2.com/<key>
    const url = import.meta.env.B2_ENDPOINT.replace('s3.', `${B2_BUCKET_NAME}.s3.`) + '/' + key;

    return new Response(JSON.stringify({ url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Upload Error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
