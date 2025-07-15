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
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
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
          body = JSON.stringify(JSON.parse(data));
        } catch (e) {
          // Si ce n'est pas du JSON, retourne le texte brut
          body = JSON.stringify({ raw: data });
        }

        resolve({
          statusCode: res.statusCode,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
          },
          body
        });
      });
    });

    req.on('error', (error) => {
      resolve({
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        },
        body: JSON.stringify({ error: 'Request failed', details: error.message })
      });
    });

    req.end();
  });
};