
## Description
### Overview
- 개인 과제로 웹개발 기능 대회 예제 한 문제를 구현하고자 한다
- 가상의 '집꾸미기' 사이트의 상품 디스플레이 페이지, 검색, 장바구니, 구매 기능을 요청 사항에 맞게 개발한다(스토어, 시공견적 페이지는 제외)
- UI 디자인 요소는 주요하게 고려하지 않는다


### HTML Layout
![js_basic_shop_main](https://user-images.githubusercontent.com/80051721/215986120-26e2d515-3ea3-4c80-9f23-9e3b2dfd6c8e.png)


### 상품 검색 기능
![js_basic_shop_search](https://user-images.githubusercontent.com/80051721/215990615-fa574057-0cba-47cf-80e5-236fa7f9b514.gif)
- input에 상품명 입력 시 입력 값과 일치하는 상품의 카드만 보여준다
- 검색 입력 값과 일치하는 상품명은 노란색 글자 배경으로 강조한다


### 장바구니 담기 기능
![js_basic_shop_cart](https://user-images.githubusercontent.com/80051721/215992499-b557f20c-a0ac-4c18-b590-b0d36e66f06a.gif)
- 상품 카드를 장바구니 영역으로 드래그하면 장바구니 영역으로 카드가 이동한다
- 이미 장바구니 영역에 있는 카드를 다시 드래그할 경우 상품 수량이 +1 증가한다
- 담기 버튼 클릭 시 동일한 장바구니 담기 기능이 동작한다(장바구니 영역으로 카드 이동 혹은 이미 카드가 있는 경우 상품 수량 +1 증가)
- 장바구니에 담긴 상품의 총 금액은 하단 최종가격 합계에 출력한다


### 구매, 영수증 모달
![js_basic_shop_buy](https://user-images.githubusercontent.com/80051721/215997490-7d99be07-5475-4e9c-bddd-47ee6bfac8b9.gif)
- 구매하기 버튼 클릭 시 이름, 연락처를 입력하는 모달창을 띄운다
- 모달창 기능 구현
    - 닫기 버튼 클릭 시 새로고침 없이 모달창이 닫힌다
    - 이름, 연락처는 각각 공백 검사만 진행하며, 공백 입력 시 알림을 띄운다
    - 이름, 연락처 입력 후 입력 완료를 누르면 주문 완료 알림을 띄운다
- 영수증 기능 구현
    - 입력 완료 요청 성공 시 구매 시각 및 장바구니에 담긴 상품 정보를 영수증 모달에 출력해준다
    - 닫기 버튼 클릭 시 새로고침 없이 영수증 모달창이 닫힌다
    