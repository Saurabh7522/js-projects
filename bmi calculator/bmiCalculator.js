const form = document.querySelector('#bmiForm');
const reset =document.querySelector('#reset');



form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const resultsCheck = document.querySelector('.bmiMeasurment');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please enter a valid height ${height}`;
    resultsCheck.innerHTML = '';
  } 
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please enter a valid weight ${weight}`;
    resultsCheck.innerHTML = '';
  } 
  else {
    var bmi = (weight / ((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
  }

if ( bmi < 18000 ) {
    resultsCheck.innerHTML = 'Your fitness level is not Good';
  }
  
  else if (bmi < 25000) {
    resultsCheck.innerHTML = 'Your fitness level is good';
  } else if (bmi < 30000) {
    resultsCheck.innerHTML = 'Your fitness level is fair';
  } 
  else{
    resultsCheck.innerHTML = '';

  }

 
});


reset.addEventListener('click',  (e)=>{
  e.preventDefault();
  document.querySelector('#height').value = '';
  document.querySelector('#weight').value = '';
  document.querySelector('#results').innerHTML = '';
  document.querySelector('.bmiMeasurment').innerHTML = '';
});



