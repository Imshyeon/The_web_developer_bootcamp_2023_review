# 1. [Prototype](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes)
1. JavaScript 객체가 서로 기능을 상속하는 방식의 매커니즘. 일반적으로 많은 메소드를 가지고 있다. 하나의 프로토타입이 있고 각각의 객체(예를 들어 배열)가 `__proto__` 라는 특별한 특성으로 그 프로토타입으로 참조하고 있다. Array.prototype, String.prototype
```javascript
// 1.
String.prototype.grumpus = () => alert(’go away’)
const cat = “Blue”
cat.grumpus()

// 2.
const nums = [7,8,9]
nums.__proto__ 
```
`Array.prototype` : 메서드가 특성을 추가하는 실제 객체 => 템플릿 객체, 즉 프로토타입이다.
`__proto__` : 참조, 배열이나 문자열의 특성 이름

