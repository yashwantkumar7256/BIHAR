 import express from 'express'
 

 const app=express()

app.use(express.json())
 import urlRouter from "../router/url.router.js"
import urlModel from '../models/url.model.js'

app.use("/api/url",urlRouter)

app.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;

    const url = await urlModel.findOne({
      shortCode: code,
    });

    console.log(url);

    if (!url) {
      return res.status(404).json({
        message: "URL not valid",
      });
    }

    await urlModel.findOneAndUpdate(
      { shortCode: code },
      {
        $inc: { clicks: 1 },
      }
    );

    return res.redirect(302, url. originalUrl);

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: err.message,
    });
  }
});

 export default app