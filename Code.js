// make the first letter capital of each word
function firstlettercap(str){
  //converting the string to an array of words
  let listofwords =str.split(" ");
  //created a Empty arrat to store the capitalized words
  let caparr1 =[];
  let caparr2 =[];
  let caparr3 =[];
  // running a for loop to grab the each word and making the forst letter capital and them pushing it to the Empty array above
  for (var i=0; i<listofwords.length;i++){
    //This is first method by using charAt method
    caparr1.push(listofwords[i].charAt(0).toUpperCase() + listofwords[i].slice(1))
    //This is first method by using slice method
    // By using you can contron more this then the first method 
    caparr2.push(listofwords[i].slice(0,1).toUpperCase() + listofwords[i].slice(1));
    // another case 2
    caparr3.push(listofwords[i].slice(0,2).toUpperCase() + listofwords[i].slice(2));
  }
  console.log(caparr1.join(' '));
  console.log(caparr2.join(' '));
  console.log(caparr3.join(' '));
}
firstlettercap('first letter capital of each word');
