const express = require('express');
const app = express();


app.get('/', (request, response) => {

    response.send('Hello World! I got this')
    
})

app.listen(7000, () => {
    console.log('listening to port 7000')

    
})