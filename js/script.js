let plain = document.getElementById("plain");
let crypt = document.getElementById("crypt");
let decryptcode = document.getElementById("decrypt_code");
let encryptcode = document.getElementById("encrypt_code");

encryptcode.onclick = ()=>{
    crypt.value = window.btoa(plain.value);
}

decryptcode.onclick = ()=>{
    plain.value = window.atob(crypt.value);
}

