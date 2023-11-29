//complete this code
class Animal {
	constructor (species){
		this.species=species;
	}
	get species(){
		return this.species;
	}
	makeSound(){
		console.log("The Cat makes a sound of meow")
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	constructor (species){
		super(species);
	}
	purr(){
		console.log("purr");
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`);
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
