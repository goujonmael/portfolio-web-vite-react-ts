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
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    };
  }
  
  // Autoriser seulement les requêtes GET
  if (httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'tryhackme.com',
      port: 443,
      path: '/api/v2/certificates/public-list?page=1&limit=10&sort=Newest&username=GoGoGadg3t',
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Portfolio/1.0)',
        'Accept': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          resolve({
            statusCode: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify(parsedData)
          });
        } catch (error) {
          resolve({
            statusCode: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Parse error' })
          });
        }
      });
    });

    req.on('error', (error) => {
      resolve({
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Request failed' })
      });
    });

    req.end();
  });
};
