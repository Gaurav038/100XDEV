// SUM OF 0 TO N

const sum = (lowerValue, upperValue) => {
  var sum = 0;

  for (let i = lowerValue; i < upperValue; i++) {
    sum += i;
  }
  return sum;
};

console.log(`sum = ${sum(0, 100)}`);

function fabbonacci(num) {
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 0; i <= num; i++) {
    console.log(a);
    c = b;
    b = a + b;
    a = c;
  }
}

fabbonacci(5);

function print_row(row) {
  var start_time = "";
  for (var i = 0; i < row + 1; i++) {
    start_time += "**";
  }
  return start_time
}

function print_triangle(column) {
  for (var i = 0; i<=column; i++) {
    console.log(print_row(i));
  }
}

print_triangle(5);
