# Authorization(권한)
- 관리자라면 특정 댓글(포스팅)을 쓰고 삭제하는데 필요한 모든 것을 조정할 수 있게 함.
- 사용자가 할 수 있는 행동을 확인하는 것.
  
# Authentication(인증)
- 사용자의 신원을 확인하는 것.

## 패스워드를 저장하거나 하지 않는 방법
- 암호 그 자체를 데이터베이스에 저장하면 안된다!
- 그 대신 암호를 해시 함수를 통해 처리. &rarr; 해시 함수의 결과를 데이터베이스에 저장하게 되는 것임.
  - 임의의 크기의 메모리 입력 &rarr; fixed 메모리 출력값.

## 해시 함수
- 변환이 불가능한 단방향 함수
- 입력값에 작은 변화가 있을 때 출력값이 크게 변함
- 동일한 입력값이 항상 같은 결과값을 도출.