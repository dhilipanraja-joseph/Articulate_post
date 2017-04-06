const express = require('express');
const router = express.Router();

const Article = require('../models/article');
const ArticleList = require('../models/articleList');

router.route('/')
      .get((req, res) => {
        Article.find({}, (err, articles) => {
          res.status(err ? 400 : 200).send(err || articles);
        });
      })
      .post((req, res) => {
        req.body.tags = req.body.tags.split(",");
        Article.create(req.body, (err, article) => {
          let al = {
            article_name: article.article_name,
            article_id: article._id,
            tags: article.tags
          }
          ArticleList.create(al, er => {
            if (er) {
              throw er;
            }
          })
          res.status(err ? 400 : 200).send(err || article);
        })
      })

router.route('/:id')
    .get((req, res) => {
      Article.findById(req.params.id, (err, article) => {
        res.status(err ? 400 : 200).send(err || article);
      });
    })
    .put((req, res) => {
      req.body.modifiedOn = (new Date());
      if(req.body.tags) {
        req.body.tags = req.body.tags.split(",");
      }
      ArticleList.findOneAndUpdate({article_id: req.params.id},
        req.body,
        er => {
          if (er) {
            throw er;
          }
        })
      Article.findByIdAndUpdate(req.params.id,
        { $set: req.body },
        { new: true },
        (err, article) => {
          res.status(err ? 400 : 200).send(err || article);
        });
    })
    .delete((req, res) => {
      Article.findByIdAndRemove(req.params.id, (err, article) => {
        ArticleList.remove({article_id: req.params.id}, er => {
          if (er) {
            throw er;
          }
        })
        res.status(err ? 400 : 200).send(err || `${article.article_name} deleted`);
      });
    });

router.route('/:id/:k')
    .get((req, res)=>{
      let k= req.params.k;
      Article.findById(req.params.id, (err, article) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(err ? 400 : 200).send(err || article[k]);
        }
      })
    })

module.exports = router;
