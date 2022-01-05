console.log('0: ', 'start', "; user's code assign: ", num);

process.nextTick(function() {
  console.log('4: ', 'nextTick1', "; user's code assign: ", num);
});

setTimeout(function() {
  console.log('7: ', 'setTimeout', "; user's code assign: ", num);
}, 0);

new Promise(function(resolve, reject) {
  console.log('1: ', 'promise', "; user's code assign: ", num);
  resolve('resolve');
}).then(function(result) {
  console.log('6: ', 'promise then', "; user's code assign: ", num);
});

(async function() {
  console.log('2: ', 'async', "; user's code assign: ", num);
})();

setImmediate(function() {
  console.log('8: ', 'setImmediate', "; user's code assign: ", num);
});

process.nextTick(function() {
  console.log('5: ', 'nextTick2', "; user's code assign: ", num);
});

var num = 10;

console.log('3: ', 'end', "; user's code assign: ", num);
