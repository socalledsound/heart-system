class Meta {
    constructor(){
        this.currentOption = 0
        this.option0 = new Heart(heartSettings)
        this.option1 = new RandomSystem(circleSettings)
        this.option2 = new HeartSystem(this.option1.circles)
        this.options = [this.option1, this.option2]
        this.rotValue = 0
        this.rotInc = 0.01
        this.storedRotValue = this.rotValue
        this.tweening = false
    }

    toggleOption(toggle){
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

        this.options[this.currentOption].render()
    }

    update(){
        if(!this.tweening){
            this.rotValue += this.rotInc
        }
        
     
        this.options[this.currentOption].update()
    }
}