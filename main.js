video="";
status="";
function preload(){
video=createVideo('video.mp4');
}
function setup(){
canvas=createCanvas(480,380);
canvas.center();
video.hide();
}
function draw(){
image(video,0,0,480,380);
}
function start(){
    object_detector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:detecting-objects";
}
function modelloaded(){
    console.log("modelloaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
