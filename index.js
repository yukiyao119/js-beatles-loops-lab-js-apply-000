// add solution here
let result = [];

const theBeatlesPlay = function(musicians, instruments){
  for (let i=0; i<musicians.length; i++){
    const curMusician = musicians[i]
    
    for (let j=i; j<instruments.length; j++){
      const curInstrument = instruments[j]
      
      result.push((`${curMusician} plays ${curInstrument}`))
      break;
    }
  }
  return result;
}


let result1 = [];
const johnLennonFacts = function (array) {
  let counter = 0;
  while (counter < array.length){
    let curElement = array[counter];
    curElement = (curElement + '!!!')
    result1.push(curElement)
    counter++;
  }
  console.log(result1);
}
johnLennonFacts()















