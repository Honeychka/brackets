module.exports = function check(str, bracketsConfig) {
        let pairs = bracketsConfig.map((e) => e.join(""));
      
        for (let i = 0; i < pairs.length; i++) {
          if( str.includes(pairs[i])) {
            str = str.replace(pairs[i], "");
           i = -1;
          }
        }
    return str.length == 0;
  }

