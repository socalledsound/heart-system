class RandomSystem {
    constructor(circleSettings){
        // create an array of random positions
        // i use them to make the circles and then i still have the original positions stored, for going back....
        this.randomPositions = Array.from({length : numPoints}, () => ({x: random(-window.innerWidth, window.innerWidth), y: random(-window.innerWidth, window.innerHeight)}))
        this.circles = this.randomPositions.map( (pos) => new RainCircle( pos.x, pos.y, random(2, circleSettings.maxR), getRandomColor1()))    
    }

    // this isn't implemented fwiw
    addCircle(){
        circles.push(new RainCircle(random(0, circleSettings.maxX), random(0, circleSettings.maxY),random(2, circleSettings.maxR), getRandomColor2()))
    }

    // this function will go from the heart positions to the random positions
    untweenCircles(meta){
        console.log('untween')
        // get the time when this whole thing started
        const start = new Date().getTime();
        const duration = 1000
        const originalCircles = [...this.circles]

        // set Interval is going to run a function at regular intervals until cancelled
        const timer = setInterval(() => {
            // the amount of time we've been intervalling
            let time = new Date().getTime() - start;
            // this looks familiar
            this.circles.forEach((circle, idx) => {
                // modify each of the circles
                circle.alpha -=1.25
                meta.rotValue += 0.01
                // an easing function, in utils
                // it takes in the current time, from value, to value and overall duration
                // and generates a value between those two values
                const x = easeInOutQuart(time, originalCircles[idx].x, this.randomPositions[idx].x - originalCircles[idx].x, duration);
                circle.x = x
                // let's do that for y as well
                const y = easeInOutQuart(time, originalCircles[idx].y, this.randomPositions[idx].y - originalCircles[idx].y, duration);
                circle.y = y
            }) 
            // if we've exceed the allowed time then end this
            if (time >= duration) {
                clearInterval(timer);
                meta.rotValue = 0.1
                meta.tweening = false
            }
          }, 10); 
    }

    // update the circles
    update(){
        this.circles.forEach( (circle, i) => circle.update())
    }
    // and render
    render(){
        this.circles.forEach( (circle, i) => circle.render())
    }
}