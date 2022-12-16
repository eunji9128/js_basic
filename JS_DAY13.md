# js_basic

## 중복 클래스에 이벤트 리스너
### 이벤트 리스너 적용
```html
<div class="container">
    <button class="btn">버튼</button>
    <button class="btn">버튼</button>
    <button class="btn">버튼</button>
</div>
```
```js
// JavaScript
document.querySelector('.container').addEventListener('click', function(e) {
    console.log(e.target);
});

// jQuery
$('.btn').click(function(e) {
    console.log(e.target);
});

// NOK case
document.querySelector('.btn').addEventListener() // btn 클래스 중 제일 첫번째 개체만 이벤트 리스너가 적용
document.querySelectorAll('.btn').addEventListener() // Error, querySelectorAll 에는 인덱싱이 필요
```
- 공통 클래스를 가진 개체에 모두 이벤트 리스너를 적용해야 할 때, JavaScript에서는 다수의 클래스 개체에 바로 이벤트 리스너를 적용할 수 없다
- 따라서 이벤트 버블링을 이용하여 부모 개체에 이벤트 리스너를 적용한 뒤, 이벤트 파라미터를 이용해 타겟 개체를 활용하는 방법을 사용해야 한다
- jQuery를 사용할 경우에는 .click(function(){}) 을 이용하면 중복 클래스에도 모두 이벤트 리스너를 적용해줄 수 있다

### Sibling 개체
```html
<div class="container">
    <h4>title</h4>
    <p>10000</p>
    <button class="btn">버튼</button>
    <button>버튼2</button>
</div>
```
```js
// JavaScript
document.querySelector('.container').addEventListener('click', function(e) {
    console.log(e.target.nextElementSibling); // <button>버튼2</button>
    console.log(e.target.previousElementSibling); // <p>10000</p>
    console.log(e.target.previousElementSibling.previousElementSibling); // <h4>title</h4>
    console.log(e.target.previousElementSibling.previousElementSibling.innerHTML); // title
});

// jQuery
$('.btn').click(function(e) {
    console.log($(e.target).siblings('h4')); // S.fn.init [h4, prevObject: S.fn.init(1)]
    console.log($(e.target).siblings('h4').html()); // title
    console.log($(e.target).siblings('h4').text()); // title
});
```
- 같은 레벨에 위치한 태그들을 형제 태그 = sibling 이라고 하는데 타겟 개체의 형제 개체를 찾아주는 문법은 다음과 같다
    - JavaScript: target.nextElementSibling or target.previousElementSibling 를 사용해 앞/뒤에 위치한 형제 개체를 탐색할 수 있다
    - jQuery: $(target).siblings('tag or .class') 를 사용해 특정 태그, 클래스, id 등을 가진 형제 개체를 탐색할 수 있다
