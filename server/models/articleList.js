const mongoose = require('mongoose');

const articleListSchema = new mongoose.Schema({
  article_id: {type: String, required: true},
  article_name: {type: String, required: true},
  tags: {type: [String], required: true}
});

const ArticleList = mongoose.model('ArticleList',articleListSchema);

module.exports = ArticleList;
