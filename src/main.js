
const togle = document.getElementById('getRecipeBtn');
togle.addEventListener('click', function(){

 // Define Object
 const recipe = {
  title: "Spaghetti Carbonara",
  Instruction: "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
  imageSource: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
  imageAlt: "receipe-menu",
  imageWidth: 200,
  imageHeight: 200,
 }

 // Image
 document.getElementById('recipe-image').src = recipe.imageSource;
 document.getElementById('recipe-image').alt = recipe.imageAlt;
 document.getElementById('recipe-image').width = recipe.imageWidth;
 document.getElementById('recipe-image').height = recipe.imageHeight;

 // Title
 document.getElementById('recipe-title').innerHTML = recipe.title;

 // Instructions
 document.getElementById('recipe-instruction').innerHTML = recipe.Instruction;

 // Change Title
 document.getElementById('container-title').innerHTML = "Today's Food Recipe";

 // Hidden Triger
 document.getElementById('getRecipeBtn').classList.toggle('hidden');


});


 



