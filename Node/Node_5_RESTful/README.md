# Get vs. Post
1. Get : 정보를 가져올 때 대부분 사용. &rarr; 정보는 쿼리 문자열에 담김
```html
<body>
    <form action="/tacos" method="get">
        <input type="text" name="meat">
        <input type="number" name="qty">
        <button>Submit</button>
    </form>
</body>
```
이렇게하면 url에 `file:///tacos?meat=abcd&qty=3` 이렇게 나옴


1. Post : 정보를 보내거나 올리거나.. &rarr; 쿼리 문자열에 담기는 것이 아니다. json타입으로도 보낼 수 있고 제한도 없다.
```html
<body>
    <form action="/tacos" method="post">
        <input type="text" name="meat">
        <input type="number" name="qty">
        <button>Submit</button>
    </form>
</body>
```
url에 `/tacos` 이렇게 나온다. 


# RESTfull
1. Index - /comments - GET &rarr; list all comments
2. New - /comments/new - GET &rarr; Form to create new comment
3. Create - /comments - POST  &rarr; Create a new comment
4. Show - comments/:id - GET &rarr; Details for one specific comment
5. Edit - /comments/:id/edit - GET &rarr; Form to edit specific comment
6. Update - /comments/:id - PATCH  &rarr; Update one comment
7. Destroy - /comments/:id - DELETE &rarr; Destroy one comment

