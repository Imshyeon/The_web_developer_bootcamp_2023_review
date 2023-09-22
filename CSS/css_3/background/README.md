# Background
결과화면

![Alt text](image.png)

```css
section{
    width: 80%;
    height: 800px;
    margin: 0 auto;
    /* background-image: url("https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"); */
    /* background-size:cover;
    background-position: right; */
    background : no-repeat right/cover url("https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80");
}

h1{
    font-size: 100px;
    color: white;
}
```
[참고-MDN](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)

- background
  - no-repeat &rarr; 배경이미지 반복하지 않음.
  - cover &rarr; 이미지를 면적에 꽉 채우는 대신 가로 세로 비율을 일정하게 유지한다.