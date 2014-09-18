// creates a function that takes a string and returns the string with a hyphen between each letter

function hyphenateString( myString ) {
  return myString.split('').join('-');
}
hyphenateString("scottleejason");
// => 's-c-o-t-t-l-e-e-j-a-s-o-n'

// adds this function onto the String object ( so you can call it on the string )
String.prototype.hyphenateString = function(){
  return this.split('').join('-');
}
'scottleejason'.hyphenateString();
// => 's-c-o-t-t-l-e-e-j-a-s-o-n'


