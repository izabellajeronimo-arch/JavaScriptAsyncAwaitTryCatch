function prepararPedido(){
    return new Promise((certo)=>{
        setTimeout(()=>{
           certo("Pizza pronta!"); 
        })
    })
}

function fazerPedido(){
    console.log("Pedido realizado");

    const pedido = prepararPedido();

    console.log(pedido);

    console.log("Pedido Entregue");
}

fazerPedido();