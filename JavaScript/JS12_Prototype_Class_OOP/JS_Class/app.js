class Color {
    constructor(r, g, b, name) { // __init__ 과 같다..
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`
    }

    rgb() {
        // return `rgb(${this.r}, ${this.g}, ${this.b})`
        return `rgb(${this.innerRGB()})`
    }

    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`
    }

    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    greet() {
        return `Hello from ${this.name}!`
    }
}

const tomato = new Color(255, 67, 89, "tomato")
tomato.greet() //'Hello from tomato!'
const white = new Color(255, 255, 255, 'white')
white.greet()   //'Hello from white!'
tomato.hex()
tomato.hex === white.hex    // true. prototype에 있으니까 같다!
document.body.style.backgroundColor = tomato.rgba(0.5)


//======================================================

class ColorPractice {
    constructor(r, g, b, name) { // __init__ 과 같다..
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`
    }

    rgb() {
        // return `rgb(${this.r}, ${this.g}, ${this.b})`
        return `rgb(${this.innerRGB()})`
    }

    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`
    }

    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    greet() {
        return `Hello from ${this.name}!`
    }

    hsl(){
        const {h,s,l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`
    }

    opposite(){ // 보색
        const {h,s,l} = this;
        const newHue = ( h + 180 ) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`
    }

    fullySaturated(){
        const {h, l} = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }

    calcHSL() {
        let { r, g, b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;
    
        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            // Green is max
            h = (b - r) / delta + 2;
        else
            // Blue is max
            h = (r - g) / delta + 4;
    
        h = Math.round(h * 60);
    
        // Make negative hues positive behind 360°
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;
    
        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        this.h = h;
        this.s = s;
        this.l = l;
    }
}

const tomato2 = new ColorPractice(255, 67, 89, "tomato")
const white2 = new ColorPractice(255, 255, 255, 'white')
const carrot = new ColorPractice(230, 126, 34, 'carrot')

// document.body.style.backgroundColor = tomato2.hsl()
// document.body.style.backgroundColor = tomato2.opposite()

// document.body.style.backgroundColor = carrot.hsl() // 'hsl(28, 79.7%, 51.8%)'
// document.body.style.backgroundColor = carrot.fullySaturated()    // 'hsl(28, 100%, 51.8%)'
