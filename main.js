noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
if(results.length > 0)
    {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose X = " + noseX + "Nose Y = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("LeftWristX = "+leftWristX+"rightWristX = "+rightWristX+"difference = "+difference);
    document.getElementById("textsize").innerHTML = "Size of the font will be - " + difference + " px";
    }
}

function modelLoaded(){
    console.log('PoseNet Is Not Initialized :)')
}

function draw(){
    background('#9494b8');
    fill("white");
    textSize(difference);
    text('ArjunQWERTY', noseX, noseY);
}