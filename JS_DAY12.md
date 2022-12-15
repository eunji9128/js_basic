# js_basic

## 브라우저 데이터 저장 공간
- 크롬 개발자 도구에서 Application tab으로 가면 볼 수 있다
### 저장 공간 개요
- Local Starage: key/value 형태로 문자, 숫자 데이터 저장 가능, 강제로 삭제하기 전까지는 브라우저를 닫아도 데이터가 보존된다
- Session Storage: key/value 형태로 문자, 숫자 데이터 저장 가능, 브라우저 종료 시 데이터는 삭제된다
- Indexed DB: 크고 많은 구조화된 데이터를 DB처럼 저장 가능
- Cookies: 유저 로그인 정보 등을 저장
- Cache Storage: html css js img 파일을 임시로 저장해두는 공간

### Local/Session Storage
- 범용적인 브라우저 내 데이터 저장 공간(5MB)
- key/value 형태로 문자, 숫자 데이터만 저장 가능(array, object 등 불가능)

```js
localStorage.setItem('key', 'value'); // 생성
localStarage.getItem('key', 'value'); // 읽기
localStorage.removeItem('key', 'value'); // 삭제
```
- 위와 같이 데이터를 생성/읽기/삭제를 할 수 있다
- session storage 는 localStorage > sessionStorage 로 바꾸면 된다

### Local Storage - array/object 저장
```js
var arr = [1, 2, 3];
var newArr = JSON.stringify(arr);
localStorage.setItem('array', newArr);

var arr1 = localStorage.getItem('array');
var newArr1 = JSON.parse(arr1);

var arr2 = localStorage.getItem('array');
var newArr2 = JSON.parse(arr2);
newArr2.push(4);
localStorage.setItem('array', newArr2);
```
- array, object를 저장하기 위해서는 문자 형식인 JSON 타입으로 변환해 저장/리딩해야 한다
    - JSON.stringify(array): array를 JSON으로 변환
    - JSON.parse(array): JSON을 array/object로 변환
- local storage안의 기 데이터를 수정하기 위해서는 리딩 > 수정 > 같은 key로 재생성 의 과정으로 수정해주어야 한다(직접 수정은 불가능)

