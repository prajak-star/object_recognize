ogat=" ";
ba =  [ ];


function preload(){
    ogat=loadImage("backpack.jpg");
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    detective=ml5.objectDetector("cocossd",loaded);
    document.getElementById("sta").innerHTML="loading o " ;
}

function loaded(){
    console.log("model chalu"); 
    detective.detect(ogat,getresult);
}

function getresult(error,results){
    if (error) {
        console.log(error);
    } 
        console.log(results);
        animal=results;
}

function draw(){
    image(ogat,0,0,400,400);
    fill("black");
    stroke("black");
    noFill();
    rect( ba[1].x , ba[1].y,ba[1].width,ba[1].height );
    text(ba[1].label ,ba[1].x +10 ,ba[1].y+ 10 );
}

//order for giving a shape it's things === "( x , y , width, height )"//