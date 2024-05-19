import express from 'express';
const app = express();

app.use(express.json());

app.get('/api/greet', (req, res) => {
    res.json({message: 'Hello'});

});

app.get('/api/greet/:name', (req, res) => {
    const name = req.params.name;
    res.json({message: 'Hello'+ name});
});

app.listen(3000,()=>{
    console.log('listening on http://localhost:3000/api/greet');
})