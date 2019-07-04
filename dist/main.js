function getRecipes() {
    let ingredient = $('.ingredientInput').val()
    $.get(`/recipes/${ingredient}`,function(response){
        renderer.render(response)
    })
}


$('body').on('click','img',function(){
let firstIngredient = $(this).closest('.recipe').find('li').first('li').text()
console.log(firstIngredient)
})