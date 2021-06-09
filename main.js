noseX=0;
noseY=0;

function preload(){
    mustache= loadImage("https://i.postimg.cc/FHCdVh26/41103-4-fake-moustache-free-transparent-image-hd.png");
}


function setup(){
    canvas=createCanvas(850,500);
    canvas.position(250,200);    
    video=createCapture(VIDEO);
    video.size(850,500);
    video.hide();
    poseNet=ml5.poseNet(video,modelLaoded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 130, 25, 600, 450);
    image(mustache,noseX-80,noseY-10,180,95);
}

function take_snapshot(){
    save('MyFilterPic.jpg');
}


function modelLaoded(){
    console.log("poseNet Initialised");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X = " + noseX);
        console.log("Nose Y = " + noseY);
    }
}