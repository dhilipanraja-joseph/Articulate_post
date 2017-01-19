const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({

  article_name: { type: String, required: true },
  section: {type: Array, required: false},
  context: {type: String, required: true}
});


const Article = mongoose.model('Article',articleSchema);

module.exports = Article;
