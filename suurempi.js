var prompt=require("prompt-sync")(); 

luku1 = parseFloat(prompt('Syötä ensimmäinen luku:'));
luku2 = parseFloat(prompt('Syötä toinen luku:'));

  if (luku1 > luku2) {
    console.log(`Suurempi luku on: ${luku1}`);
  } else if (luku2 > luku1) {
    console.log(`Suurempi luku on: ${luku2}`);
  } else {
    console.log('Luvut ovat yhtä suuret.');
  }
