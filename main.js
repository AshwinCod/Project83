var last_position_of_x, last_position_of_y;
canvas = document.getElementById("line_canvas");

ctx = canvas.getContext("2d");
var width = screen.width;
var new_width = screen.width - 40;
var height = screen.height;
var new_height = screen.height - 200;
if (width < 992) {
    document.getElementById("line_canvas").width = new_width;
    document.getElementById("line_canvas").height = new_height;
    document.body.style.overflow = "hidden";
}
color = "black";
line_width = 3;
canvas.addEventListener("touchstart",etouchStart);

function etouchStart(e) {
    console.log("my_touchStart")
    color = document.getElementById("color_input").value;
    console.log(color);
    line_width = document.getElementById("width_input").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",etouchMove);

function etouchMove(e) {
    console.log("my_touchMove")
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
function clear_board() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}