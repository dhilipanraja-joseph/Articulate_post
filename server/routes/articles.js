const express = require('express');
const router = express.Router();

const Article = require('../models/article');

router.route('/')
      .get((req, res) => {
        Article.find({}, (err, articles) => {
          res.status(err ? 400 : 200).send(err || articles);
        });
      })
      .post((req, res) => {
        Article.create(req.body, (err, article) => {
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
      Article.findByIdAndUpdate(req.params.id,
        { $set: req.body },
        { new: true },
        (err, article) => {
          if (err) {
            res.status(400).send(err);
          } else {
            res.status(err ? 400 : 200).send(err || article);
          }
        });
    })
    .delete((req, res) => {
      Article.findByIdAndRemove(req.params.id, (err, article) => {
        res.status(err ? 400 : 200).send(err || `${article.article_name} deleted`);
      });
    });

module.exports = router;
