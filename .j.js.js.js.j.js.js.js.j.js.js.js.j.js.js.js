Backrooms_soundstrack="";
Megalovania="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Backrooms_soundstrack = loadSound("_Level !_ But It's Actually a Soundtrack REMASTERED.mp3");
    Megalovania = loadSound("Notoriety - Brick Bank [LOUD OST].mp3");
}

function draw(){
    image(video,0,0,600,530);
}