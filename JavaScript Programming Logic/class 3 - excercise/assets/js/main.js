const formBMI = document.querySelector(".formBMI");
formBMI.addEventListener("submit",BMI);


function BMI(event){
    event.preventDefault();
    const userMeasures = Take_Values();
    let BMIvalue = BMI_Calculate(userMeasures);
    BMIvalue += BMI_Classification(BMIvalue);
    Show_Result(BMIvalue);
}


function Take_Values(){
    let weight = parseFloat(formBMI.querySelector(".weightInput").value);
    let height = parseFloat(formBMI.querySelector(".HeightInput").value);
    weight = parseFloat(weight.toFixed(1));
    height = parseFloat(height.toFixed(1));
    return {
        weight:weight,
        height:height
    };
}

function BMI_Calculate(measures){
    const w = measures.weight;
    const h = measures.height;
    const BMI = ((w)/(Math.pow(h,2))); 
    return BMI.toFixed(1);
}

function BMI_Classification(bmi){
    let textClassification;
    const resultContainer = document.querySelector(".resultContainer");

    if(bmi < 18.5){
        textClassification = " - Underweight";
        resultContainer.style.background = "blue";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        textClassification = " - Normal weight";
        resultContainer.style.background = "green";
    }else if(bmi >= 25.0 && bmi <= 29.9){
        textClassification = " - Overweight";
        resultContainer.style.background = "orange";
    }else if(bmi >= 30.0 && bmi <= 34.9){
        textClassification = " - Grade 1 obesity";
        resultContainer.style.background = "red";
    }else if(bmi >= 35.0 && bmi <= 39.9){
        textClassification = " - Grade 2 obesity";
        resultContainer.style.background = "darkred";
    }else if(bmi >= 40){
        textClassification = " - Grade 3 obesity";
        resultContainer.style.background = "purple";
    }else{
        textClassification = "";
        resultContainer.style.background = "gray";
    }
    return textClassification;
}



function Show_Result(value){
    const textHtml = document.getElementById('resultText');
    textHtml.innerHTML = value;    
}