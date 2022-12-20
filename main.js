song_1 = ""
song_2 = ""

function preload(){
    song_1 = loadSound(" Heroes Tonight.mp3")
    song_2 = loadSound("Where we Started.mp3")
}
function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,0,0,600,500)
}