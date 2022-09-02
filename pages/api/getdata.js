let gplay = require("google-play-scraper");

export default async function handler(req, res) {
  const appId = req.query.appid;
  try {
    const appdata = await gplay.app({ appId: appId });
    res.status(200).json(appdata);
  } catch (error) {
    res.status(500).json(error);
  }
}
