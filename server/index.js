const express = require("express")
const cors = require("cors")
const app = express()
const books = require('./books')

const PORT = 3000

app.use(cors())

app.get('/',(req,res)=>{
    res.send(books['categories'][0])
})

app.get('/api/books/:category',(req,res)=>{
    const category = req.params.category;
    const cat = books['categories'].findIndex(c => c.name === category)
    if (cat === -1) {
        return res.status(404).send('Category not found');
    }
    const categoryBook = books['categories'][cat].books.slice(0,5);
    res.json(categoryBook);
})

app.listen(PORT,()=>{
    console.log(`the Server is run at port ${PORT}`)
})