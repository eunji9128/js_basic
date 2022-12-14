# js_basic

## 서버 데이터 요청
### 데이터 요청 기본
- 서버에 데이터를 요청할 때는
    1. 어떤 데이터인지 url로 잘 기입하고
    2. 어떤 방법(method: GET, POST ...)으로 요청할 지 결정해야 한다

### GET, POST
```html
<form action="/page" method="post">
    ~~
</form>
```
- GET 은 서버로부터 데이터를 읽어 오는 것, POST는 서버로 데이터를 보내는 것을 의미한다
- 가장 기본적인 GET 요청은 브라우저 주소창에 url 입력+엔터 치는 것이다
- 가장 기본적인 POST 요청은 form tag 에서 action 속성에 주소를 넣고, method=post 로 입력 값을 전달하는 것이다(서버는 보내진 데이터를 DB에 저장)
- GET/POST 요청 시에는 페이지가 새로고침 된다

### (JS) fetch
```js
fetch('https://codingapple1.github.io/price.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
```
- fetch 를 이용하면 페이지 새로고침 없이 데이터를 요청할 수 있다(post는 추가 검색)
- 서버와 클라이언트는 문자 자료만 주고 받을 수 있어 object, array 등의 자료형을 그대로 받아올 수 없다 > 데이터를 ""로 감싸 문자화 시킨 파일이 json이다
- 따라서 서버로 부터 받은 데이터는 json > object 변환이 필요하고, .json() 을 이용해 변환해줄 수 있다
- .then(function(){}) , .catch(function(){}) 를 이용해 요청에 성공했을 시/실패했을 시 콜백 함수를 실행할 수 있다

### (jQuery) Ajax
```js
$.get('https://codingapple1.github.io/hello.txt')
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        console.log('failed');
    });

$.post('https://codingapple1.github.io/hello.txt', {name: 'kim'})
    .done(function(){
        console.log('success');
    }).fail(function(){
        console.log('failed');
    });
```
- Ajax를 사용하면 페이지 새로고침 없이 GET/POST 요청을 할 수 있다(페이지 내 더보기 버튼 클릭 시 재고 추가 랜더링 등에 이용)
- (jQuery) $.get('url') 을 사용해 데이터를 요청할 수 있다
- (jQuery) $.post('url', data) 를 사용해 데이터를 보낼 수 있다
- 둘 다 .done(function(){}) , .fail(function(){}) 를 이용해 요청에 성공했을 시/실패했을 시 콜백 함수를 실행할 수 있다
    - (참고) get 콜백 함수 파라미터에는 요청에 성공한 정보가 담겨 있다
    - (참고) Ajax는 json > object 자동 변환 해준다


## array 정렬
### .sort()
```js
var arr = [7, 3, 5, 2, 40];
var products = [
    {id: 0, price: 5000},
    {id: 1, price: 3000},
    {id: 2, price: 4000}
];

arr.sort(); // 문자 오름차순 [2, 3, 40, 5, 7]

arr.sort(function(a, b) {
    return a - b // 오름차순 [2, 3, 5, 7, 40]
});

arr.sort(function(a, b) {
    return b - a // 내림차순 [40, 7, 5, 3, 2]
});

products.sort(function(a, b) {
    return a.price - b.price // array > obj value 기준으로 오름차순
});
```
- array.sort() 함수는 문자 기준 오름차순 정렬 해주는 함수이다
    - (참고) .sort()는 데이터 원형을 변형시킨다
- array.sort(function(a, b) {return a - b}) 의 동작 원리
    1. a, b는 array의 각 요소 값들이다
    2. return a - b 결과 값이 양수면 a를 오른쪽 정렬해준다
    3. return a - b 결과 값이 음수면 a를 왼쪽 정렬해준다
    4. 이 과정을 모든 array 요소에 대해 진행한다((7, 3), (7, 5), (7, 2), ... (2, 40))
