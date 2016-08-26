var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var speed = 1/16/1000;

var x = 0;
var y = 0;

//object
var input = {
	up: false,
	down: false,
	left: false,
	right: false
}

window.onkeydown = function(event) {
	switch(event.keyCode) {
		//up
		case 38:
		case 87:
			input.up = true;
			y -= 1;
			break;
		//left
		case 37:
		case 65:
			input.left = true;
			x -= 1;
			break;
		//right
		case 39:
		case 68:
			input.right = true;
			x += 1;
			break;
		//down
		case 40:
		case 83:
			input.down = true;
			y += 1;
			break;
	}
}

window.onkeyup = function(event) {
	switch(event.keyCode) {
		//up
		case 38:
		case 87:
			input.up = false;
			break;
		//left
		case 37:
		case 65:
			input.left = false;
			break;
		//right
		case 39:
		case 68:
			input.right = false;
			break;
		//down
		case 40:
		case 83:
			input.down = false;
			break;
	}
}
function loop(){
	if (input.up) y-= 1;
	if (input.down) y += 1;
	if (input.left) x -= 1;
	if (input.right) x += 1;

	ctx.fillStyle = "red";
	ctx.fillRect(x, y, 5, 5);
	setTimeout(loop, speed)
}
loop();
