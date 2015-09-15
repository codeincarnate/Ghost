




var levi = require('levi')


var lv = levi('db')
  .use(levi.tokenizer())
  .use(levi.stemmer())  
  .use(levi.stopword());

module.exports = lv