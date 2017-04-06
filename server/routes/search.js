const express = require('express');
const router = express.Router();

const ArticleList = require('../models/articleList');

router.route('/')
  .get((req,res) => {
    ArticleList.find({}, (err,article_list) => {
      res.status( err ? 400 : 200).send(err || article_list);
    })
  })

module.exports = router;
