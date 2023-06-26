
var lastPositionX, lastPositionY;

color = "black";
widthLine = 1;


canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;

if(width<992){
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e){
    console.log("myTouchStart");
    color = dument.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;
    lastPositionOfX = e.touches[0].clientX - canvasoffsetLeft;
    lastPositionOfY=e.toucehs[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove (e){
    console.log("myTouchMove");
    currentPositionOfTouch = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastPositionOfX + "y = "
            + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + currentPositionOfTouchX + "y = "
            + currentPositionOfTouchY);
        ctx.lineTo(currentPositionOfTouchX,
            currentPositionOfTouchY);
        ctx.stroke();
        lastPositionOfX = currentPositionOfX;
        lastPositionOfY = currentositionOfY;
}


// ctx.beginPath();
// ctx.strokeStyle = color;
// ctx.lineWidth = 2;
// ctx.arc (200, 200, 40, 0, 2*Math.PI);
// ctx.stroke();

// canvas.addEventListener("mousedown", mouseDown);
// function mouseDown(e) {
//     color = document.getElementById("color").value;
//     widthLine = document.getElementById("widthLine").value;
//     mouseEvent = "mouseDown";
// }

//canvas.addEventListener("mousemove", my_mousemove);
// function myMousedown(e){
// color = document.getElementById("color").value;
// console.log(color);
// mouseX = e.clientX - canvas.offsetLeft;
// mouseY = e.clientY - canvas.offsetTop;
// console.log("X = "+ mouseX + ", Y = " + mouseY);
// circle(mouseX, mouseY);
//}

// function circle(mouseX, mouseY){
//     ctx.beginPath();
//     ctx.strokeStyle = color;
//     ctx.lineWidth = 2;
//     ctx.arc (mouseX, mouseY, 40, 0, 2*Math.PI);
//     ctx.stroke();


// }

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// canvas.addEventListener("mousemove", my_mousemove);
// function my_mousemove(e) {
//     current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
//     current_position_of_mouse_y = e.clientY - canvas.offsetTop;

//     if (mouseEvent == "mouseDown") {
//         ctx.beginPath();
//         ctx.strokeStyle = color;
//         ctx.lineWidth = widthLine;

//         console.log("Last position of x and y coordinates = ");
//         console.log("x = " + last_position_of_x + "y = "
//             + last_position_of_y);
//         ctx.moveTo(last_position_of_x, last_position_of_y);

//         console.log("Current position of x and y coordinates = ");
//         console.log("x  = " + current_position_of_mouse_x + "y = "
//             + current_position_of_mouse_y);
//         ctx.lineTo(current_position_of_mouse_x,
//             current_position_of_mouse_y);
//         ctx.stroke();
//         last_position_of_x = current_position_of_mouse_x;
//     last_position_of_y = current_position_of_mouse_y;
//     }

// }
// AQUI 
canvas.addEventListener("mouseup", myMouseUp); function myMouseUp(e) { mouseEvent = "mouseUP"; } 
// AQUI 
canvas.addEventListener("mouseleave", myMouseLeave); function myMouseLeave(e) { mouseEvent = "mouseleave"; }







//o miguel e lindo