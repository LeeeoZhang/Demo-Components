const express = require('express')
const app = express()

app.listen(3000, err => {
    if (err) {
        return console.log(err)
    }
    console.log('打开http://localhost:3000')
})

app.get('/parent', (req, res) => {
    res.cookie('paren-name','paren-value',{
        path: '/parent'
    })
    res.send('<h1>父路径</h1>')
})

app.get('/parent/childA', (req, res) => {
    res.cookie('child-name-A','child-value-A',{
        path: '/parent/childA'
    })
    res.send('<h1>子路径A</h1>')
})

app.get('/parent/childB', (req, res) => {
    res.cookie('child-name-B','child-name-B',{
        path: '/parent/childB'
    })
    res.send('<h1>子路径B</h1>')
})

