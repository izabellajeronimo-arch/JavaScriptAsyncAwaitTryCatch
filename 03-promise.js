function prepararPedido(){
    return new Promise((resolve)=>{
        console.log("Preparando pedido ......");

        setTimeout(()=>{

            const deuBom = false;
            if(deuBom){
                resolve("Hambúrguer pronto!");
        }else{
            reject("Deu erro ao preparar o hambúrguer")
        }

        }, 3000);
    })
}

prepararPedido()
    .then((resultado)=>{  /// se deu certo
    console.log(resultado)
})
.catch((erro)=>{
    console.log(erro)
});