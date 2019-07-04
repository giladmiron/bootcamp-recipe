const express = require('express')
const app = express()
const path = require('path')
const request = require('request')

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/sanity', function (req, res) {
    res.send("OK")
})

app.get('/recipes/:ingredient', function (req, res) {
    let ingredient = req.params.ingredient
    request.get(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (error, response) {
        let recipes = JSON.parse(response.body).results
        let recipesResponse = recipes.map(r => {return {
                ingredients: r.ingredients,
                title: r.title,
                thumbnail: r.thumbnail,
                href: r.href
            }
        })
        res.send(recipesResponse)
    })
    
})




const port = 8080
app.listen(port, function () { console.log(`Server is running on port ${port}!`) })
