// JS MASUK LOGIN PROTECT
function masuk() {
  let root = document.documentElement;
  var get1 = document.getElementById("passme").value;
  var get2 = "14022023";
  if (get1 == get2) {
    var loginAkses = (document.getElementById("akses").innerHTML = "");
    root.style.setProperty("--blur-size", "0px");
    document.getElementById("protect").style.display = "none";
    setTimeout(function () {
      document.querySelector(".card").style =
        "transition: 1s all ease;display: block;";
    }, 500);
  } else {
    var loginAkses = (document.getElementById("akses").innerHTML =
      "Passwordnya salah ayang yaowoo, masa gatau tanggal jadian kita hiks_-");
  }
}

// JS SURAT

var waktuWib = new Date().getHours();
var finalwaktu = waktuWib.toLocaleString("en-US", { timeZone: "Asia/Jakarta" });

var ucapanSurat;

if (finalwaktu < 12) {
  var ucapanSurat = `Halo Bae Selamat Pagi <3 
    Hummm gimana yah ayang ucapinnya hehe malu aku gabisa ngomong wkwkwkwk  >_<
humm ayanggg selamat ulang tahun yah ndutt, semoga dihari ulang tahun bae yang ke-19 ini bae banyak diberkati sama Tuhan, diberi berkat yang melimpah aminn hehe, hummm maaf yang ayang atas segala kesalahan yang aku buat selama ini, dan aku berdoa supaya kita dikasih kesempatan buat jalanin waktu yang mungkin nggak gampang buat dilewatin, semoga kita bisa sampai dititik yang kita pingin, humm yaudah gak banyak banyak hehe ntar baenya capek bacanya, cuma aku mau bilang ke bae kalo "akutuh sayang banget sama bae" humm yaudah ya ayangg I LOVE U SO MUCH MUACH

HAPPY BIRTHDAY AYANGGGG`;
} else if (finalwaktu >= 12 && finalwaktu <= 15) {
  var ucapanSurat = `Halo Bae Selamat Siang <3
    Hummm gimana yah ayang ucapinnya hehe malu aku gabisa ngomong wkwkwkwk  >_<
humm ayanggg selamat ulang tahun yah ndutt, semoga dihari ulang tahun bae yang ke-19 ini bae banyak diberkati sama Tuhan, diberi berkat yang melimpah aminn hehe, hummm maaf yang ayang atas segala kesalahan yang aku buat selama ini, dan aku berdoa supaya kita dikasih kesempatan buat jalanin waktu yang mungkin nggak gampang buat dilewatin, semoga kita bisa sampai dititik yang kita pingin, humm yaudah gak banyak banyak hehe ntar baenya capek bacanya, cuma aku mau bilang ke bae kalo "akutuh sayang banget sama bae" humm yaudah ya ayangg I LOVE U SO MUCH MUACH

HAPPY BIRTHDAY AYANGGGG`;
} else if (finalwaktu >= 15 && finalwaktu <= 19) {
  var ucapanSurat = `Halo Bae Selamat Sore <3
    Hummm gimana yah ayang ucapinnya hehe malu aku gabisa ngomong wkwkwkwk  >_<
humm ayanggg selamat ulang tahun yah ndutt, semoga dihari ulang tahun bae yang ke-19 ini bae banyak diberkati sama Tuhan, diberi berkat yang melimpah aminn hehe, hummm maaf yang ayang atas segala kesalahan yang aku buat selama ini, dan aku berdoa supaya kita dikasih kesempatan buat jalanin waktu yang mungkin nggak gampang buat dilewatin, semoga kita bisa sampai dititik yang kita pingin, humm yaudah gak banyak banyak hehe ntar baenya capek bacanya, cuma aku mau bilang ke bae kalo "akutuh sayang banget sama bae" humm yaudah ya ayangg I LOVE U SO MUCH MUACH

HAPPY BIRTHDAY AYANGGGG`;
} else if (finalwaktu >= 19 && finalwaktu <= 24) {
  var ucapanSurat = `Halo Bae Selamat Malam <3
    Hummm gimana yah ayang ucapinnya hehe malu aku gabisa ngomong wkwkwkwk  >_<
humm ayanggg selamat ulang tahun yah ndutt, semoga dihari ulang tahun bae yang ke-19 ini bae banyak diberkati sama Tuhan, diberi berkat yang melimpah aminn hehe, hummm maaf yang ayang atas segala kesalahan yang aku buat selama ini, dan aku berdoa supaya kita dikasih kesempatan buat jalanin waktu yang mungkin nggak gampang buat dilewatin, semoga kita bisa sampai dititik yang kita pingin, humm yaudah gak banyak banyak hehe ntar baenya capek bacanya, cuma aku mau bilang ke bae kalo "akutuh sayang banget sama bae" humm yaudah ya ayangg I LOVE U SO MUCH MUACH

HAPPY BIRTHDAY AYANGGGG`;
}

var musik = "./audio/audio2.mp3";

var audio = document.querySelector(".audio");
var isiSurat = document.querySelector(".pesan");
audio.src = musik;
audio.volume = 1;

function tampil() {
  document.querySelector(".card").style =
    "transition: 0.5s all ease;transform: scale(0);opacity: 0;";
  audio.play();
  setTimeout(typeWriter, 1000);
  setTimeout(function () {
    document.querySelector(".content2").style.display = "block";
  }, 400);
}

var i = 0;
var speed = 50;
isiSurat.value = null;

function typeWriter() {
  if (i < ucapanSurat.length) {
    isiSurat.value += ucapanSurat.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.querySelector(".wa").style.display = "block";
  }
}

function nextKuy() {
  document.querySelector(".paper").style =
    "transition: 0.5s all ease;transform: scale(0);opacity: 0;";
  document.querySelector(".wa").style =
    "transition: 0.5s all ease;transform: scale(0);opacity: 0;";
  document.querySelector(".slider").style.display = "block";
}
