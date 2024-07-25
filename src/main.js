
const togle = document.getElementById('getRecipeBtn');
togle.addEventListener('click', function(){

 // Define Object
 const recipe = {
  title: "Peanut Butter Cheesecake",
  Instruction: "(1) Oil and line a 20cm round loose- bottomed cake tin with cling film, making it as smooth as possible. (2) Melt the butter in a pan. (3) Crush the biscuits by bashing them in a bag with a rolling pin, then stir them into the butter until very well coated. (4)Press the mixture firmly into the base of the tin and chill.(5) Soak the gelatine in water while you make the filling. (6) Tip the ricotta into a bowl, then beat in the peanut butter and syrup. (7) Ricotta has a slightly grainy texture so blitz until smooth with a stick blender for a smoother texture if you prefer. (8) Take the soaked gelatine from the water and squeeze dry. (9) Put it into a pan with the milk and heat very gently until the gelatine dissolves. (10) Beat into the peanut mixture, then tip onto the biscuit base. (11) Chill until set. (12) To freeze, leave in the tin and as soon as it is solid, cover the surface with cling film, then wrap the tin with cling film and foil. (13) To defrost, thaw in the fridge overnight. (14) To serve, carefully remove from the tin. (15) Whisk the cream with the sugar until it holds its shape, then spread on top of the cheesecake and scatter with the peanut brittle.",
  imageSource: "https://www.themealdb.com/images/media/meals/qtuuys1511387068.jpg",
  imageAlt: "receipe-menu",
  imageWidth: 240,
  imageHeight: 240,
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


 



