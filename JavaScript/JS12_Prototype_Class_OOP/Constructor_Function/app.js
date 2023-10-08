function Color(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
    // console.group(this);

}

Color.prototype.rgb = function(){
    const {r, g, b} = this;
    return `rgb(${r},${g},${b})`;
}

Color.prototype.hex = function(){
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Color.prototype.rgba = function(a=1.0){
    const {r, g, b} = this;
    return `rgba(${r},${g},${b},${a})`;
}

const color1 = new Color(255, 40, 100);    
const color2 = new Color(0, 0, 0);    

color1.rgb()    // 'rgb(255,40,100)'
color1.hex()    // '#ff2864'
color2.hex()    // '#000000'
color1.rgba(0.5)

color1.hex === color2.hex   // true : 같은 항목을 가리키고 있기 때문에.. => 같은 prototype을 가리키고 있다.