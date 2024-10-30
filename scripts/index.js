// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    validateForm();
  });
  
  function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    //validasi username dan password, username dan password bisa diganti sesuai keinginan
    if (username === "31" && password === "31") {
      Swal.fire({
        icon: "success",
        title: "Login berhasil!",
        text: "Selamat datang Riza izami",
        showConfirmButton: false,
        timer: 1500,
      }).then(function () {
        window.location.href = "birthday.html";
        startBackgroundAnimation();
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login gagal!",
        text: "Coba cek lagi username sama passwordnya ya:)",
        confirmButtonText: "Coba lagi",
        confirmButtonColor: "#ff7675",
      });
    }
  }

  function startBackgroundAnimation() {
    const body = document.body;
    let currentIndex = 0;
    const backgroundImages = [
      "../img/IMG-20241030-WA0041.jpg",
      "../img/IMG-20241030-WA0048.jpg",
      "../img/IMG-20241030-WA0042.jpg",
      "../img/IMG-20241030-WA0049.jpg",
      "../img/IMG-20241030-WA0044.jpg",
      "../img/IMG-20241030-WA0050.jpg",
      "../img/IMG-20241030-WA0045.jpg",
      "../img/IMG-20241030-WA0051.jpg",
      "../img/IMG-20241030-WA0046.jpg",
      "../img/IMG-20241030-WA0052.jpg",
      "../img/IMG-20241030-WA0047.jpg",
    ];
  
    function changeBackground() {
      body.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
      currentIndex = (currentIndex + 1) % backgroundImages.length;
    }
  
    setInterval(changeBackground, 5000); // Ubah background setiap 5 detik
  }