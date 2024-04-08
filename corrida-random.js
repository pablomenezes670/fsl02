const carros = [
    {name: 'carro1', velocidadade: 0, distancia: 0},
    {name: 'carro2', velocidadade: 0, distancia: 0},
    {name: 'carro3', velocidadade: 0, distancia: 0}

];
function atualizarPosição () {
    let vencedor;
    let carro;
    let quantidade = carros.length;

    do{
        let indexRandom = parseInt(Math.random() * carros.length);
        carro = carros[indexRandom];
        carro.distancia += parseInt(Math.random() * 10 + 19);
        vencedor = carro.name;
        console.log(`${carro.name}´ - Diatancia percorrida: ${carro.distancia}`);
        quantidade--;
    }while(quantidade > 0 && carro.distancia < 100);

    if(vencedor && carro.distancia >= 100){
        console.log(`${vencedor} venceu a corrida!`);
        clearInterval(interval);
    }
        /*
    for(let index in carros) {
        let indexRandom = parseInt(Math.random() * 3);
        let carro = carros[indexRandom];

        carro.distancia += parseInt(Math.random() * 10 + 10);

        console.log(`${carro.name} - Distancia percorrida: ${carro.distancia} metros`);

        if(!vencedor && carro.distancia >= 100) {
            vencedor = carro.name;
            break;
        }
    }

    if(vencedor) {
        console.log(`${vencedor} venceu a corrida!`);
        clearInterval(interval);
    }*/




};
const interval = setInterval(atualizarPosição, 1000);