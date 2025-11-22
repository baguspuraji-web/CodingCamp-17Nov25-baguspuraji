welcomeMessage();
function welcomeMessage() {
   
    let userName = prompt("Masukkan Nama Anda:");

  
    if (userName === '' || userName === null) {
        userName = "Anda Masuk sebagai Tamu";
    }
    document.getElementById("welcome-speech").innerText = "Selamat Datang di Web Kami, " + userName + "!";
}

function validateForm() {

}