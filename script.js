
// ================   M1   ===============

// let index = ['supra', 'gtr', 'skyline', 'bmw', 'ok']

// function findIndex(arrays){
//    return arrays[arrays.lastIndexOf()+arrays.length]

// }

// console.log(findIndex(index));


// ================ M2  ================



let index = ['supra', 'gtr', 'skyline', 'bmw', 'ok']

function findIndex(arr, str){

   count =0

   for (let i = 0; i < arr.length; i++) {
      if(arr[i] !== str){

         count++
         return count
      }
 
   }
    
}

console.log(findIndex( index, 'gtr'));