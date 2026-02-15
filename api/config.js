/**
 * Vercel Serverless Function - Configuration Endpoint
 * 
 * This endpoint returns the Google Client ID from environment variables
 * without exposing it in the frontend bundle.
 */

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Return configuration
  res.status(200).json({
    clientId: process.env.VITE_GOOGLE_CLIENT_ID || '',
    environment: process.env.NODE_ENV || 'production'
  });
}
