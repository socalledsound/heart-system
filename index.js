
let meta
let toggle = false

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    meta = new Meta()

}


function draw() {
    if(!toggle){
        background(0)
    }else {
        background(120)
    }
    translate(heartSettings.cX, heartSettings.cY)
    rotate(PI + meta.rotValue)
    meta.update()
    meta.render()

}




function mousePressed() {
    toggle = !toggle
    console.log(toggle)
    meta.toggleOption(toggle)
}




