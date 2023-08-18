Backrooms_soundstrack="";
Megalovania="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;
scoreleftWrist = 0;
song1_status = "";
song2_status = "";


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.posenet(video,modelLoaded);
    posenet.on('pose', gotposes);

}

function preload(){
    Backrooms_soundstrack = loadSound("_Level !_ But It's Actually a Soundtrack REMASTERED.mp3");
    Megalovania = loadSound("Notoriety - Brick Bank [LOUD OST].mp3");
}

function draw(){
    song1_status = Backrooms_soundstrack.isPlaying();
    song2_status = Megalovania.isPlaying();
    image(video,0,0,600,500);
    fill("#00ff00");
    stroke("#ff0000");

    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        Backrooms_soundstrack.stop();
        if(song2_status == false){
           Megalovania.play();
           document.getElementById("song_id").innerHTML = "Song Name: Megalovania";
        }
        if(scorerightWrist > 0.2){
            circle(rightWrist_x,rightWrist_y,20);
          Megalovania.stop();
            if(song1_status == false){
              Backrooms_soundstrack.play();
               document.getElementById("song_id").innerHTML = "Song Name: Backrooms Level ! Soundtrack";
            }
        }
       
    }
}
function modelLoaded(){
    console.log("poseNet Is Initialized");
 
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);
        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log(scorerightWrist);

         
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}
