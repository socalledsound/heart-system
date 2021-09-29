
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
        fill(this.color.concat(this.alpha));
        ellipse(this.x, this.y, this.r);
    }

    update(){
        this.move()
        if(Math.random() > 0.99){
            // console.log(this.alpha)
            if(this.alpha < 255){
                this.alpha++
            }
           
        }
        
    }
}