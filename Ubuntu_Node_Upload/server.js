var express = require('express');
var port = 2512;
var app = express();
var bodyparser = require('body-parser'); //send and receive JSON, Image

app.use(bodyparser.json())  //send or receive from before GET function calls
app.use(bodyparser.urlencoded(
    {
        extended: false //make use of only array or string not some structure less objects
    }
))

var ingredients = [
    {
        "id": "123a",
        "textt": "Chicken"
    },
    {
        "id": "123b",
        "textt": "chilly"
    },
    {
        "id": "123c",
        "textt": "coconut"
    },
    {
        "id": "123d",
        "textt": "masala"
    }
]

app.get('/ingredent', function(request, response){
    response.send(ingredients);
});

app.post('/ingredent', function(request,response){
    var ingredient = request.body;
    if(!ingredient || ingredient.textt === ""){
        response.status(500).send(
            {
                error:"There is no ingredient"
            }
        )
    }else{
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
});

app.put('/ingredent/:paraIngID', function(request,response){
    var paraText = request.params.paraIngID;
    var newText = request.body.textt;
    var ingFlag = false;

    if(!newText || newText===""){
        response.status(500).send("there should be text for the ingredient");
    }else{
        for(var i=0;i<ingredients.length;i++){
            if(ingredients[i].id==paraText){
                ingFlag = true;
                ingredients[i].textt = newText;
                break;
            }
        }
        if(!ingFlag){
            response.status(500).send(
                {
                    error:"Requested ID is not found"
                }
            )
        } else{
            response.send(ingredients);
        }
    }
});

app.delete('/ingredent', function(request,response){
    var ingID = request.body.id;
    // var ingID = request.params.paraID;
    console.log("ID required is "+ingID)
    var ingFLag = false;
    if(!ingID || ingID===""){
        response.status(500).send(
            {
                error:"There is no ID to delete"
            }
        )
    }else{
        for(var i=0;i<ingredients.length;i++){
            if(ingredients[i].id==ingID){
                console.log("index is " +i)
                ingredients.splice(i,1);
                console.log(ingredients);
                ingFLag = true;
                break;
            }
        }
        if(!ingFLag){
            response.status
            (500).send(
                {
                    error:"There is ID requested"
                }
            )
        }else{
            response.send(ingredients);
        }
    }
})


app.listen(port, function(){
    console.log('Server is running in ' +port);
});