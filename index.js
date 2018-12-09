const express = require('express')
const app = express()
const port = 3000
const key = require('./key.json');



app.get('/:id/:answer', (request, response) => {
    let id = request.params.id
    let answer = request.params.answer

    console.log('key.data.length', key.data.length)
    let result = false;

    function correctAnswer() {
        for (let i = 0; i < key.data.length; i++) {
            console.log('key.data[i][id]', key.data[i]['id'])
            if (key.data[i]['id'] == id) {
                console.log('id is matched and correct answer is', key.data[i]['answer'])
                if (answer === key.data[i]['answer']) {
                    console.log('answer is correct')
                    result = true;
                    return result;
                } else {
                    console.log('answer is not correct')
                    result = false;
                    return result;
                }
            }
        }
        return false;
    }
    response.send(correctAnswer());
})



app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})