// here is a basic example of chaining using a constructor

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