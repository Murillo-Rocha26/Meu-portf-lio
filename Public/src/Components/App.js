const glow = document.querySelector(".glow");
const cards = document.querySelectorAll(".card");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

const routes = {
  home: 'index.html',
  about: 'about.html',
  contact: 'contact.html',
  projects: 'projects.html',
  skills: 'skills.html'
};

/// O colchetes [] fazem função de um array ( lista de itens )
const frase = ["Estagiando em T.I .Futuro Engenheiro de Software. Apaixonado por tecnologia"]
//                  1 frase           2 frase                       3 frase
// frases.length 3
const el = document.querySelector("typewriter")

if (el) {
  let fraseIndex = 0; // fraseIndex mostra qual frase será apresentada
  let charIndex = 0; // CharIndex mostra a ordem, por exemplo "Dev Junior" ----- 1 elemento: "" , 2 elemento "D" , 3 elemento "De" e assim vai...
  let apagando = false; // Retorna o valor em falso onde não vai apagar

  setInterval(() => {
    const frase = frases[fraseIndex];

    if (!apagando) {
      typewriter.textContent = frase.slice(0, charIndex++);
      if (charIndex > frase.length){
      apagando = true;
     setInterval (() => {}, 1000);}
    }
      else {
      typewriter.textContent = frase.slice(0, charIndex--);
      if (charIndex < 0) {
        apagando = false;
        fraseIndex = (fraseIndex + 1) % frases.length; // O length significa a quantidade de itens no array
      }                             // o % assim como em linguagem C significa módulo que é o resto da última frase
    }
  }, 80) // o 80 significa o tempo da animação
}

/// A crase `` usa para colocar textos grandes/normais
const texto = `Tenho 18 anos e atualmente curso Engenharia de Software no Centro Universitário ENIAC, estando no 1º semestre. Sou formado pelo Colégio Presbiteriano Bilíngue, com nível avançado de inglês e conhecimento básico de espanhol.
  
Possuo 6 anos de experiência em vendas e atendimento ao cliente, desenvolvendo habilidades de comunicação, negociação e relacionamento com o público.
  
Na área de tecnologia, tenho conhecimentos em Python, C, HTML e CSS, com maior domínio da linguagem Python. Atualmente, trabalho na empresa H2M Águas, atuando na área de vendas.`;
const el = document.querySelector(".about-content p");

if (el) {

  el.textContent ="";
  let i = 0;
  const intervalo = setInterval(() => {
    el.textContent += texto[i];
    i++;
    if (i>=texto.length) {
      clearInterval(intervalo);
      el.style.borderRight = "none";
    }
  }, 40);
}

function AbrirNovaJanela(){
  window.open("https://github.com/Murillo-Rocha26", "_blank");
}

function AbrirJanela(){
  window.open("https://docs.google.com/document/d/1ctJAJnfGQvqIAP4Renl9ofkXaig3HgEs/edit?usp=drive_link&ouid=112920680478964944931&rtpof=true&sd=true", "_blank" );
}

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

let current = 0;

function goTo(index) {
  cards[current].classList.remove("active");
  current = (index + cards.length) % cards.length;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      cards[current].classList.add("active");
    });
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => goTo(current + 1));
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => goTo(current - 1));
}
