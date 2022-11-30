# js_basic

## timer
### setTimeout()
```html
<div class="alert alert-danger">
    5초 안에 구매 시 사은품 증정!
</div>
```
```js
setTimeout(function(){
    document.querySelector('.alert').hide();
}, 5000);

// setTimeout(함수명, 5000);
```
- setTimeout(콜백함수, 시간) 을 이용해 일정 시간 뒤 콜백함수가 실행되도록 할 수 있다
    - 시간 단위는 ms 를 사용한다
- 콜백함수 자리에는 function 따로 선언한 뒤 함수명만 넣어주어도 가능하다

### setInterval()
```js
setInterval(function(){
    console.log('안녕')
}, 1000);
```
- 지정한 시간 '마다' 콜백함수가 실행되도록 하려면 setInterval(콜백함수, 시간)을 이용하면 된다

## 자바스크립트 문법 vs Web Browser API 사용법
### 자바스크립트 문법
- var, let, const ...
- if, else if ...
- function ...
- 프로그래밍을 위한 자바스크립트 문법

### Web Browser API 사용법
- document.querySelector() ...
- alert() ...
- setTimeout(), setInterval() ...
- addEventListener() ...
- 웹 브라우저 사용법
- 프로그래밍을 위해서는 자바스크립트 문법만 잘 알아도 가능하지만, 웹을 예쁘게 잘 만들기 위해서는 Web Browser API 사용법도 잘 알아야 한다

## 입력값 검증
### 간단한 문자 검사
```js
'abc'.includes('a');
```
- 문자 뒤에 .includes('검사할 문자')를 이용해 간단하게 해당 문자가 포함되어 있는지 true/false로 확인할 수 있다
- 포함 여부만 확인해줄 수 있는 문법이고, 상세한 검사는 정규식을 사용할 수 있다

### 정규식(정규 표현식 = regular expression)
```js
/a/.test('abc'); // true, a 포함 검사
/[a-z]/.test('abc'); // true, 알파벳 소문자 포함 검사
/[A-Z]/.test('Abc'); // true, 알파벳 대문자 포함 검사
/[a-z][A-Z]/.test('abcABC'); // true, 알파벳 소문자 다음에 대문자 포함 되어 있는 지
/[A-Z][a-z]/.test('abcABC'); // false, 알파벳 대문자 다음에 소문자 포함 되어 있는 지
/[a-zA-Z]/.test('ABCabc'); // true, 알파벳 소문자나 대문자 포함 되어 있는 지
/[0-9]/.test('abc2'); // true, 숫자 포함 검사
/[ㄱ-ㅎ][ㅏ-ㅣ][가-힣]/.test('ㄱㅏ가'); // true, 한글 포함 검사

/\S/.test('abc'); // true, 모든 문자 중 1개가 포함 되었는 지
/\S@\S\.\S/.test('a@b.c'); // true, 모든 문자 1개 @ 문자 1개 . 문자 1개 형식이 맞는 지
/\S@\S\.\S/.test('aaa@bbb.ccc'); // false 
/\S+@\S+\.\S+/.test('aaa@bbb.ccc') // true, 모든 문자 여러개 @ 문자 여려개 . 문자 여러개 형식이 맞는 지
/\S+t/.test('aaat') // true, 모든 문자 여러개 다음에 t라는 글자가 있는 지 검사

/^a/.test('abcde'); // true, a로 시작하는 지
/e$/.test('abcde'); // true, e로 끝나는 지
/e|f/.test('abcde'); // true, e or f 가 포함되는 지
/a+/.test('aaabc'); // true, 뒤에 오는 a까지 반복하여 검사
```
- regular expression test (https://regexr.com/) 도 해볼 수 있다
- 정확한 이메일 형식 정규식은 ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$








