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
