function hardwareProblem(N,D,T){
  // Code here
  for(let i=0;i<=N-2;i++)
  {
      let dif = Math.abs(T[i+1] - T[i])
      if(dif<=D){
          
          
          return console.log(T[i+1])
      }
  }
  return console.log(-1)
  
  
}