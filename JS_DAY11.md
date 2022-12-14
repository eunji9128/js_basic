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



