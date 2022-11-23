# js_basic

## function
### function parameter
```html
<body>
    <div class="alert-box" id="alert">
        알림창
        <button onclick="closeAlert()">닫기</button>
    </div>
    <button onclick="openAlert()">버튼</button>

    <script>
        function openAlert() {
            document.getElementById('alert').style.display = 'block';
        }

        function closeAlert() {
            document.getElementById('alert').style.display = 'none';
        }
    </script>
</body>
```
- 위 openAlert(), closeAlert() function을 parameter를 이용해 하나의 기능으로 구현할 수 있다

```html
<body>
    <div class="alert-box" id="alert">
        알림창
        <button onclick="openAlert('none')">닫기</button>
    </div>
    <button onclick="openAlert('block')">버튼</button>

    <script>
        function openAlert(parameter) {
            document.getElementById('alert').style.display = parameter;
        }
    </script>
</body>
```
- parameter 를 이용해 'block', 'none' 등 가변 status를 function에 입력할 수 있도록 구현하면, function의 재활용이 가능하다

### AddEventListener
```html
<body>
    <div class="alert-box" id="alert">
        <p id='alert-msg'>알림창</p>
        <button id='close-btn'>닫기</button>
    </div>
    <button onclick="openAlert('아이디를 입력하세요')">버튼1</button>
    <button onclick="openAlert('비밀번호를 입력하세요')">버튼2</button>

    <script>
        function openAlert(msg) {
            document.getElementById('alert-msg').innerHTML = msg;
            document.getElementById('alert').style.display = 'block';
        }

        document.getElementById('close-btn').addEventListener('click', function(){
            document.getElementById('alert').style.display = 'none';
        })

    </script>
</body>
```
- addEventListener를 활용하면 JS code(within script tag)만으로도 버튼 동작을 구현할 수 있다
    - 위에서는 'close-btn' id를 가진 개체를 > 'click' 하는 이벤트가 발생하면 > function을 동작시키는 구문이 된다
- addEventListener에는 event parameter, function parameter 두 개가 들어가는데, parameter 자리에 들어가는 함수를 call-back 함수라고 한다 > 함수를 순차적으로 호출


## Selector 문법
### getElementsByClassName
```html
<body>
    <ul class='list-group' id='list'>
        <li class='list-group-item'>list1</li>
        <li class='list-group-item'>list2</li>
        <li class='list-group-item'>list3</li>
    </ul>

    <script>
        document.getElementById('list').addEventListener('click', function(){
            document.getElementsByClassName('list-group')
            [0].classList.toggle('show')
        })
        
    </script>
</body>
```
- id를 이용해 찾는 경우와는 다르게, classname을 이용해 찾는 getElementsByClassName Selector는 같은 classname을 갖는 개체가 다중이기 때문에 변경하고자 하는 개체 대상을 인덱스로 표기해주어야 한다 > getElementsByClassName('list-group')[0]
    - (참고) 해당 classname을 갖는 개체가 하나여도 인덱스를 붙여주어야 한다
    - (참고) class를 추가할 때는 classList.add or classList.toggle을 사용할 수 있다

### querySelector
```html
<body>
    <ul class='list-group' id='list'>
        <li class='list-group-item'>list1</li>
        <li class='list-group-item'>list2</li>
        <li class='list-group-item'>list3</li>
    </ul>

    <script>
        document.querySelector('#list').addEventListener('click', function(){
            document.querySelector('.list-group').classList.toggle('show')
        })
        
    </script>
</body>
```
- querySelector는 css 문법을 그대로 사용하여 선택을 할 수 있다(ex. id > #list, class > .list-group)
- querySelector는 중복되는 개체 중 최상위 하나 개체만 찾아준다
- 다중 요소 중 하나를 특정하기 위해서는 querySelectorAll('.list-group-item')[1] 와 같이 querySelectorAll 문법에 마찬가지로 인덱스를 붙여 사용할 수 있다

## jQuery
### jQuery 개요
- JavaScript 문법을 간결하고 편리하게 사용할 수 있게 해주는 라이브러리
- jQuery cdn 검색해 호스팅 받아 사용할 수 있다
- 한 문장에서 jQuery 문법 뒤에는 jQuery 문법만, JavaScript 문법 뒤에는 JavaScript 문법만 사용할 수 있다

### jQuery 활용
```html
<body>
    <p class='hello'>안녕</p>

    <script>
        // document.querySelector('.hello').innerHTML = '헬로';
        $('.hello').html('헬로');
    </script>
</body>
```
- document.querySelector('.hello') > $('.hello')
    - (참고) $는 querySelectorAll 과 같이 동작하여 모든 개체를 다 선택해준다 > 만약 hello class 가 다수 개체를 포함했다면 모든 개체의 html 을 다 변경 시켜준다
- .innerHTML = '헬로' > .html('헬로')

```html
<body>
    <p class='hello'>안녕</p>

    <script>
        // document.querySelector('.hello').style.color = 'red';
        $('.hello').css('color', 'red');
    </script>
</body>
```
- .style.~~ = '값' > .css('스타일 속성', '값')

```html
<body>
    <p class='hello'>안녕</p>

    <script>
        // document.querySelector('.hello').classList.add('show');
        $('.hello').addClass('show');
    </script>
</body>
```
- .classList.add('classname') > .addClass('classname')
- .classList.remove('classname') > .removeClass('classname')
- .classList.toggle('classname') > .toggleClass('classname')

```html
<body>
    <p class='hello'>안녕</p>
    <p class='hello'>안녕</p>
    <p class='hello'>안녕</p>

    <script>
        // document.querySelectorAll('.hello')[0].innerHTML = '헬로';
        // document.querySelectorAll('.hello')[1].innerHTML = '헬로';
        // document.querySelectorAll('.hello')[2].innerHTML = '헬로';

        $('.hello').html('헬로');
    </script>
</body>
```
- hello classname을 가진 모든 개체를 다 변경하고자 할 때, 인덱스를 일일히 바꿔줄 필요가 없다

```html
<body>
    <p class='hello'>안녕</p>
    <button class='test-btn'>버튼</button>

    <script>
        // document.querySelector('.test-btn').addEventListener('click', function(){
        //     document.querySelector('.hello').innerHTML = '헬로';
        // })

        $('.test-btn').on('click', function(){
            $('.hello').html('헬로');
        })
    </script>
</body>
```
- .addEventListener() > .on()

```html
<body>
    <p class='hello'>안녕</p>
    <button class='test-btn'>버튼</button>

    <script>
        $('.test-btn').on('click', function(){
            $('.hello').hide();
        })
    </script>
</body>
```
- jQuery를 이용해 UI animation도 쉽게 구현할 수 있다
    - .hide() > display: none 과 동일
    - .fadeout() > 천천히 사라짐
    - .slideup() > 위로 올라가며 사라짐 등등

