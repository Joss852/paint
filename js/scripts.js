var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var aux = false;
context.lineWidth = 1;

function draw(e){
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;

    if(aux == true){
        context.lineTo(x,y);
        context.stroke();
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', function(){
    aux = false;
});

canvas.addEventListener('mousedown', function(){
    aux = true;
    context.beginPath();
    context.moveTo(x,y);
    canvas.addEventListener('mousemove', draw);
});

function canvasColor(colorCanvas){
    context.strokeStyle = colorCanvas.value;
}

function canvasSize(sizeCanvas){
    context.lineWidth = sizeCanvas.value;
}

function canvasClean(){
    context.clearRect(0,0, canvas.width,canvas.height);
}