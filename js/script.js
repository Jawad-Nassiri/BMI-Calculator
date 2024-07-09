let $ = document;
let weightInput = $.getElementById('weight');
let heightInput = $.getElementById('height');
let weightValueElement = $.getElementById('weight-val');
let heightValueElement = $.getElementById('height-val');
let result = $.getElementById('result');
let categoryElement = $.getElementById('category');




function bmiCalculator(){
   let weightInputValue = weightInput.value;
   let heightInputValue = heightInput.value;

   let bmiValue = (weightInputValue / (Math.pow(heightInputValue/100, 2))).toFixed(1);
   result.innerHTML = bmiValue;

   weightValueElement.innerHTML = weightInputValue;
   heightValueElement.innerHTML = heightInputValue;

   if(bmiValue < 18.5){
      categoryElement.innerHTML = 'Under weight';
      result.style.color = '#ffc44d'
   }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
      categoryElement.innerHTML = 'Normal weight';
      result.style.color = '#0be881'
   }else if(bmiValue >= 25 && bmiValue < 29.9){
      categoryElement.innerHTML = 'Over weight';
      result.style.color = '#ff884d'
   }else{
      categoryElement.innerHTML = 'Obese';
      result.style.color = '#ff5e4d'
   }

}







weightInput.addEventListener('input', bmiCalculator)
heightInput.addEventListener('input', bmiCalculator)