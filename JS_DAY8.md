# js_basic

## 반복문(for)
### for 문법
```js
for (var i = 0; i < 3; i++) {
    console.log(i); // 0 1 2 순서대로 출력
};
```
- 반복하여 같은 코드를 실행할 때 for 문법을 활용한다

### for parameter
```js
for (var i = 0; i < 3; i++) {
    $('.tab-button').eq(i).on('click', function() {
        $('tab-button').removeClass('orange');
        $('tab-button').addClass('orange');
    });
}; // NOK

for (let i = 0; i < 3; i++) {
    $('.tab-button').eq(i).on('click', function() {
        $('tab-button').removeClass('orange');
        $('tab-button').addClass('orange');
    });
}; // OK
```
- (참고) querySelectorAll('.tab-button')[0] = $('.tab-button').eq(0)
- 위와 같이 매개 변수의 타입만 다른 두 반복문이 있을 때, let 타입의 반복문만 원하는 대로 eq(0), eq(1), eq(2) 의 내부 코드가 실행된다
- for with var
    - var 변수 범위는 function 즉, for문 바깥에 생성된다
    - for 문이 실행될 때, 이벤트 리스너는 이벤트가 발생하지 않았기 때문에 리스너 내부 코드는 스킵한 채 반복을 진행한다 (변수 i를 가진 각 이벤트 리스너는 이 때 생성되었다가 이벤트 발생 시 실행되는 듯.. 추가 검색 필요)
    - i = 3이 되며 반복문이 종료된다
    - 이후 tab-button을 클릭하며 이벤트가 발생하면 컴퓨터는 이벤트 리스너를 실행시키는데, 이 때 내부 코드의 i 변수를 근처에 있는 i = 3 으로 사용한다 > $('.tab-button').eq(3) 은 없기 때문에 에러 발생 (변수 i는 for문 바깥에 생성되었으므로, 참조 시 모든 이벤트 리스너는 이미 업데이트 된 i=3을 참조해 사용하는 듯...)
- for with let
    - let 변수 범위는 {} 이므로, for문 내부에 생성된다
    - for 문이 실행될 때, 이벤트 리스너가 내부 코드 실행 없이 생성되고 그 때에 각 반복 시 i=0 or 1 or 2의 변수 값도 각각 생성된다 (마치 지역 변수처럼... 추가 검색 필요)
    - 이후 tab-button을 클릭하며 이벤트가 발생하면 각 이벤트 리스너는 같이 생성된 i=0 or 1 or 2를 참조한다
- ![image](https://user-images.githubusercontent.com/80051721/206644870-e4e1433b-ba13-43e1-8eb9-ddf93820d38f.png)

### 코드 성능 개선 & 확장성
```js
var tab_btn = $('.tab-button');
var tab_ct = $('.tab-content');
var tab_count = $('.tab-button').length;

for (let i = 0; i < tab_count; i++) {
    tab_btn.eq(i).on('click', function() {
        tab_btn.removeClass('orange');
        tab_btn.eq(i).addClass('orange');
        tab_ct.removeClass('show');
        tab_ct.eq(i).addClass('show');
    });
};
```
- (성능 개선) 셀렉터는 매번 html을 다 읽어가며 찾는 구조라 작동 시간이 오래 걸리므로 이를 변수로 저장하여 사용하면 반복 사용 시 성능을 개선시켜 줄 수 있다
- (확장성) tab-button의 개수만큼 반복문을 돌릴 때 개수를 하드코딩할 경우 UI 상 버튼이 추가되면, 그 때마다 js 문서도 같이 변경해주어야 한다 > 이를 방지하기 위해 tab-button 개수를 length로 치환하여 사용하면 버튼 개수에 의존하지 않는 js 코드를 작성할 수 있다
