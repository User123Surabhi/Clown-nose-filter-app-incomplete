noseX=0;
noseY=0;

function preload()
{

}
function setup()
{
    canvas = createCanvas(600, 450);
    canvas.position(290, 260);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
  image(video, 0, 0, 300, 300); 
  fill(255,0,0);
  stroke(255,0,0);
  circle(noseX,noseY,20);
}

function take_snapshot()
{
    save('Me with clown nose.png');
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.noseX;
        noseY=results[0].pose.noseY;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
    }
}