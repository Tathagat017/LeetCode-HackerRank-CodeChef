// 5 5
// safer
// amjad
// babol
// aaron
// songs
 

// https://prod-oj-files.s3.ap-south-1.amazonaws.com/upload/651483e60c.png
function twoArrayAndPhrase(n, m, matrix){
    //write code here
  let mat=[]
    for(let i=0;i<n;i++){
    mat.push(matrix[i].split(""))
    }
    let c=0
    for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
 //checking in vertical
if(i+3<n&&mat[i][j]=="s"&&mat[i+1][j]=="a"&&mat[i+2][j]=="b"&&mat[i+3][j]=="a"){
c++    
}
  //checking in horizal
if(j+3<m&&mat[i][j]=="s"&&mat[i][j+1]=="a"&&mat[i][j+2]=="b"&&mat[i][j+3]=="a"){
c++    
}
 //checking in diagonal top to bottom
if(i+3<n&&j+3<m&&mat[i][j]=="s"&&mat[i+1][j+1]=="a"&&mat[i+2][j+2]=="b"
 &&mat[i+3][j+3]=="a"){
c++    
}
//checking in diagonal bottom to top
if(i-3>=0&&j+3<m&&mat[i][j]=="s"&&mat[i-1][j+1]=="a"&&mat[i-2][j+2]=="b"
&&mat[i-3][j+3]=="a"){
c++    
}
    }
    }
  console.log(c)
}