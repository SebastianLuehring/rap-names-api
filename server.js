const express = require('express')
const app = express()
const PORT = 7000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Plaistow, London, England' ,
        'birthLocation': 'Plaistow, London, England'
    },

    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },

    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthplace': 'unknown'
    }
    

}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    response.json(rappers)
})

app.listen(PORT , () =>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})