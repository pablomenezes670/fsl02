const carros = [
    {name: "carros 1", velocidade: 10, distancia: 0},
    {name: "carros 2", velocidade: 10, distancia: 0},
    {name: "carros 3", velocidade: 10, distancia: 0}

];
function atualizarPosicao (){
    let vencedor;
    carros.forEach(function(carro){
        carro.distancia += carro.velocidade + parseInt(Math.random()*10 + 10);
        if(!vencedor && carro.distancia >=100){
            vencedor = carro.name;
            
        }
        console.log(`${carro.name} - Distancia percorrida: ${carro.distancia} metros `);

    });
    
    if(vencedor){
        
        console.log(`${vencedor} venceu a corrida!`);
        clearInterval(interval);
        
    }

}



const interval = setInterval(atualizarPosicao, 1000);