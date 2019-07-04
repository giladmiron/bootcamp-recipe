function getRecipes() {
    let ingredient = $('.ingredientInput').val()
    $.get(`/recipes/${ingredient}`,function(response){
        console.log(response)
        renderer.render(response)
    })
}

// $('body').on('click','img',function(){
//     console.log()
// })