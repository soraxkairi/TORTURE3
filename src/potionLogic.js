import globals from "./globals.js";



export function getIngredients() {
    for (let i = 0; i < 4; i++) {
        let dato =Math.floor(Math.random() * globals.potionData.ingredients.length);
        globals.ingredients.push(dato);
    }
    console.log(globals.ingredients);
    globals.ingredient1.innerHTML = globals.potionData.ingredients[globals.ingredients[0]].name;
    globals.ingredient2.innerHTML = globals.potionData.ingredients[globals.ingredients[1]].name;
    globals.ingredient3.innerHTML = globals.potionData.ingredients[globals.ingredients[2]].name;
    globals.ingredient4.innerHTML = globals.potionData.ingredients[globals.ingredients[3]].name;
    // globals.ingredient3.innerHTML = globals.potionData.ingredients[globals.ingredients[2]].name;
    
    getEffects();
}

function getEffects()
{
    for (let i = 0; i < globals.ingredients.length; i++)
    {
        let effects = globals.potionData.ingredients[globals.ingredients[i]].effects;
        globals.effects.push(effects);
        console.log(globals.effects);
    }

    globals.effects1.innerHTML = globals.effects[0];
    globals.effects2.innerHTML = globals.effects[1];
    globals.effects3.innerHTML = globals.effects[2];
    globals.effects4.innerHTML = globals.effects[3];
    createPotions();
}


// function createPotions()
// {
//     let effects1 = 0;
//     let effects2 = 0;

//     for(let i = 0; i < 2; i++)
//     {
//         let number = Math.floor(Math.random() * globals.ingredients.length);
//         globals.twoIngredients.push(number);
        
        
//     }
//     console.log(globals.twoIngredients);

//     for (let i = 0; i < globals.effects.length; i++)
//     {
//         effects1 = globals.potionData.ingredients[globals.ingredients[globals.twoIngredients[0]]].effects[i];
//         console.log(effects1);
//         for (let j = 0; j < globals.effects.length; j++)
//         {
//             effects2 = globals.potionData.ingredients[globals.ingredients[globals.twoIngredients[1]]].effects[i];
//             console.log(effects2);
//             if (effects1 === effects2)
//             {
//                 console.log("They have the same effect");
                
//             }
//             else if (effects1 !== effects2)
//             {
//                 console.log("Not have the same effects");
//             }

    

//         }

//     }

// }


function createPotions()
{
    let effects1 = 0;
    let effects2 = 0;
    let x = 0;
    let i = 0;
    let message = "";
    for(let i = 0; i < 2; i++)
    {
        let number = Math.floor(Math.random() * globals.ingredients.length);
        globals.twoIngredients.push(number);
        
        
    }
    console.log(globals.twoIngredients);

    while (x < 4)
    {

       
            effects1 = globals.potionData.ingredients[globals.ingredients[globals.twoIngredients[0]]].effects[i];
            console.log(effects1);

            effects2 = globals.potionData.ingredients[globals.ingredients[globals.twoIngredients[1]]].effects[i];
            console.log(effects2);             
            
            
            if (effects1 === effects2)
            {
                message = "They have the same effects";

                
            }
            else (effects1 !== effects2)
            {
                message = "They havent the same effects";
            }

            x++;
            i++;
        
    }
    globals.result.innerHTML = message;
}



