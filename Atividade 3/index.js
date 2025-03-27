const express = require('express');
const app = express();
const calculadora = require('./calculadora');
const PORT = 3000;

app.get('/', (req, res)=>{
    let html = '<h1>Calculadora</h1>';
    html += '<h3>Acessar operações (substituir variáveis a e b pelos valores): </h3>';
    html += '<h5>http://localhost:3000/somar/:a/:b</h5>';
    html += '<h5>http://localhost:3000/subtrair/:a/:b</h5>';
    html += '<h5>http://localhost:3000/multiplicar/:a/:b</h5>';
    html += '<h5>http://localhost:3000/dividir/:a/:b</h5>';
    res.send(html);
});

app.get('/somar/:a/:b', (req, res)=>{

    let a = Number(req.params.a);
    let b = Number(req.params.b);

    if (isNaN(a) || isNaN(b)){
        res.status(1).send('Ambos os valores precisam ser numéricos!');
    }

    res.send(`A soma de ${a} + ${b} é igual a ${calculadora.somar(a, b)}`);
});

app.get('/subtrair/:a/:b', (req, res)=>{

    let a = Number(req.params.a);
    let b = Number(req.params.b);

    if (isNaN(a) || isNaN(b)){
        res.status(1).send('Ambos os valores precisam ser numéricos!');
    }

    res.send(`A subtração de ${a} - ${b} é igual a ${calculadora.subtrair(a, b)}`);
});

app.get('/multiplicar/:a/:b', (req, res)=>{

    let a = Number(req.params.a);
    let b = Number(req.params.b);

    if (isNaN(a) || isNaN(b)){
        res.status(1).send('Ambos os valores precisam ser numéricos!');
    }

    res.send(`O produto de ${a} * ${b} é igual a ${calculadora.multiplicar(a, b)}`);
});

app.get('/dividir/:a/:b', (req, res)=>{

    let a = Number(req.params.a);
    let b = Number(req.params.b);

    if (isNaN(a) || isNaN(b)){
        res.status(1).send('Ambos os valores precisam ser numéricos!');
    }

    if (b == 0){
        res.status(2).send('Não é possível dividir por 0.');
    }

    res.send(`A divisão ${a} / ${b} é igual a ${calculadora.dividir(a, b)}`);
});

app.listen(PORT, ()=>{

    console.log('Executando na porta ' + PORT);
});
