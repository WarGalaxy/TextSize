noseX= 0;
noseY= 0;
difference= 0;
rightWristX= 0;
leftWristX= 0;
text=0;
size=difference

function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('O modelo foi iniciado!')
}

function draw(){
    background('#969A97');
    textSize(difference)
    document.getElementById("square_side").innerHTML= "Tamanho da fonte será = "+difference+"px";
    fill('#FF0000');

    text('Jully',10,320)
    

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);
    }
}