function fun(n,arr){
    // console.log(n,arr)
    let st=[]
    
    for(let i=0;i<n;i++){
    st.push(true)
    }
    
    for(let i=0;i<n;i++){
    st[arr[i]-1]=!st[arr[i]-1]
    
    let l=0,r=n-1
    while(st[l]===false){
        l++
    }
    
    while(st[r]===false){
        r--
    }
    console.log(l+1,r+1)
    }
    }
    function runProgram(input) {
      // Write code here
      input=input.trim().split("\n")
      let n=+input[0]
      let arr=input[1].trim().split(" ").map(Number)
      fun(n,arr)
    }
    
    if (process.env.USER === "") {
      runProgram(``);
    } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }