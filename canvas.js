var canvas = document.querySelector('canvas');

// Setting width and height to full screen of browser
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Drawing on the canvas
var context = canvas.getContext('2d');

// SQUARE
// Styling Squares
context.fillStyle = '#ec5840'
// fillRect( x, y, width, height)
context.fillRect(300, 300, 100, 100);

context.fillStyle = '#ec407e'
// fillRect( x, y, width, height)
context.fillRect(100, 100, 100, 100);

//LINE
// Initial line
context.beginPath();
// moveTo(x, y)
context.moveTo(50, 300);
// Start line
context.lineTo(200, 100);
context.lineTo(400, 300);

//Styling lines
context.strokeStyle = '#7eec40';
// Required to display line
context.stroke();

// ARC or CIRCLE
context.beginPath();
// arc(x, y, radius: Int, startAngle: float, endAngle: float, drawCounterClockwise: bool)
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#407eec';
context. stroke();

// ANIMATION
// Creating a JS object to have multiple circles in the canvas
function Circle (x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    // Create a nameless function
    this.draw = function() {
        context.beginPath();
        // arc(x, y, radius: Int, startAngle: float, endAngle: float, drawCounterClockwise: bool)
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = ' #000000';
        //context.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
        context. stroke();
    }

    this.update = function() {
        if( this.x + this.radius > innerWidth || this.x - this.radius < 0 ) {
            this.dx = -this.dx;
        }
    
        if( this.y + this.radius > innerHeight || this.y - this.radius < 0 ) {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

// Multiple Circle

var circleArray = [];

for ( i = 0; i < 100; i++ ) {

    var radius = 30;
    // adding random numbers to display the circles in different parts of the canvas within the width and heitgh of the screen
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    for ( i = 0; i < circleArray.length; i++ ) {
        circleArray[i].update();
    }
}

animate();