const SOURCE_URL = 'https://raw.githubusercontent.com/azievdesign-cloud/Jaria/e0c89f0/index.html';

export default async function handler(_request, response) {
  const source = await fetch(SOURCE_URL);

  if (!source.ok) {
    response.status(502).send('Unable to load the Jaria website.');
    return;
  }

  const html = await source.text();
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=86400');
  response.status(200).send(html);
}
