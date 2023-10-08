function hex(r,g,b){
    return '#' + (((1 << 24)) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r,g,b){
    return `rgb(${r}, ${g}, ${b})`
}

hex(255,100,25); //#ff6419 <- rgb(255,100,25)

function makeColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        // console.log(this)    // {r: 35, g: 255, b: 100, rgb: ƒ}
        const {r,g,b} = this
        return `rgb(${r}, ${g}, ${b})`; // 'rgb(35, 255, 100)'
    }
    color.hex = function(){
        const {r,g,b} = this
        return '#' + (((1 << 24)) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }   // firstColor.hex() => '#23ff64'
    return color
}

const firstColor = makeColor(35,255,100)
const black = makeColor(0,0,0)

