// Shuffle all Ended
// Description

// You are designing your own library and now you have to make your own shuffle function that takes a list and returns the shuffled from, i.e. all nodes are shuffled.

// You think that the ideal approach is to take one node from the beginning and then one from the end untill all nodes are covered.

// You do not have to output anything. Just complete the shuffleAll function such that the shuffled list also has the same pointer as head.

// shuffleAll has the following parameters:

// -LinkedListNode pointer list:a reference to the head node in the list


// Input
// Input Format
// The first line of input contains an integer n, the number of elements in the linked list.

// The next line contains n integers, the node data values in order.

// Constraints
// 1 <= n <= 10^5

// 1 <= node values <= 10^4


// Output
// Output Format
// Output the shuffled list according to the approach given in the description


// Sample Input 1 

// 5
// 1 34 5 2 108
// Sample Output 1

// 1 108 34 2 5
// Hint

// First node followed by the last node then the first and last of the remaining list and then only node is left.

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var shuffle = function (head) {
     let arr = [];
    let cur = head;
    while(cur!=null){
        arr.push(cur.data);
        cur = cur.next
    }
    
    let p=0;
    let n=arr.length
    let q=n-1;
    ans = []
    for(let i=0;i<arr.length-1;i=i+2){
        ans.push(arr[p]);
        p++
        ans.push(arr[q]);
        q--
    }
    
    if(n%2==1){
        z = Math.floor(n/2)
    ans.push(arr[z])
    }
    
    
    
    let main = new LinkedListNode(ans[0]);
    let temp = main
    for(i=1;i<ans.length;i++){
        temp.next = new LinkedListNode(ans[i])
        temp = temp.next;
    }
return main
};
