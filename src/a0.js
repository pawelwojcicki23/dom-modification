console.log('I am a0.js');

// A0.1 - sklonuj div A 10 razy i ustaw go za C

cloneDiv = () => {
    const body = document.querySelector('body'); 
    const div = body.firstElementChild;
    
    for (let i = 0; i < 10; i++) {
      body.appendChild(div.cloneNode(true));
    }
  }

// A0.2 - zastąp div B i C na div A

a02 = () => {
    const body2 = document.querySelector('body');
    const div = body.firstElementChild;
    const div1 = document.querySelectorAll('div')[1];
    const div2 = document.querySelectorAll('div')[2];

    for (let i = 0; i < 3; i++) {
    body2.replaceChild(div1.cloneNode(true), div);
    }
}

// A0.3 - usuń akapity ze wszystkich div
// A0.4 - przestaw miejscami tak zeby było C, B, A
// A0.5 - wstaw diva D na koniec
// A0.6 - wstaw diva Z przed A

const divA = document.querySelector('div');
cons divZ = divA.cloneNode(true);

// A0.7 - wstaw diva z napisem Brake pomiędzy A i B oraz B i C
// A0.8 - wstaw do srodka diva B liste <ul></ul>
// A0.9 - wstaw do diva C sklonowane divy A, B, C