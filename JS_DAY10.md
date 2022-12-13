# js_basic

## array, object
### array
```js
var car = ['소나타', 50000, 'white'];

console.log(car); // ['소나타', 50000, 'white']
car[0] = '아반떼';
console.log(car[0]); // '아반떼'
car[3] = '2022';
console.log(car); // ['아반떼', 50000, 'white', '2022']
```
- array 자료형은 [arr1, arr2, ...] 의 형태로 변수를 저장해 사용할 수 있다
- array 는 index 로 값을 저장/수정/출력할 수 있다
- array 는 순서가 있는 자료형으로, index 활용 및 배열 정렬, 자르기, 순서 바꾸기, 검색 등으로 활용할 수 있다

### array 활용
```js
car.sort(); // 값 정렬
car.slice(1,3); // 배열 index 1부터 3 전까지 자르기
car.push(x); // 배열 맨 뒤에 x 삽입
```
- 위와 같은 배열 조작 기본 함수들이 존재하며, 더 많은 함수는 검색해 사용할 수 있다

### object
```js
var car = {name: '소나타', price: 50000};

console.log(car['name']); // '소나타'
console.log(car.name); // '소나타'
car.name = '아반떼';
console.log(car); // {name: 아반떼, price: 50000}
```
- object 자료형은 {key1: value1, key2: value2, ...} 의 형태로 키 & 변수를 저장해 사용할 수 있다
- object 는 변수['key'] or 변수.key 로 값을 저장/수정/출력할 수 있다
- object 는 순서가 없는 자료형으로, index를 사용할 수 없지만 key 값을 알면 갯수가 많은 자료형에서도 원하는 값을 추출하기 용이하다


## 웹 서비스 개발 방식
### Server-side rendering
- 서버에서 html을 미리 완성해서 Client 요청 시 보내줌(ex. 상품 페이지의 값이 다 채워져 있는 html)

### Client-side rendering
- 값은 비워놓은 html과 데이터를 Client 요청 시 같이 보내주고, JS 가 browser 단(Client 단)에서 데이터를 비워져 있는 html 위치에 넣어줌
- 이 때 비워져 있는 html 위치에 데이터를 넣어주는 것을 데이터 바인딩이라고 한다


## Select
### Select tag
```html
<form class="container my-5 form-group">
    <p>상품선택</p>
    <select class="form-select mt-2">
        <option value="cap">모자</option>
        <option value="shirt">셔츠</option>
    </select>
    <select class="form-select mt-2 form-hide">
        <option>95</option>
        <option>100</option>
        <option>105</option>
        <option>110</option>
    </select>
</form>
```
- select 는 input 과 같이 사용자 인풋을 받는 태그지만, 드롭다운 형태로 미리 설정해놓은 옵션만 선택할 수 있다
- select > option tag 로 응답을 설정할 수 있다
- option은 value 값을 설정할 수 있는데, 따로 지정하지 않을 경우 html 값으로 대체된다

### Responsive Select UI
```css
.form-hide {
    display: none;
}
```
```js
document.querySelectorAll('.form-select')[0].addEventListener('input', function() {
    if ( this.value == 'shirt' ) {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
    } else {
        document.querySelectorAll('.form-select')[1].classList.add('form-hide');
    }
})
```
- 위와 같이 select 에서 유저가 입력한 값은 event listener의 input event 발생 시 value로 받아올 수 있다 (document.querySelectorAll('.form-select')[0].value)
- 여기서 선택한 event 개체는 .form-select 이므로 이를 중복 선택할 때 this or function(e) & eCurrentTarget 으로 대체할 수 있다


## JS로 HTML 생성하는 방법
### JS로 HTML 생성하는 방법 1
```html
<div id='test'>

</div>
```
```js
var a = document.createElement('p');
a.innerHTML = '안녕';
document.querySelector(#test).appendChild(a);
```
1. document.createElement('p') 로 p tag 를 생성해 a 변수에 저장한다
2. a.innerHTML 로 내부 html text를 변경한다
3. Selector로 원하는 부모 개체를 찾고 .appendChild(a) 로 a 변수를 자식 개체로 삽입한다
- (참고) 이 방법이 속도는 가장 빠르나 컴퓨터 성능이 좋아지며 속도의 차이가 미미해졌다

### JS로 HTML 생성하는 방법 2
```js
var a = '<p>안녕</p>';
document.querySelector('#test').insertAdjacentHTML('beforeend', a);
```
1. a 변수에 삽입하고자 하는 html text를 저장한다
2. selector로 원하는 부모 개체를 찾고 .insertAdjacentHTML('삽입위치', a) 로 a 변수를 원하는 위치에 삽입한다
    - (참고) beforeend 는 태그 내부의 맨 아래

### JS로 HTML 생성하는 방법 3
```js
var a = '<p>안녕</p>';
$(#test).append(a);
```
1. a 변수에 삽입하고자 하는 html text를 저장한다
2. jQuery 문법을 이용해 부모 개체를 선택 후 .append(a) 로 a 변수를 삽입한다
    - (참고) append 이용 시 태그 내부의 맨 아래 삽입

### JS로 HTML 내용 대체
```js
var a = '<p>안녕</p>';

document.querySelector(#test).innerHTML = a;
$(#test).html(a);
```


## array, object 반복문
### forEach
```js
var options = [op1, op2, op3];

options.forEach(function(data, i) {
    console.log(data);
});
```
- array 의 값을 하나씩 출력하기 위해 forEach 를 사용할 수 있다
- forEach 사용 시 콜백 함수를 명시해주어야 하며, 콜백 함수의 파라미터 값이 array의 개별 값들이 된다(=op1, op2, op3)
- 콜백 함수의 두번째 파라미터는 array 값의 인덱스를 반환해준다
    - (참고) for 함수보다 forEach 함수가 조금 더 느리다

### for in
```js
var obj = {name: 'kim', age: 20};

for ( var key in obj ) {
    console.log(key); // name age
    console.log(obj[key]); // kim 20
};
```
- object 의 key 와 value 를 하나씩 출력하기 위해서는 for in 문법을 사용할 수 있다
- for 의 파라미터로 임의변수 in object명 을 사용하면 object 각 요소를 반환해주며, 임의변수 = key 가 된다.


## arrow function
### arrow function 문법
```js
arr.forEach(function(data) {
    console.log(data);
});

arr.forEach( (data) => {
    console.log(data);
});

arr.forEach( data => {
    console.log(data); // 파라미터 () 생략
});

arr.forEach( (data) =>
    data; // {} return 생략
);

let func = function() { console.log('hi'); };
let func = () => { console.log('hi'); };
```
- 콜백 함수는 () => {} 로 대체하여 사용 가능하며, 이를 arrow function이라고 부른다
    - (참고) arrow function 에서 콜백 파라미터가 1개면 ()를 생략해도 된다
    - (참고) arrow function 에서 return 한 줄만 출력할 경우 {} return 은 생략해도 된다
- 함수를 변수에 저장해 사용할 때도 arrow function 사용 가능하다
- 콜백 함수 내에서 this를 사용할 경우 주의해야 할 것은, function() {}은 해당 위치에 맞는 this 타겟을 재정의 해주지만, arrow function은 바깥에 지정되어 있던 this 를 그대로 사용한다
