// this is the thing I made in class
class RainCircle {
    constructor(x, y, r, color){
        this.x = x
        this.y = y
        this.r = r
        this.color = color
        this.alpha = 60
    }

    move(){
        this.x += random(-2, 2)
        this.y += random(-2, 2)
    }

    render(){
        // console.log(this.alpha)
        noStroke();
        // i seperated out the alpha value to make it easier to change it
        fill(this.color.concat(this.alpha));
        ellipse(this.x, this.y, this.r);
    }

    update(){
        // move the circle around
        this.move()
        // increase the opacity sometimes
        if(Math.random() > 0.99){
            // console.log(this.alpha)
            if(this.alpha < 255){
                this.alpha++
            }
           
        }
        
    }
}