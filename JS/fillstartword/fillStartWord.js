const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  if (word === undefined || word === null) {
    return undefined
  } else if (word.includes(startWord)) {
    return word
  } 
  return startWord + word
}

module.exports = fillStartWord