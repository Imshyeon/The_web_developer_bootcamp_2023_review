# Router
라우터 객체는 미들웨어와 라우트의 인스턴스

# 쿠키(http cookies)
사용자의 브라우저에 저장할 수 있는 아주 작은 정보 조각. 특정 웹 페이지와 연관되어 있다.

- signed 쿠키
  1. fruit : grape로 설정. 그러나 웹 페이지의 Application에서 수동으로 value를 apple 로 설정한다면, signed cookie가 나타나지 않음.
  &rarr; 누군가 바꿨음을 알 수 있음.
  2. 만약 비밀 키를 바꿨을 경우, 그 비밀 키로 서명되었던 모든 쿠키가 무효화.


# HMAC(Hash-based Message Authentication Code) 서명하기
- [HMAC tester tool 참고](https://www.freeformatter.com/hmac-generator.html)
- [HMAC 관련 github 참고](https://github.com/tj/node-cookie-signature/blob/master/index.js)