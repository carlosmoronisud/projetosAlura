//Aqui eu fiz o emcriptador//
function encriptarTexto () {
    let txorig = document.getElementById ('texto').value;
    let textoEncriptado = encriptar (txorig);
    document.getElementById('textoEncriptado').value = textoEncriptado;
}
function desencriptarTexto () {
    let txencript = document.getElementById ('textoEncriptado').value;    
    let textoDesencriptado = desencriptar (txencript);
    document.getElementById('textoDesencriptado').value = textoDesencriptado;
}
function encriptar (chvadeEncriptacao) {
    let encriptacao = chvadeEncriptacao
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  
    return encriptacao;
}
function desencriptar (chaveDesencriptacao) {
    let desencriptacao = chaveDesencriptacao
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  
    return desencriptacao;
  }
  function copiar() {
    let campoTexto = document.getElementById('textoEncriptado');
    campoTexto.select();
    document.execCommand('copy');
}
function limpar() {
  document.getElementById('texto').value = '';
  document.getElementById('textoEncriptado').value = '';
  document.getElementById('textoDesencriptado').value = '';
}

//Aqui fiz o apagar o textarea e restaurar textarea no focus e blur//
document.addEventListener("DOMContentLoaded", function () {  
  const textareas = document.querySelectorAll('textarea');  
  textareas.forEach(textarea => {
      textarea.addEventListener('focus', function () {
          this.placeholder = '';
      });

      textarea.addEventListener('blur', function () {
          this.placeholder = 'Digite seu texto';
      });
  });
});

// Aqui fiz o canvas com efeito matrix //
var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    var text = 'Carlos-Moroni-Garcia';
    var fontSize = 16;
    var columns = canvas.width / fontSize;
    var drops = [];
    for (var x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0f0';
        ctx.font = fontSize + 'px arial';
        for (var i = 0; i < drops.length; i++) {
            var char = text.charAt(Math.floor(Math.random() * text.length));
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);
//e acabou.
