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






