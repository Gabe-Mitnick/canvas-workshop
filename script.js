// Lines that start with two slashes (like this one) are comments. The computer ignores them — they're just for humans to read

// This code sets up the canvas so we can draw on it
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth * window.devicePixelRatio;
canvas.height = window.innerHeight * window.devicePixelRatio;

// Draw a filled in rectangle with the fillRect function
// fillRect(x, y, width, height)
// - x, y: The coordinates of the rectangle's top-left corner. (0, 0) is the top-left corner of the canvas.
// - width: The width of the rectangle.
// - height: The height of the rectangle.
ctx.fillStyle = 'orange';
ctx.fillRect(100, 200, 300, 200);

// Draw an outlined rectangle with the strokeRect function
ctx.strokeStyle = 'black';
ctx.lineWidth = 20;
ctx.strokeRect(200, 300, 300, 200);
