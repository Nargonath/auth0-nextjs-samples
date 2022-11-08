export default function handler(req, res) {
  console.log('unprotected API');
  res.status(200).end();
}
