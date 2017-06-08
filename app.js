//OOP Class to make shapes:
// Shape constructor
function Shape() {
    this.name = name;
    
    this.div = document.createElement('div');
    
    document.getElementById('myCanvas').appendChild(this.div);
}

//All Shape Methods
//method to describe() that updates the stats in sidepanel



//doubleclick to remove shape from canvas
Shape.prototype.removeShape = function() {
    this.remove();
}

//place shape in container random x and y



//Circle Class
function Circle(radius) {
    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;

    this.radius = document.querySelector('#circRadius').value + 'px';
    this.div = document.createElement('div');
    this.div.className = 'circle';
    
    document.getElementById('myCanvas').appendChild(this.div);
}

//Circle methods to define calculations
Circle.prototype.area = function() {
    return Math.PI * Math.pow(this.radius, 2);
}
Circle.prototype.perimeter = function(){
    return 2 * Math.PI * this.radius;
}
Circle.prototype.diameter = function(){
    return 2 * this.radius;
}

//Triangle Class
function Triangle(height) {
    Triangle.prototype = Object.create(Shape.prototype);
    Triangle.prototype.constructor = Triangle;

    this.height = document.querySelector('#triHeight').value + 'px';
    this.div = document.createElement('div');
    this.div.className = 'triangle';
    
    
    document.getElementById('myCanvas').appendChild(this.div);
}


//Triangle Methods to define claculations

//Rectangle Class
function Rectangle(width, height) {
    Rectangle.prototype = Object.create(Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;

    this.width = document.querySelector('#recWidth').value + 'px';
    this.height = document.querySelector('#recHeight').value + 'px';
    this.div = document.createElement('div');
    this.div.className = 'rectangle';
    
    document.getElementById('myCanvas').appendChild(this.div);
}

//Rectangle Methods to define calculations

//Square Class
function Square(sideLength) {
    Square.prototype = Object.create(Shape.prototype);
    Square.prototype.constructor = Square;

    this.width = document.querySelector('#sqWidth').value + 'px';
    this.height = document.querySelector('#sqHeight').value + 'px';
    this.div = document.createElement('div');
    this.div.className = 'square';
    
    document.getElementById('myCanvas').appendChild(this.div);
}

//Square Methods to define calculations
