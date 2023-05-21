function spiralTraversal(N, M, matrix ){
    let top = 0;
    let bottom = N-1;
    let left = 0;
    let right = M-1;
    let count = 0;
    let bag = ""
  
    while(count< N*M ){
        // top-bottom
        for(let i=top; i<=bottom && count<N*M; i++, count++){
            bag += matrix[i][left] + " ";
            
        }
         left++
         // left to right 
         for(let i=left; i<=right && count<N*M; i++, count++){
             bag += matrix[bottom][i] + " ";
          
         }
         bottom--
         //bottom to top
         for(let i=bottom; i>=top  && count<N*M ; i--, count++){
             bag+= matrix[i][right] + " ";
            
         }
         right--
         // right to left
         for(let i=right; i>=left && count<N*M; i--, count++){
             bag += matrix[top][i] + " ";
         
         }
         top++
    }
    
  console.log(bag)
   
 }
 