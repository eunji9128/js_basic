# js_basic

## Simple Animation
### one-way animation
1. 시작 스타일 class 만들기
2. 최종 스타일 class 만들기
3. 이벤트 트리거 시 최종 클래스로 변경되도록 JS 코드 작성
4. 시작 스타일 class에 transition 추가
```html
<body>
    <div>
        <div class="black-bg">
            <div class="white-bg">
            <h4>로그인하세요</h4>
            <button class="btn btn-danger" id="close">닫기</button>
            </div>
        </div>
    </div> 
</body>
```
```css
.black-bg {
    width : 100%;
    height : 100%;
    position : fixed;
    background : rgba(0,0,0,0.5);
    z-index : 5;
    padding: 30px;
    visibility: hidden;
    opacity: 0;
    transition: all 1s;
}

.show {
    visibility: visible;
    opacity: 1;

}
```
- 시작 스타일: black-bg class로 visibility: hidden, opacity: 0으로 보이지 않게 처리 해두었다
    - (참고) display: none은 html에서 아예 없애는 개념으로 보이지 않게 되는 것이고, visibility: hidden은 시각적으로 숨김 처리 되는 것이므로 애니메이션 적용 시에는 visibility 속성을 활용하는 것이 좋다
- 최종 스타일 & JS trigger: black-bg class에 show class를 더해 visible 상태로 변경되도록 해준다
- transition: 시작 스타일에 transition: all 1s로 모든 css 속성이 변경될 때 1초 딜레이가 생기도록 해주었다

## login form
### form tag
```html
<form action="success.html">
  <div class="my-3">
    <input type="text" class="form-control">
   </div>
   <div class="my-3">
     <input type="password" class="form-control">
   </div>
   <button type="submit" class="btn btn-primary" id="send">전송</button>
   <button type="button" class="btn btn-danger" id="close">닫기</button>
</form> 
```
- form tag를 이용해 login form 등을 만들 수 있다
- form tag의 특징은 submit 시 action 속성에 지정한 html로 이동한다는 것이다
    - (참고) 버튼은 각 submit, button 등 type을 명확히 지정해주어야 후에 에러를 방지할 수 있다

### if else 조건문
```js
$('form').on('submit', function(e){
    if ($('.form-id').val().trim() == '') {
        e.preventDefault();
        alert('아이디를 입력하세요');
    } if ($('.form-pw').val().trim() == '') {
        e.preventDefault();
        alert('패스워드를 입력하세요');
    } else {
        alert('기다려주세요');
    }
})
```
- if (조건) {실행 코드} 와 같은 문법으로 조건문을 실행할 수 있다
    - 조건이 참일 경우 안의 코드가 실행
- 위에서 input의 공백을 체크하기 위해 각 input의 value(.val())를 불러왔으며, trim()을 통해 공백을 제거해주어 공백 입력도 방지해주었다
- Event listener 설정 시 button id인 #send 'click' 으로 설정해도 되고, form tag 'submit' 으로 설정해도 동일하다
- 조건문 안에 alert만 실행한다면 form submit action은 그대로 진행된다 > 이를 막기 위해서는 function parameter로 event(=e)를 받아와 e.preventDefault() 실행해주면 된다
    - event 객체에 대해서는 이후 자세히 설명

### else if
```js
if (3 == 3) {
    console.log('참1')
} else if (3 > 1) {
    console.log ('참2')
}

if (3 == 3) {
    console.log('참3')
} if (3 > 1) {
    console.log('참4')
}
```
- else if 문을 붙여 다중 조건식을 사용할 수 있다
- if - else if 문과 if - if 문의 차이점
    - if - else if 문의 경우 if 가 참이어서 내부 코드가 실행되면 따라오는 else if 문은 실행되지 않는다 > 출력 결과: 참1
    - if - if 문의 경우 선행 if 가 참이어서 내부 코드가 실행되어도 후행 if 문도 실행된다 > 출력 결과: 참3 참4
    - (참고) 모든 조건을 탐색하지 않아도 될 경우 if - else if가 효율을 높여줄 수 있다

