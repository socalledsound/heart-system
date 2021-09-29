
// const getRandomColor = () => `#${Math.floor(Math.random() * 2 * 24).toString(16)}`

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

const range = count => Array.from(Array(count).keys());
const degreesToRadians = angle => (Math.PI * angle) / 180;

function easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t * t - 2) + b;
  }

const heartVerts = (vertices) => {
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

const heartPoints = (numPoints, offsetX, offsetY, radius) => {
    const theta = 360/numPoints;
    
    const vertexIndices = range(numPoints);
    return vertexIndices.map(idx => ({
        theta: degreesToRadians((theta * idx)),
        r: radius,
        offsetX,
        offsetY,
    }))
}

