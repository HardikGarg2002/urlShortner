const shortid= require('shortid');
const URL = require('../models/url');

async function generateShortUrl(req,res){
    const originalUrl = req.body.url;
    // if(!originalUrl) res.status(400).json({error : 'url is required'});
    const id= shortid();
    console.log("till id genertation");
    const Url = new URL({
        shortUrl : id,
        originalUrl : originalUrl,
    })
    console.log(Url);
    await Url.save();
     
    res.status('201').json(id);

}
module.exports = generateShortUrl;