class Pet {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }

    greet() {
        console.log("Hello, I am " + this.name + "!")
    }
}

let rex = new Pet('Rex', 'dog', 3);
console.log(rex);


rex.greet();

// If there is a constructor present in sub-class, it needs to first call super() before using "this".

class Dog extends Pet {
    constructor(name, species, age, breed) {
        super(name, species, age);
        this.breed = breed

    }

    play() {
        console.log(this.name + " likes to play.")
    }
}

let jax = new Dog("Jax", "Dog", 2, "Boxer mix");

console.log(jax);
jax.greet();
jax.play();
