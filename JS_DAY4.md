# js_basic

## input tag
### input & change event
```js
document.getElementById('email').addEventListener('input', function(){
    console.log('안녕')
})

document.getElementById('email').addEventListener('change', function(){
    console.log('안녕')
})
```
- input tag에서 사용할 수 있는 이벤트 중에는 input, change가 있다
    - input: 입력 창에 값이 변경될 때마다 내부 코드를 실행해준다
    - change: 입력 창에 값이 변경되고 포커스를 읽었을 때 내부 코드를 실행해준다

## boolean & 연산 & 변수
### 조건문 내 boolean
```js
if ( true ) {
    console.log('실행')
}
```
- 조건문 내 괄호 안에는 true or false 값이 들어가야 한다
- 따라서 괄호 내 값/식은 truthy or falsy value 로 변환되어 사용된다
    - truthy:
        - 0 제외 모든 숫자
        - '아무 문자'
        - []
        - {}
    - falsy:
        - 0
        - ''
        - null
        - undefined
        - NaN

### 느슨한 & 엄격한 비교
```js
console.log( 1 == '1' ); // true
console.log( 1 === '1' ); // false
console.log( 1 != '1' ); // false
console.log( 1 !== '1' ); // true
```
- ==, != 는 값만 비교하는 느슨한 비교인 반면,
- ===, !=== 는 자료 타입과 값을 모두 비교하는 엄격한 비교를 하게 된다

### and/or 연산자
```js
if( 1 == 1 && 2 == 2 ) {
    console.log('안녕')
}

if( 1 == 1 || 2 == 3 ) {
    console.log('안녕')
}
```
- && 는 AND 연산자, || 는 OR 연산자


### var, let, const
![image](https://user-images.githubusercontent.com/80051721/204465430-ee3e31d4-9410-4706-8c29-867dccf6982f.png)
- var 변수는 가장 유연해 재선언, 재할당이 가능하고 function 단위로 범위가 제한된다
- let 변수는 재선언은 불가능해 복잡하고 긴 코드에서 실수로 재선언해 사용하는 일을 방지할 수 있고, 중괄호 단위로 범위가 제한된다
- const 변수는 재선언, 재할당 모두 불가능해 수정하면 안되는 값을 할당할 때 사용할 수 있고, 중괄호 단위로 범위가 제한된다

