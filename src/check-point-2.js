
// API Url
const endPoint = 'https://www.themealdb.com/api/json/v1/1/random.php';

// Trigger Button
const triggerButton = document.querySelector('.random-recipe');
triggerButton.addEventListener('click', function(){

 randomRecipe(endPoint);

});


// Random Recipe
async function randomRecipe(endPoint){

 // get the API url
 const url = endPoint;

 // fetching data
 try {

  // define response and get api url
  const response = await fetch(url);

  // error handling of fetching data
  if(!response.ok){
   throw new Error('Fetching data failed');
  }

  // get data resource from API
  const dataResource = await response.json();
  let recipe = dataResource['meals'][0];

  // define recipe 
  let recipeTitle = recipe['strMeal'];
  let recipeInstruction = recipe['strInstructions'];
  let recipeImageSrc = recipe['strMealThumb'];
  
  let  recipeIngredients = [];
  recipeIngredients.push(
   recipe['strIngredient1'],
   recipe['strIngredient2'],
   recipe['strIngredient3'],
   recipe['strIngredient4'],
   recipe['strIngredient5'],
   recipe['strIngredient6'],
   recipe['strIngredient7'],
   recipe['strIngredient8'],
   recipe['strIngredient9'],
   recipe['strIngredient10'],
   recipe['strIngredient11'],
   recipe['strIngredient12'],
   recipe['strIngredient13'],
   recipe['strIngredient14'],
   recipe['strIngredient15'],
   recipe['strIngredient16'],
   recipe['strIngredient17'],
   recipe['strIngredient18'],
   recipe['strIngredient19'],
   recipe['strIngredient20'],
  );

  console.log(recipeIngredients);

  // Manipulate Recipe Instruction
  if(recipeInstruction !== null){
   recipeInstruction = recipeInstruction.replaceAll('\r\n', '<br>');
   recipeInstruction = recipeInstruction.replaceAll('.', '<br>');
  }else{
   recipeInstruction = 'No recipe instruction';
  }

  // Recipe Image
  document.querySelector('#recipe-image').src = recipeImageSrc;
  document.querySelector('#recipe-image').alt = 'recipe-thumbnail';
  document.querySelector('#recipe-image').width = 295;
  document.querySelector('#recipe-image').height = 295;
  
  // Recipe Title
  document.querySelector('#recipe-title').innerHTML = "🍴" + recipeTitle;

  // Adding Ingredients Title
  document.querySelector('.ingredients-title').innerHTML = '🛒 Ingredients:';

  // Looping Ingredients data
  let i = 0;
  while(i < recipeIngredients.length){
   const ingsData = document.createElement('p');
   ingsData.innerHTML = recipeIngredients[i];
   ingsData.className = 'ingredients-data';
   document.querySelector('.ingredients').appendChild(ingsData);
   i++;
  }

  // Recipe Instruction
  document.querySelector('.instruction-title').innerHTML = '👩‍🍳Cooking Instruction:';
  document.querySelector('#recipe-instruction').innerHTML = recipeInstruction;

  // View Adjusting
  document.querySelector('body').classList.toggle('body-height-auto')
  document.querySelector('.container').classList.toggle('container-width-100');
  document.querySelector('.random-recipe').classList.toggle('btn-hidden');
  document.querySelector('#container-title').innerHTML = "✨ Recipe Recommendations for you";

  // Adding button
  const btnConfirm = document.createElement('button');
  btnConfirm.innerHTML = 'Find Another Recipe';
  btnConfirm.className = 'btn-back';
  document.querySelector('.container').appendChild(btnConfirm);

  // Back Button
  const backButton = document.querySelector('.btn-back');
  backButton.addEventListener('click', function(){
   let message = ' 🔔 Do you want to find another recipe ??';
   if(confirm(message) == true){
    location.reload();
   }else{
    message = 'Good Luck and Happy Cooking 😃, Hopefully you will become a good chef !!!';
    alert(message);
   }
  });

 }catch(error) {
  console.error(error);
 }

}