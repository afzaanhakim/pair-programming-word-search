const wordSearch = (letters, word) => {
    let result = true;
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
      if (l.includes(word))
        return result;
    }
    return false;
  };
  
  module.exports = wordSearch;