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

