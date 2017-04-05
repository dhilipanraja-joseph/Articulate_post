const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  postedBy: {type: String, required: true},
  createdOn: {type: Date, default: new Date()},
  modifiedOn: {type: Date, required: false},
  article_name: {type: String, required: true},
  section: {type: String, default: "General"},
  tags: {type: [String], required: false},
  context: {type: String, required: true}
});

const Article = mongoose.model('Article',articleSchema);

module.exports = Article;
