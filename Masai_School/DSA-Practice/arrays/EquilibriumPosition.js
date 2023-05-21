// Equilibrium Element Ended
// Description

// Given an arrayAofNpositive numbers. The task is to find the position where equilibrium first occurs in the array. Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.


// Input
// Input Format

// First line contains an integer N denoting the size of the array.

// Then in the next line are N space separated values of the array A.

// N <= 1000

// Ai <= 10000


// Output
// In a new line print the position at which the elements are at equilibrium if no equilibrium point exists print -1.


// Sample Input 1 

// 5
// 3 3 5 5 1
// Sample Output 1

// 3
// Hint

// In sample input,A = [3,3,5,5,1]

// Here the sum of all elements left side of A[3] are 3,3 whose sum is 6 and all elements right side of A[3] are 5,1 whose sum is also 6. Thus the equilibrium element is A[3].
// So, the required output is 3.

function equilibriumElement(N, A){
 
    let eq = -1 ;
       for (let  i = 1; i < N-1; i++)
       {
           let  ls = 0;
            let rs = 0;
           for ( j = 0; j < i; j++){
               ls += A[j];
           }
           
           for ( k = i+ 1; k<N ;k++){
               rs += A[k];
           }
           if (ls == rs){
                eq=i+1;
           }
               
       } 
           console.log(eq);
       }