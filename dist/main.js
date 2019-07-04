function getRecipes() {
    let ingredient = $('.ingredientInput').val()
    $.get(`/recipes/${ingredient}`,function(response){
        renderer.render(response)
    })
}