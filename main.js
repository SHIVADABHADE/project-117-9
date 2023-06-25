function setup(){
    canvas=createCanvas(280,280)
    canvas.center()
    background('white')
    canvas.mouseReleased(classifycanvas)
}
function clearcanvas(){
    background('whtie')
}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet')
}
function draw(){
    strokeWeight(14)
    stroke(0)
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function classifycanvas(){
    classifier.classify(canvas,gotresults)
}
function gotresults(error,results){
    if(error){
        console.error(error)
    }
    console.log(results)
    document.getElementById("label").innerHTML='label: '+results[0].label
    document.getElementById("confidence").innerHTML='confidence:'+Math.round(results[0].confidence*100)+'%'
}

