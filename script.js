let greutatMark = 78;
let inaltimeMark = 1.69;
let greutatJohn = 92;
let inaltimeJohn = 1.95;

let BMIMark = greutatMark/(inaltimeMark**2);
let BMIJohn = greutatJohn/(inaltimeJohn**2);

console.log ("BMI-ul lui Mark este "+BMIMark);
console.log ("BMI-ul lui John este "+BMIJohn);

let markHigherBMI = (BMIMark>BMIJohn);
console.log (markHigherBMI);

if(BMIMark>BMIJohn){
  console.log ("IMCul lui Mark este mai mare ca acel al lui John.")

}
console.log (`IMCul lui Mark ${BMIMark>BMIJohn ? `este`: `nu este`} mai mare ca IMCul lui John`)