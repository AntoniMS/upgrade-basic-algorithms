//4.Arrays
//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);
// 1.2
const avengers0 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers0[0] = "IRONMAN";
console.log(avengers0[0]);
// 1.3
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers1.length);
//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);
//1.5
const rickAndMortyCharacters0 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacters0.pop();
console.log(rickAndMortyCharacters0[0]);
console.log(rickAndMortyCharacters0[rickAndMortyCharacters0.length - 1]);

//1.6
const rickAndMortyCharacters1 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacters1.splice(1, 1);
console.log(rickAndMortyCharacters1);
