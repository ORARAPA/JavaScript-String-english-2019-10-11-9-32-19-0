// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var words = sentence.split(" ");
var newSentence = "";
for (var i=0; i < words.length; i++){
	words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  	newSentence = newSentence + words[i] + " ";
}
console.log(newSentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
console.log(money.substring(1,3));
//TODO write your code here...
