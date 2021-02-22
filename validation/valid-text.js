const validText = str => {
  return typeof str === 'string' && String.trim().length > 0;
}

module.exports = validText;