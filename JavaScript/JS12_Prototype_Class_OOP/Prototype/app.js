// Prototype
String.prototype.yell = function(){
    return `OMG!!!!!! ${this.toUpperCase()}!!!!!!!`;
}
//"i love you".yell()
// 'OMG!!!!!! I LOVE YOU!!!!!!!'

//override
Array.prototype.pop = function(){
    return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"
}

