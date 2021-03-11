let re;
re = /hello/;

// console.log(re);
// console.log(re.source);

//exec

const result = re.exec('hello world');
console.log(result);