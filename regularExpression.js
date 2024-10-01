let re;
let str;

re = /hello/;
re = /hello/i;

str = "Hello World";

console.log(re.exec(str));
reTest(re, str);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`'${str}' matches '${re.source}'`);
  } else {
    console.log(`'${str}' doesn't matches '${re.source}'`);
  }
}