- array > obj 형태의 데이터는 파라미터로 꺼내온 데이터(obj 자료형)의 value를 비교하여 정렬할 수 있다


### filter()
```js
var arr = [7, 3, 5, 2, 40];

var new_arr = arr.filter(function(a) {
    return a < 4 // 필터 조건식, [3, 2]
});
```
- array.filter() 함수는 return 조건식 에 맞는 값들만 필터링해서 반환해주는 함수이다
    - (참고) .filter()는 데이터 원형을 변형하지 않고 새로운 값을 반환하므로, 새 변수에 저장해 사용해야 한다


### map()
```js
var arr = [7, 3, 5, 2, 40];

var new_arr = arr.map(function(a) {
    return a * 10 // 연산식, [70, 30, 50, 20, 400]
});
```
- array.map() 함수는 모든 요소 값을 한 번씩 꺼내 주는 함수이다
    - (참고) .map()은 데이터 원형을 변형하지 않고 새로운 값을 반환하므로, 새 변수에 저장해 사용해야 한다
- map() 함수로 꺼낸 요소를 return 연산식을 활용하면 모든 요소에 같은 연산을 적용해줄 수 있다


## DOM & load
### DOM(Document Object Model)
- JS가 HTML을 조작하기 위해서는 HTML을 JS가 해석할 수 있는 문법으로 변환해주어야 한다
- 이를 위해 브라우저가 HTML 페이지를 열어줄 때 HTML을 object와 비슷한 자료형에 저장해준다(document = {} 라는 변수에 저장)
```html
<div style="color: red">안녕하세요</div>
```
```js
var document = {
    div1 : {
        style : {color : red},
        innerHTML : '안녕하세요'
    }
}
```
- 구체적으로는 위의 div 정보를 document object 자료형 변수에 위와 같이 저장해주고, 이를 document object 이라고 부른다(이런 형태를 가진 모델이 DOM)
- 따라서 DOM 형태의 데이터는 JS 에서 document.querySelector('div').innerHTML = '하이' 등의 문법으로 조작해줄 수 있게 되는 것이다

### ContentLoaded
```html
<script>
    document.getElementById('test').innerHTML = '안녕';
</script>

<p id='test'>테스트</p>
```
- HTML은 위에서부터 차례로 로딩하기 때문에 위와 같이 코드를 작성하면 id='test'인 p tag가 생성되기 전에 'test' id를 가진 개체를 찾기 때문에 에러가 난다

```js
$(document).ready(function() { 실행할 코드 });
document.addEventListener('DOMContentLoaded', function() { 실행할 코드 });
```
- 이를 방지 하기 위해서는 위와 같이 HTML을 다 읽었을 때 코드를 실행해주는 이벤트 리스너를 사용하는 방법이 있다
- JS를 body tag 맨 아래 작성해준다면 발생하지 않을 문제이므로, JS 코드 위치를 내가 정할 수 없을 때 참고하면 좋다

### Load 이벤트 리스너
```js
document.querySelector('#img-file').addEventListener('load', function() { 이미지 로드되면 실행할 코드 });
```
- 'load' 이벤트 리스너를 사용하면 이미지가 로드 완료 되었을 때 코드를 실행해줄 수 있다
- 다만, 외부 JS 파일을 사용하면 JS 파일보다 이미지가 먼저 로드되어 이벤트 발생을 체크하지 못할 수 있다

```js
$(window).on('load', function() {
    document 안의 이미지, html/js 파일 포함 전부 로드 되었을 경우 실행
});

window.addEventListener('load', function() {
    document 안의 이미지, html/js 파일 포함 전부 로드 되었을 경우 실행
});
```
- window에 붙이면 모든 이미지, 파일들이 전부 로드 완료 되었을 때 코드가 실행되도록 할 수 있다
- .ready() 는 DOM 생성만 체크하며, window load 이벤트 리스너는 모든 파일 로드를 체크한다