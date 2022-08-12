function preload() {
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    }
    
    function modelLoaded(){
        console.log('PoseNet Is Initialized');
    }
    
    function gotPoses(results) {
        if(results.length > 0) {
            console.log(results);
            console.log("upper_lip x =" + results[0].pose.upper_lip.x -10);
            console.log("upper_lip y =" + results[0].pose.upper_lip.y -10);
            console.log("lipstick x =" + results[0].pose.lipstick.x -10);
            console.log("lipstick y =" + results[0].pose.lipstick.y -10);
        }
    }
    function draw(){
       image(video,0,0,300,300);
       fill(255,0,0);
       stroke(255,0,0);
    }
    function take_snapshot(){
        save('myFilterImage.png')
    }                                