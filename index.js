// meta = everything
let meta
// a global toggle for my mouse input
// i could set up others too; this is where the user is going to affect my meta
// and it's also the only place the user can affect my meta
let toggle = false

function setup() {
    // we can make a canvas be the size of the browser window if we want
    createCanvas(window.innerWidth, window.innerHeight);
    meta = new Meta()

}


function draw() {
    // the primary background color will be chosen byb the toggle
    // i could also move this into my meta but, it's fine here too
    if(!toggle){
        background(0)
    }else {
        background(120)
    }
    // translate moves the center of the drawing to a certain position
    // in a 2d canvas this starts out as the top left corner
    // here I'm moving it to the center of the screen
    translate(heartSettings.cX, heartSettings.cY)
    // so that when i rotate we will rotate around the center
    rotate(PI + meta.rotValue)
    // update and then draw the meta
    meta.update()
    meta.render()

}




function mousePressed() {
    toggle = !toggle
    console.log(toggle)
    //notice how I pass this global toggle into my meta here
    meta.toggleOption(toggle)
}




