const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a67400228579488db4aefbbbd0716576');
const express = require("express");
const router = express.Router();
// const readlineSync = require('readline-sync');

router.get("/newsapi", async (req, res) => {
    console.log("---", req.body)
    try {
    const result = await newsapi.v2.everything({
          q: req.body,
          sources: '',
          domains: 'news.google.com',
          from: '2020-06-01',
          to: '2020-06-30',
          language: 'en',
          sortBy: 'relevancy',
          page: 1
        })
    console.log(result);
    res.json(result);}
    catch (err) {
        
        console.log(err);
      }
})

module.exports = router; 