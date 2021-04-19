function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(400,400);
    canvas.position(560,90);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#969A97')
}
function modelLoaded(){
    console.log('PoseNet is Initialized!');
}
function gotPoses(){
}