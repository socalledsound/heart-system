
// const getRandomColor = () => `#${Math.floor(Math.random() * 2 * 24).toString(16)}`
// ok there's a lot of utils now
const getRandomColor1 = () => {
    const r = random(100, 251);
    const g = random(0, 50);
    const b = random(60, 105);
    return [r,g,b]
}

const getRandomColor2 = () => {
    const r = random(50, 51);
    const g = random(0, 255);
    const b = random(100, 255);
    const a = 250
    return [r,g,b,a]
}
// a way of making an array of sequential numbers
const range = count => Array.from(Array(count).keys());
// converts a number from 1<->180 into 0<->PI
const degreesToRadians = angle => (Math.PI * angle) / 180;

// the easing function
// boy thats a lot of letters
// i should do a whole class on easing functions
// for now, the cool thing is, this works
function easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t * t - 2) + b;
  }

  // i think i named this badly in some ways
  // it generates points in a heart shape using trig
  // i borrowed it from a shader that a guy named iq made and converted it to JS
  // math is cool
const heartPoints = (vertices) => {
    return vertices.map( ({theta, r, offsetX, offsetY}) => {

        const x = (offsetX + 16  * Math.pow(Math.sin(theta + Math.PI/2.0),3)) * r
        const y =  (offsetY + 13 * 
                    Math.cos(theta + Math.PI/2.0) - 5 * 
                    Math.cos(2 * (theta+ Math.PI/2.0)) - 2 * 
                    Math.cos(3 * (theta + + Math.PI/2.0)) - 
                    Math.cos( 4 * (theta + Math.PI/2.0))) * r
        return {x, y}
    })
}

// generates a data object that i pass in to heartVerts
const heartData = (numPoints, offsetX, offsetY, radius) => {
    const theta = 360/numPoints;
    
    const vertexIndices = range(numPoints);
    return vertexIndices.map(idx => ({
        theta: degreesToRadians((theta * idx)),
        r: radius,
        offsetX,
        offsetY,
    }))
}

