
const circleSettings= {
    maxX : 400,
    maxY : 400,
    maxR : 50,
}

const getRandomColor = () => {
    const r = random(50, 51);
    const g = random(0, 255);
    const b = random(100, 255);
    const a = 10
    return [r,g,b,a]
}

const getRandomColor2 = () => {
    const r = random(50, 51);
    const g = random(0, 255);
    const b = random(100, 255);
    const a = 250
    return [r,g,b,a]
}

class RainCircle {
    constructor(x, y, r, color){
        this.x = x
        this.y = y
        this.r = r
        this.color = color
    }

    move(){
        this.x += random(-1, 1)
        this.y += random(-1, 1)
    }

    render(){
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.r);
    }

    update(){
        if(this.color[3] > 10){
            this.color[3]--
        }
    }
}

let circles = []
const numCircles = 10000

function setup() {
    createCanvas(400, 600);
    //circles = Array.from({length : numCircles}, () => new RainCircle(random(0, circleSettings.maxX), random(0, circleSettings.maxY),random(2, circleSettings.maxR), getRandomColor()))

}


function draw() {
    background(0)
    circles.push(new RainCircle(random(0, circleSettings.maxX), random(0, circleSettings.maxY),random(2, circleSettings.maxR), getRandomColor2()))
    circles.forEach( (circle, i) => {
        circle.move()
        circle.render()
        circle.update()
    
    })
}




function mousePressed() {
   circles.push(new RainCircle(mouseX, mouseY,random(2, circleSettings.maxR), getRandomColor2()))
}




