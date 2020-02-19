const app = require('./src/server');

app.listen(3001, () => {
    console.log('servidor rodando na porta 3001');
});


// mapeamento para rota para get
// app.get('/', (req, res) => {
//     res.send(
//         '<h1>Minha primeira rota do express</h1>'
//     )
// });

// consign()
//     //incluindo controllers
//     .include('Cotrollers')
//     //no app
//     .into(app);