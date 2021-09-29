class RandomSystem {
    constructor(circleSettings){
        this.randomPositions = Array.from({length : numPoints}, () => ({x: random(-window.innerWidth, window.innerWidth), y: random(-window.innerWidth, window.innerHeight)}))
        this.circles = this.randomPositions.map( (pos) => new RainCircle( pos.x, pos.y, random(2, circleSettings.maxR), getRandomColor1()))    
    }

    addCircle(){
        circles.push(new RainCircle(random(0, circleSettings.maxX), random(0, circleSettings.maxY),random(2, circleSettings.maxR), getRandomColor2()))
    }


    untweenCircles(){
        console.log('here I am')
        const start = new Date().getTime();
        const duration = 1000
        const originalCircles = [...this.circles]
        const timer = setInterval(() => {
            let time = new Date().getTime() - start;
            
            this.circles.forEach((circle, idx) => {
            
                circle.alpha -=1.25
                const x = easeInOutQuart(time, originalCircles[idx].x, this.randomPositions[idx].x - originalCircles[idx].x, duration);
            
            circle.x = x
            const y = easeInOutQuart(time, originalCircles[idx].y, this.randomPositions[idx].y - originalCircles[idx].y, duration);
            
            circle.y = y
            }) 
            if (time >= duration) clearInterval(timer);
          }, 10); 
    }


    update(){
        this.circles.forEach( (circle, i) => circle.update())
    }

    render(){
        this.circles.forEach( (circle, i) => circle.render())
    }
}