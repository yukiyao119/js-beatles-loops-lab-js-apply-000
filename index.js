// add solution here
// let result = [];

// const theBeatlesPlay = function(musicians, instruments){
//   for (let i=0; i<musicians.length; i++){
//     const curMusician = musicians[i]
    
//     for (let j=i; j<instruments.length; j++){
//       const curInstrument = instruments[j]
      
//       result.push((`${curMusician} plays ${curInstrument}`))
//       break;
//     }
//   }
//   return result;
// }

let result1 = [];
  const johnLennonFacts = function (arr) {
    let counter = 0;
    while (counter < arr.length) {
      let element = arr[counter];
      element = (element + '!!!');
      result1.push(element)
      counter++;
    }
    return result1;
  }
  console.log(johnLennonFacts(facts))


















