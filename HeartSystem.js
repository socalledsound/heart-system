class HeartSystem{
    constructor(circles){
        this.points = heartVerts(heartPoints(numPoints, 0, 0, heartSettings.r));
        this.circles = circles
        
        // this.tweenCircles(this.circles)
    }

    tweenCircles = (meta) => {
        console.log('here I am')
        const start = new Date().getTime();
        const duration = 1000
        const originalCircles = [...this.circles]
        const timer = setInterval(() => {
            let time = new Date().getTime() - start;
            console.log(this.circles)
            this.circles.forEach((circle, idx) => {
                console.log(circle.x, originalCircles[idx].x, this.points[idx].x)
                circle.alpha +=10
                meta.rotValue -= 0.1
                const x = easeInOutQuart(time, originalCircles[idx].x, this.points[idx].x - originalCircles[idx].x, duration);
                
                circle.x = x
                const y = easeInOutQuart(time, originalCircles[idx].y, this.points[idx].y - originalCircles[idx].y, duration);
                //
                circle.y = y
            }) 
            if (time >= duration) {
                clearInterval(timer);
                meta.rotValue = 0
                
            }
          }, 10);  
    }

    


    render(){

        this.circles.forEach(circle => circle.render())
    }


    update(){
        this.circles.forEach(circle => circle.update())
    }


}
