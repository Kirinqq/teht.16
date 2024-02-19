var prompt=require("prompt-sync")(); 

const sana = prompt('Syötä sana:').toLowerCase(); 

const kaannettySana = sana.split('').reverse().join('');

if (sana === kaannettySana) {
  console.log(`${sana} on palindromi.`);
} else {
  console.log(`${sana} ei ole palindromi.`);
}
