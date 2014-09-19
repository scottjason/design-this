// to begin, here is a basic example of creating a constructor and calling it's methods

var Human = function() {
  this.name = 'Scott';
  this.gender = 'Male';
  this.hairColor = 'Blonde';
};

// now we add some methods hat we can call on new instances of the class
Human.prototype.setName = function( name ) {
  this.name = name;
}

Human.prototype.setGender = function( gender ) {
  this.gender = gender;
}

Human.prototype.setHairColor = function( hairColor ) {
  this.hairColor = hairColor;
}

Human.prototype.save = function(){
  return 'Saving' + ' ' + this.name + ' ' + this.gender + ' ' + this.hairColor;
}

// instatiating a new instance of the class
var austinBourdier = new Human();

// and we can call our setName method on this instance
austinBourdier.setName('Austin');
austinBourdier.setGender('Male');
austinBourdier.setHairColor('Brown');
austinBourdier.save();
//=> 'Saving Austin Male Brown'

// on it's own, this currently won't work though
austinBourdier.setName('Austin'); // => undefined

// reason being, the setName function has no return value

// ------------- METHOD CHAINING ---------------

// here's the same example as above, only with a verbose method chaining pattern

var Human = function() {
  this.name = 'Scott';
  this.gender = 'Male';
  this.hairColor = 'Blonde';
};

// now we add some methods hat we can call on new instances of the class
Human.prototype.setName = function( name ) {
  this.name = name;
  return this;
}

Human.prototype.setGender = function( gender ) {
  this.gender = gender;
  return this;
}

Human.prototype.setHairColor = function( hairColor ) {
  this.hairColor = hairColor;
  return this;
}

Human.prototype.save = function(){
  console.log(
    'Saving ' + this.name + ' the ' +
    + this.gender + ' ' + this.hairColor
  );
    return this;
}

var austinBourdier = new Human();
var newPerson = austinBourdier.setName('Austin');
newPerson.setGender('Brown')

// let's check if the variable newPerson variable reflects our new object
console.log( newPerson == austinBourdier );
// true
