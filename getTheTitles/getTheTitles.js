  const getTheTitles = function(x) {
      var outList = [];

      for(i = 0; i < x.length; i++){
        outList.push((x[i].title));
      };
      return outList

}

module.exports = getTheTitles;
