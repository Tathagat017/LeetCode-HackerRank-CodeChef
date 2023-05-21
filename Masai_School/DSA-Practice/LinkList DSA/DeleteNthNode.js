// 3
// 3 2
// 1 2 3
// 3 1
// 1 2 3
// 3 3
// 1 2 3

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var deleteNthFromEnd = function (head1, k) {
     let fast=head1;
     let slow=head1;
     
     for(let i=0; i<k; i++){
         fast=fast.next;
     }
 
     if(!fast){
         return head1.next;
     }
         while(fast.next){
             fast=fast.next;
             slow=slow.next;
         }
   
     slow.next=slow.next.next;
     return head1;
    
};


