const { urlMod } = require('../models/urlModel');
const { nanoid } = require('nanoid');

async function generateUrl(req, res) {
  const { actUrl } = req.body;
  if (!actUrl) return res.status(400).json({ err: 'URL is mandatory' });

  const shortUrl = nanoid(8);
  const url = await urlMod.create({ shortUrl, actUrl });

  return res.status(201).json(url);
}

module.exports = { generateUrl };