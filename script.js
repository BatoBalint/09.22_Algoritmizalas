let tomb = [3,7,4,2,9,3,6,7];
console.log(tomb);

function ParosSzamokSzama() {
  let db = 0;
  for (var i = 0; i < tomb.length; i++) {
    if(tomb[i] % 2 === 0) db++;
  }
  console.log(db);
}

function SzamokOsszege() {
  let sum = 0;
  for (let num of tomb) {
    sum += num;
  }
  console.log(sum);
}

function HettelOszthato() {
  let vanHettelOszthato = false;
  for (let num of tomb) {
    if (num % 7 === 0 && num != 0) vanHettelOszthato = true;
  }
  if (vanHettelOszthato) console.log('Van 7-tel oszthato');
  else console.log('Nincs 7-tel oszthato.');
}

function ParosSzamokIndexe() {
  let parosIndex = [];
  for (let i in tomb) {
    if (tomb[i] % 2 === 0) parosIndex.push(i);
  }
  console.log(parosIndex);
}

function LegnagyobbSzam() {
  let legnagyobb = tomb[0];
  for (let num of tomb) {
    if (legnagyobb < num) legnagyobb = num;
  }
  console.log(legnagyobb);
}

function LegkisebbSzam() {
  let legkisebb = tomb[0];
  for (let num of tomb) {
    if (legkisebb > num) legkisebb = num;
  }
  console.log(legkisebb);
}

function ParosSzamok() {
  for (var i = 0; i < tomb.length; i++) {
    if(tomb[i] % 2 === 0) console.log(tomb[i]);
  }
}
