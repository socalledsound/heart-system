class Heart {
    constructor(circles){
        this.points = heartVerts(heartPoints(numPoints, 0, 0, heartSettings.r));
        this.circles = circles
    }

    tweenCircles(){
        // this.circles.forEach(circle => {
        //     if
        // })
    }


    render(){
        translate(heartSettings.cX, heartSettings.cY)
        rotate(PI)
        beginShape()
        fill(255, 0,0)
        stroke(0,0,255)
        this.points.forEach(point => vertex(point.x, point.y))
        endShape() 
    }


    update(){
   
    }


}
