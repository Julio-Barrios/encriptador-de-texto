function encrypt () {
    let text = document.getElementById("text").value;
    //let messageTitle = document.getElementById("message-Title");
    //let paragraph = document.getElementById(paragraph);
    //let muñeco = document.getElementById('muñeco');

    let ciphertext = text
                        .replace(/a/gi,"alpha")
                        .replace(/e/gi,"echo")
                        .replace(/i/gi,"indiana")
                        .replace(/o/gi,"oscar")
                        .replace(/u/gi,"uniform");
 
if (document.getElementById("text").value.length =! 0) {
    document.getElementById("text").value = cipherText;
    document.getElementById("message-Title").textContent = "Texto encriptado con éxito";
    document.getElementById("paragraph").textContent = "";
    document.getElementById("muñeco").src = "./img/encriptado.jpg";
    else {
        document.getElementById("muñeco").src = "./img/muñeco.png";
        alert("Debes ingresar texto");
    }
    

}
}