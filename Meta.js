class Meta {
    constructor(){
        
        this.currentOption = 0
        // this.option0 = new Heart(heartSettings)
        // two options are pretty binary
        // i could have as many options as i want, and the toggle could be an increment, right?
        this.option1 = new RandomSystem(circleSettings)
        this.option2 = new HeartSystem(this.option1.circles)
        this.options = [this.option1, this.option2]
        // variables for rotating the window or stopping the rotating
        this.rotValue = 0
        this.rotInc = 0.01
        this.storedRotValue = this.rotValue
        this.tweening = false
    }

    toggleOption(toggle){
        // when that toggle comes in from the user, do some stuff
        if(!toggle){
            this.currentOption = 0
            this.tweening = true
            this.options[this.currentOption].untweenCircles(this)
            
        } else{
            this.currentOption = 1
            this.tweening = true
            this.options[this.currentOption].tweenCircles(this)
        }
        
    }


    render(){
        // render the currently chosen option
        this.options[this.currentOption].render()
    }

    update(){
        // thjis means that if option 0 is chosen we will rotate
        if(!this.tweening){
            this.rotValue += this.rotInc
        }
        
        // update whichever one is chosen
        this.options[this.currentOption].update()
    }
}