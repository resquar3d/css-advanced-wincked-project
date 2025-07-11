// login.js
  document.querySelectorAll('a[href="#login-modal"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('login-modal').style.display = 'block';
    });
  });

  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      this.closest('.modal').style.display = 'none';
    });
  });

  window.addEventListener('click', function(e) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
