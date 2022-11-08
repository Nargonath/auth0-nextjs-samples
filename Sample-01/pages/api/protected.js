export default function handler(req, res) {
  console.log('protected API through middleware');
  res.status(200).end();
}
