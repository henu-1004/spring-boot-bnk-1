// -------------------------------------------------------------
// 사용자 정보 변경 모달 (userInfoModal)
// -------------------------------------------------------------
document.querySelector('.profile-footer a').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('userInfoModal').style.display = 'flex';
});

// 닫기 버튼
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('userInfoModal').style.display = 'none';
});

// 바깥 클릭 시 닫기
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    document.getElementById('userInfoModal').style.display = 'none';
  }
});


// -------------------------------------------------------------
// 환전 상세 내역 모달 (exchangeModal)
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const exchangeModal = document.getElementById("exchangeModal");
  const closeExchangeBtn = exchangeModal.querySelector(".close-btn");

  // 환전번호 클릭 → 상세모달 열기
  document.querySelectorAll(".exchange-link").forEach(btn => {
    btn.addEventListener("click", () => {
      exchangeModal.style.display = "flex";

      // 나중에 실제 API 연동 시 이 안에서 데이터 세팅 가능
      // const exId = btn.dataset.id;
      // fetch(`/exchange/detail/${exId}`).then(...)
    });
  });

  // 닫기 버튼
  closeExchangeBtn.addEventListener("click", () => {
    exchangeModal.style.display = "none";
  });

  // 배경 클릭 시 닫기
  window.addEventListener("click", e => {
    if (e.target === exchangeModal) {
      exchangeModal.style.display = "none";
    }
  });
});


// -------------------------------------------------------------
// 계좌 거래내역 모달 (accountModal)
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const accountModal = document.getElementById("accountModal");
  const closeAccountBtn = accountModal.querySelector(".close-btn");

  // 계좌번호 클릭 → 거래내역 모달 열기
  document.querySelectorAll(".account-table td:nth-child(2)").forEach(cell => {
    cell.addEventListener("click", () => {
      accountModal.style.display = "flex";

      // 필요 시 클릭한 계좌번호 정보 가져오기
      // const accNumber = cell.innerText;
      // document.getElementById("acc-number").innerText = accNumber;
      // 실제 데이터는 fetch(`/account/detail/${accNumber}`) 로 연동 가능
    });
  });

  // 닫기 버튼 클릭 시 닫기
  closeAccountBtn.addEventListener("click", () => {
    accountModal.style.display = "none";
  });

  // 배경 클릭 시 닫기
  window.addEventListener("click", (e) => {
    if (e.target === accountModal) {
      accountModal.style.display = "none";
    }
  });
});
