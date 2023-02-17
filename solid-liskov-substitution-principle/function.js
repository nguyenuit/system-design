// without LSP
class Rectangle {
    constructor(height, width){
        this.width = width;
        this.height = height;
    }

    setHeight(height) {
        this.height = height;
    }
}

class Square extends Rectangle{}

const rectangle = new Rectangle(4, 5);
const square = new Square(4, 4);

// console.log(`Height: ${rectangle.height}, Width: ${rectangle.width}`); // Outputs 'Height: 4, Width: 5' (correct)
// console.log(`Height: ${square.height}, Width: ${square.width}`); // Outputs 'Height: 4, Width: 4' (correct)

square.setHeight(5);
console.log(`Height: ${square.height}, Width: ${square.width}`); // Outputs 'Height: 5, Width: 4' (wrong)

// with LSP
class Shape2 {
    constructor(height, width){
        this.width = width;
        this.height = height;
    }

    setHeight(height) {
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}

class Rectangle2 extends Shape2 {}

class Square2 extends Shape2 {
    
    setHeight(height) {
        this.height = height;
        this.width = height;
    }

    setWidth(width) {
        this.width = width;
        this.height = width;
    }
}

const rectangle2 = new Rectangle2(4, 5);
const square2 = new Square2(4, 4);

square2.setHeight(5);
console.log(`Height: ${square2.height}, Width: ${square2.width}`); // Outputs 'Height: 5, Width: 5' (CORRECT)
const result2 = square2.calcArea(5);
console.log('result2', result2); 

