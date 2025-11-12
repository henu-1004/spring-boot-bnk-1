document.addEventListener("DOMContentLoaded", function () {
  // 상품관리 섹션만 선택 (외화예금 상품 현황과 분리)
  const productManageSection = document.querySelector(".product-card:nth-of-type(2)");
  if (!productManageSection) return;

  const tabButtons = productManageSection.querySelectorAll(".tab-btn");
  const rows = productManageSection.querySelectorAll(".product-table tbody tr");

  // 탭 전환 로직
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const status = btn.dataset.status;

      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      rows.forEach((row) => {
        // data-status가 일치할 때만 표시
        if (row.dataset.status) {
          row.style.display = row.dataset.status === status ? "" : "none";
        }
      });
    });
  });

  // “상품 게시” 버튼 클릭 이벤트
  const postButtons = productManageSection.querySelectorAll(".btn-post");
  postButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const productName = this.closest("tr").children[0].textContent.trim();

      // Confirm 메시지 변경
      if (confirm(`${productName} 상품을 등록하시겠습니까?`)) {
        alert("상품이 게시되었습니다");
        this.textContent = "게시 완료";
        this.disabled = true;
        this.classList.add("btn-disabled");
      }
    });
  });

  // 기본으로 “승인 대기 중” 탭을 선택
  tabButtons[0].click();
});
