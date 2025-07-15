const https = require('https');

exports.handler = async (event, context) => {
  const { httpMethod } = event;

  // Gérer les requêtes OPTIONS pour CORS
  if (httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
      }
    };
  }

  if (httpMethod !== 'GET') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Method not allowed', status: 405 })
    };
  }

  return new Promise((resolve) => {
    const options = {
      hostname: 'tryhackme.com',
      port: 443,
      path: '/api/v2/public-profile?username=GoGoGadg3t',
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        // Log pour debug
        console.log('Status:', res.statusCode);
        console.log('Headers:', res.headers);
        console.log('Raw data:', data);

        let body;
        try {
          body = JSON.parse(data);
        } catch (e) {
          body = { raw: data };
        }

        resolve({
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
          },
          body: JSON.stringify({
            ...body,
            status: res.statusCode
          })
        });
      });
    });

    req.on('error', (error) => {
      resolve({
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        },
        body: JSON.stringify({ error: 'Request failed', details: error.message, status: 500 })
      });
    });

    req.end();
  });
};