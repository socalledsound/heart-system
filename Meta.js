class Meta {
    constructor(){
        this.currentOption = 0
        this.option0 = new Heart(heartSettings)
        this.option1 = new RandomSystem(circleSettings)
        this.option2 = new HeartSystem(this.option1.circles)
        this.options = [this.option1, this.option2]
    }

    toggleOption(toggle){
        if(!toggle){
            
            this.currentOption = 0
            this.options[this.currentOption].untweenCircles()
            
        } else{
            this.currentOption = 1
            this.options[this.currentOption].tweenCircles()
        }
        
    }


    render(){
        translate(heartSettings.cX, heartSettings.cY)
        rotate(PI)
        this.options[this.currentOption].render()
    }

    update(){
        this.options[this.currentOption].update()
    }
}