var status = "";

function preload(){
    var img = loadImage("Kitchen-wallpaper-3.jpg");
    console.log("Image is laoded")
}

function setup(){
    canvas = createCanvas(500,450);
  canvas.center();

    ObjectDetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementsById("status").innerHTML = "Status : Model Initialized"
}

function modelloaded(){
    console.log("Model Loaded");
    status = true;
    ObjectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
    }
}