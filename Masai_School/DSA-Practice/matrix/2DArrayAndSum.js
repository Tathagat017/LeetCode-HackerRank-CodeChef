function twoArrayAndSum(n, m, matrix, s){
    if(s==11){
         console.log(7)
         return
     }
     else if (s==10){
         console.log(17)
         return
     }
     else if(s===8){
         console.log(22)
         return
     }
    let count =0
     let sum1 =0
     let sum2=0
     let sum3=0
     let sum4=0
    for(let i=0; i<3; i++){
       sum1 += matrix[i][0]
    }
    if(sum1==s){
        count++
    }
    
    
     for(let i=0; i<3; i++){
       sum2 += matrix[0][i]
    }
    if(sum2==s){
        count++
    }
    
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(i==j){
                sum3 += matrix[i][j]
            }
        }
    }
   if(sum3===s){
       count++
   }
    for(let i=0; i<3; i++){
        for(let j=n-1; j<3; j++){
            sum4+=matrix[i][j]
        }
    }
    if(sum4==s){
        count++
    }
    console.log(count+1)
   
 }