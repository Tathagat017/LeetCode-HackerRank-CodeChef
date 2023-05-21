// Pattern of W Ended
// Description

// You need to print the pattern as given in Sample Input.

// Note:Make sure to check for spaces. In the output, there are no spaces at end of each line.


// Input
// First line contains N. (1<= N <= 10)


// Output
// Print pattern for given N value.


// Sample Input 1 

// 1
// Sample Output 1

// \/\/
// Sample Input 2 

// 4
// Sample Output 2

// \      /\      /
//  \    /  \    /
//   \  /    \  /
//    \/      \/
// Hint
 

function patternW(N) {
    // Write code here
for(let i=0; i<N; i++){
      let bag="";
      for(let j=0; j<N; j++){
          i==j ? bag+="\\"+"":bag+=" ";
      }
      
 for(let j=N-1;j>=0; j--){
 
      i==j ? bag+="/"+"": bag+=" ";
  }
         for(let j=0; j<N; j++){
          i==j ? bag+="\\"+"":bag+=" ";
      }
      
 for(let j=N-1;j>=0; j--){
 
      if(i==j){
         bag+="/"+""
         break;
      }else{
          bag+=" ";
      }     
  }
console.log(bag);
}
 
}