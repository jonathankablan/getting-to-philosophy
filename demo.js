/**
 * Usage demo
 */
var gettingToPhilosophy = require('./lib/getting-to-philosophy');
var readlineSync = require('readline-sync');


// Wait for user's response. 
var answer = readlineSync.question('What Wikipedia page do you want to test? ');
gettingToPhilosophy.start(answer, function (pageName) {
  console.log(pageName);
}, function (path) {
  console.log(path);
});
