const form = document.querySelector('form');

var saveData = (function () {
  var a = document.createElement("a");

  return function (height,weight,res, fileName) {
    console.log(height)
  
          blob = new Blob(["Height - " +height +"\n" +"Weight - " +weight+"\n" +"BMI - " +res], {type: "octet/stream"}),
          url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
  };
  }());

form.addEventListener('submit', function(e){
    e.preventDefault();
    // var fs = require('fs');
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const name = document.querySelector('#name').value;
    const nic = document.querySelector('#nic').value;
    
    if((height === '') || (height < 0) || (isNaN(height))){
        //NaN !== NaN
        results.innerHTML = "Please provide a valid height";
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please provide a valid weight";
    } else {
    //calculate BMI
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
var  category ;
    if(bmi < 18.5){
        category = "Underweight 😒";
        results.style.color = "#ffc44d";
    }
    else if( bmi >= 18.5 && bmi <= 24.9 ){
        category = "Normal Weight 😍";
        results.style.color = "#0be881";
    }
    else if( bmi >= 25 && bmi <= 29.9 ){
        category = "Overweight 😮";
        results.style.color = "#ff884d";
    }
    else{
        category = "Obese 😱";
        results.style.color = "#ff5e57";
    }

    //display the results
    document.getElementById("arr").style.display = "inline";
    document.getElementById("boom").style.display = "none";

    results.innerHTML = `Your BMI is <span>${bmi}</span> <br>${category}`
    saveData(height,weight,bmi, `${name}-${nic}`);

    }  
 

});   