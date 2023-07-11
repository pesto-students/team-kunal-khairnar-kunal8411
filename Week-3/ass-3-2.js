//! Bind Function

// Example - 1
function sum (a, b) {
    return this.a + this.b;
};

const add = sum.bind({a:100, b:200});

console.log(add());

// Example - 2
var marks = {
    english: 88,
    getEnglish: function () {
        return this.english;
    },

    maths: 95,
    getMaths: function () {
        return this.maths;
    },

    science: 90,
    getScience: function () {
        return this.science;
    }
}

var bindEnglish = marks.getEnglish.bind(marks);
var bindMaths = marks.getMaths.bind(marks);
var bindScience = marks.getScience.bind(marks);


console.log("Marks in all subjects are: ");
console.log("English = " + bindEnglish());
console.log("Maths = " + bindMaths());
console.log("Science = " + bindScience());

///////////////////////////////////////////////////////

//! Call Function

// Example - 1
function greet() {
    var response = [
        'Hello!',
        'My name is',
        this.name,
        'and I am',
        this.age,
        'years old.'
    ].join(' ');

    console.log(response);
}

function exp() {
    var response = [
        'I have worked in',
        this.company1,
        'and',
        this.company2,
        'respectively.',
    ].join(' ');

    console.log(response);
}

var myBio = {
    name: 'Shaurya', age: '22'
};

var myWork = {
    company1: 'UpWork', company2: 'Byjus'
};

greet.call(myBio);
exp.call(myWork);

///////////////////////////////////////////////////////

//! Apply Function

// Example - 1
var set = [1,2,3,4,5];

var max = Math.max.apply(null, set);
var min = Math.min.apply(null, set);

console.log(max);
console.log(min);