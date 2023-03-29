import globals from "./globals.js";
import {getIngredients} from "./potionLogic.js";


function initHTMLelements() {

    //Buttons
    globals.btnStart = document.getElementById('start');
    globals.btnContinue = document.getElementById('continue');
    globals.sectionStart    = document.getElementById('BotonInit');
    globals.sectionCreatePotion = document.getElementById('showIngredients');
    globals.sectionResult = document.getElementById('createPotions');
    

    globals.ingredient1 = document.getElementById('ingredient1');
    globals.name1   = document.getElementById('name');
    globals.image1  = document.getElementById('image');
    globals.weight1 = document.getElementById('weight');
    globals.value1    = document.getElementById('value');
    globals.effects1 = document.getElementById('effects');

    globals.ingredient2 = document.getElementById('ingredient2');
    globals.name2    = document.getElementById('name1');
    globals.image2 = document.getElementById('image1');
    globals.weight2= document.getElementById('weight1');
    globals.value2   = document.getElementById('value1');
    globals.effects2 = document.getElementById('effects1');

    globals.ingredient3 = document.getElementById('ingredient3');
    globals.name3     = document.getElementById('name2');
    globals.image3    = document.getElementById('image2');
    globals.weight3   = document.getElementById('weight2');
    globals.value3    = document.getElementById('value2');
    globals.effects3 = document.getElementById('effects2');

    globals.ingredient4 = document.getElementById('ingredient4');
    globals.name4     = document.getElementById('name3');
    globals.image4    = document.getElementById('image3');
    globals.weight4   = document.getElementById('weight3');
    globals.value4    = document.getElementById('value3');
    globals.effects4 = document.getElementById('effects3');

    globals.result = document.getElementById('showResult');
    

}

function initScreen()
{
    globals.sectionStart.style.display = "block";
    globals.sectionCreatePotion.style.display = "none";
    globals.btnStart.addEventListener("mousedown", changeScreen2, false);
    globals.btnContinue.addEventListener("mousedown", changeScreen3, false);
}


function changeScreen2()
{
    console.log("entra");
    globals.sectionStart.style.display = "none";
    globals.sectionCreatePotion.style.display = "block";
    globals.sectionResult.style.display = "none";
    getPotions();
}

function changeScreen3()
{
    globals.sectionStart.style.display = "none";
    globals.sectionCreatePotion.style.display = "none";
    globals.sectionResult.style.display = "block";



}


export function getPotions() {
    
    const url = "https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json";
    
    
    const request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        
        if (this.readyState == 4) {
            
            if (this.status == 200) {
                
                if (this.responseText != null) {
                    
                    const resultJSON = JSON.parse(this.responseText);
                    globals.potionData = resultJSON;
                    console.log(globals.potionData);
                    
                    loadImages();
                    getIngredients();
                    showWeightAndValue();

                } else
                    alert("Comunication error: No data recieved");
            } else
                alert("Comunication error: " + this.statusText);
        }
    }

    request.open('GET', url, true);
    request.responseType = "text";
    request.send();
}



function showWeightAndValue()
{
    globals.weight1.innerHTML = globals.potionData.ingredients[globals.ingredients[0]].weight;
    globals.weight2.innerHTML = globals.potionData.ingredients[globals.ingredients[1]].weight;
    globals.weight3.innerHTML = globals.potionData.ingredients[globals.ingredients[2]].weight;
    globals.weight4.innerHTML = globals.potionData.ingredients[globals.ingredients[3]].weight;

    globals.value1.innerHTML = globals.potionData.ingredients[globals.ingredients[0]].value;
    globals.value2.innerHTML = globals.potionData.ingredients[globals.ingredients[1]].value;
    globals.value3.innerHTML = globals.potionData.ingredients[globals.ingredients[2]].value;
    globals.value4.innerHTML = globals.potionData.ingredients[globals.ingredients[3]].value;
}

function loadImages()
{
    for (let i = 0; i < globals.potionData.ingredients.length; i++)
    {       
        const image = new Image();
        image.src = globals.potionData.ingredients[i].image;
        globals.potionImages.push(image);
    }

    console.log(globals.potionImages);
    globals.image1.innerHTML = globals.potionImages[globals.ingredients[0]];
    globals.image2.innerHTML = globals.potionImages[globals.ingredients[1]];
    globals.image3.innerHTML = globals.potionImages[globals.ingredients[2]];
    globals.image4.innerHTML = globals.potionImages[globals.ingredients[3]];
    
}




export
{
    initHTMLelements,
    initScreen
}