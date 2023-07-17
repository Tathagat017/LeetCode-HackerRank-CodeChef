//ADD tow
var addTwoNumbers = function (l1, l2) {
  let pl1 = l1;
  let pl2 = l2;
  let ans = null;
  let curr = ans;
  let carry = 0;
  while (pl1 != null || pl2 != null) {
    let sum = 0;
    if (pl1 == null) {
      sum = pl2.val + carry;
      pl2 = pl2.next;
    } else if (pl2 == null) {
      sum = pl1.val + carry;
      pl1 = pl1.next;
    } else {
      sum = pl1.val + pl2.val + carry;
      pl1 = pl1.next;
      pl2 = pl2.next;
    }
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    if (curr == null) {
      ans = new ListNode(sum);
      curr = ans;
    } else {
      curr.next = new ListNode(sum);
      curr = curr.next;
    }
  }
  if (carry != 0) {
    curr.next = new ListNode(curr);
  }
  return ans;
};
/// a nd b

function ABOnly(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "?") {
      if (ans[ans.length - 1] != "a" && str[i + 1] !== "a") {
        ans += "a";
      } else {
        ans += "b";
      }
    } else {
      ans += str[i];
    }
  }
  console.log(ans);
}

function runProgram(input) {
  input = input.split("\n");
  let str = input[0];
  ABOnly(str);
}
if (process.env.USERNAME === "") {
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
