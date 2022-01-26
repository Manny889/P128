Song1="";
Song2="";
leftWristX= 0;
leftWristY= 0;
rightWristX= 0;
rightWristY= 0;

function preload(){
Song1= loadSound("Savage Love.mp3");
Song2= loadSound("In My Blood.mp3");   
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    function modelLoaded(){
    console.log('PoseNet Is Initialized!');    
     }
    function draw(){
    image(video, 0, 0, 600, 500);    
    }
    function gotPoses(results){
        if(results.length > 0){
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY); 
        
        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
        }
        }
    function play(){
        Song1.play();
        Song1.setVolume(1);
        Song1.rate(1);    
        }  
        function play2(){
            Song2.play();
            Song2.setVolume(1);
            Song2.rate(1);    
            }           
