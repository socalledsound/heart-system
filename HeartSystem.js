
class HeartSystem{
    constructor(circles){
        // make some points in a heart shape, see utils
        this.heartPoints = heartPoints(heartData(numPoints, 0, 0, heartSettings.r));
        this.circles = circles
        
        // this.tweenCircles(this.circles)
    }

    // see the random system for the comments on this
    // it's the same, but moving towards the heart points
    tweenCircles = (meta) => {
        console.log('tween')
        const start = new Date().getTime();
        const duration = 1000
        const originalCircles = [...this.circles]
        const timer = setInterval(() => {
            let time = new Date().getTime() - start;
            console.log(this.circles)
            this.circles.forEach((circle, idx) => {
            
                circle.alpha +=10
                meta.rotValue -= 0.1
                const x = easeInOutQuart(time, originalCircles[idx].x, this.heartPoints[idx].x - originalCircles[idx].x, duration);
                
                circle.x = x
                const y = easeInOutQuart(time, originalCircles[idx].y, this.heartPoints[idx].y - originalCircles[idx].y, duration);
                //
                circle.y = y
            }) 
            if (time >= duration) {
                clearInterval(timer);
                meta.rotValue = 0
                
            }
          }, 10);  
    }

    
    // render and update

    render(){

        this.circles.forEach(circle => circle.render())
    }


    update(){
        this.circles.forEach(circle => circle.update())
    }


}
