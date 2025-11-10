
  // 모달 열기
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

