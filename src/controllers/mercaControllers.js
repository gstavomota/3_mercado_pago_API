//import mercadopago from "mercadopago"
const mercadopago = require("mercadopago")
const Pagamentos = require("../models/Pagamentos")

//export
const criarOrdem = async (req,res) =>{
    //
    
    
    mercadopago.configure({
        access_token: 'TEST-3444750859011299-081120-c81124cbdfde93ab368182924e0d9e07-1178006056'
    });
    
    var preference = {
        items: [{
            title: 'Caneta',
            quantity: 1,
            currency_id: 'ARS',
            unit_price: 1.5
        }],
        notification_url:"https://d664-2804-d45-c22b-b200-6c8b-830f-1176-4919.sa.ngrok.io/notificacao"
    };
    
    mercadopago.preferences.create(preference)
    .then((r)=>{
        res.json(r)
    })
    .catch((e)=>{
        console.log(e)
    })

}
// export 
const notificacaoOrdem = async (req,res)=>{
    const datos = req.query

    const pagamento = await Pagamentos.create({id, topic, type})
    
    console.log(datos)

    res.status(200)


}

module.exports = criarOrdem, notificacaoOrdem;