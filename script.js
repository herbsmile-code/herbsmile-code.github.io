/* =========================================
   Portfolio Tab Menu

   메뉴 버튼을 누르면
   about / projects / automation / contact
   내용만 바뀌게 만드는 코드
========================================= */

function showTab(tabName, clickedButton){

  // 1. 모든 탭 내용을 가져오기
  const contents = document.querySelectorAll(".tab-content");

  // 2. 모든 탭 내용을 숨기기
  contents.forEach(function(content){
    content.classList.remove("active-tab");
  });

  // 3. 클릭한 메뉴에 맞는 내용만 보여주기
  const selectedContent = document.getElementById(tabName);
  selectedContent.classList.add("active-tab");


  // 4. 모든 메뉴 버튼 가져오기
  const buttons = document.querySelectorAll(".nav-link");

  // 5. 모든 메뉴 버튼에서 active 제거
  buttons.forEach(function(button){
    button.classList.remove("active");
  });

  // 6. 지금 클릭한 버튼만 active 표시
  clickedButton.classList.add("active");
}