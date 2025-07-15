exports.handler = async (event, context) => {
  const { httpMethod, path, queryStringParameters } = event;
  
  // Autoriser seulement les requêtes GET
  if (httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const response = await fetch('https://tryhackme.com/api/v2/certificates/public-list?page=1&limit=10&sort=Newest&username=GoGoGadg3t', {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Portfolio/1.0)',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'API request failed' })
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
