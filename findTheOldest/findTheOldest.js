const people = [
    {
      name: 'Carly',
      yearOfBirth: 1986
    },
    {
      name: 'Ray',
      yearOfBirth: 1900,
      yearOfDeath: 1950
    },
    {
      name: 'Jane',
      yearOfBirth: 1500,
      yearOfDeath: 2225
    },
  ]


function getTheOldest(arr){
  checkDeath(arr);
  arr = arr.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth));
  return arr[arr.length - 1].name;
};

function checkDeath(arr){
  let dt = new Date;
  for (i=0; i < arr.length; i++){
    if (!arr[i].yearOfDeath){
      arr[i].yearOfDeath = dt.getFullYear();
    };
  };
};


console.table(getTheOldest(people));

module.exports = findTheOldest
