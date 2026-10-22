// Ex.01 
let idade = 17; 

if (idade >= 18) {
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}

// Ex.02 
let numero = -8
 if (numero > 0) {
        console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }

// Ex 03 
{
    let numero = 23;

    if (numero % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
}

// Ex.04 
{
    let a = 35;
    let b = 42;

    if (a > b) {
        console.log(`${a} é maior`);
    } else if (a < b) {
        console.log(`${b} é maior`);
    } else {
        console.log("Os dois são iguais");
    }
}

// Ex.05 
{
    let idade = 20;
    let ingressoValido = true;

    if (idade >= 18 && ingressoValido) {
        console.log("Entrada autorizada");
    } else {
        console.log("Entrada negada");
    }
}

// Ex.06
{
    let valorCompra = 150;
    let clienteVIP = true;
    let desconto = 0;

    if (valorCompra >= 200 || clienteVIP) {
        desconto = valorCompra * 0.20;
    }

    let valorFinal = valorCompra - desconto;

    console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
}

// Ex.07
{
    let temperatura = 85;

    if (temperatura < 40) {
        console.log("Baixa");
    } else if (temperatura <= 80) {
        console.log("Normal");
    } else {
        console.log("Superaquecimento");
    }
}


// Ex.08 
{
    let nota = 8;
    let frequencia = 80;

    if (nota >= 7 && frequencia >= 75) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

// Ex.09
{
    let idade = 17;

    if (idade < 0) {
        console.log("Idade inválida");
    } else if (idade <= 12) {
        console.log("Criança");
    } else if (idade <= 17) {
        console.log("Adolescente");
    } else if (idade <= 59) {
        console.log("Adulto");
    } else {
        console.log("Idoso");
    }
}

// Ex.10
{
    let horario = 19;
    let autorizado = true;

    if (autorizado && horario >= 8 && horario <= 18) {
        console.log("Acesso permitido");
    } else {
        console.log("Acesso negado");
    }
}

// Ex.11
{
    let renda = 4500;
    let possuiRestricao = false;

    if (renda >= 3000 && !possuiRestricao) {
        console.log("Empréstimo aprovado");
    } else {
        console.log("Empréstimo negado");
    }
}

// Ex.12
{
    let totalCompra = 180;
    let cupomFrete = true;
    let frete = 25;

    if (totalCompra >= 250 || cupomFrete) {
        frete = 0;
    }

    let totalPagar = totalCompra + frete;

    console.log(`Total a pagar: R$ ${totalPagar.toFixed(2)}`);
}

// Ex.13
{
    let pontos = 750;

    if (pontos < 100) {
        console.log("Iniciante");
    } else if (pontos < 500) {
        console.log("Bronze");
    } else if (pontos < 1000) {
        console.log("Prata");
    } else {
        console.log("Ouro");
    }
}

// Ex.14
{
    let usuario = "aluno";
    let senha = "senai123";

    if (usuario === "aluno" && senha === "senai123") {
        console.log("Acesso liberado");
    } else {
        console.log("Acesso negado");
    }
}

// Ex.15
{
    let cor = "amarelo";

    if (cor === "verde") {
        console.log("Siga");
    } else if (cor === "amarelo") {
        console.log("Atenção");
    } else if (cor === "vermelho") {
        console.log("Pare");
    } else {
        console.log("Cor inválida");
    }
}

// Ex.16
{
    let dia = 6;

    if (dia < 1 || dia > 7) {
        console.log("Dia inválido");
    } else if (dia <= 5) {
        console.log("Dia útil");
    } else {
        console.log("Fim de semana");
    }
}

// Ex.17
{
    let idade = 22;
    let possuiCNH = false;

    if (idade < 18) {
        console.log("Não pode dirigir: idade menor que 18 anos");
    } else if (!possuiCNH) {
        console.log("Não pode dirigir: não possui CNH");
    } else {
        console.log("Pode dirigir");
    }
}

// Ex.18
{
    let estoque = 4;
    let quantidadePedida = 6;

    if (quantidadePedida <= 0) {
        console.log("Pedido inválido");
    } else if (quantidadePedida <= estoque) {
        estoque = estoque - quantidadePedida;
        console.log("Venda autorizada");
        console.log(`Estoque restante: ${estoque}`);
    } else {
        console.log("Estoque insuficiente");
    }
}

// Ex.19
{
    let nota = 5.8;
    let frequencia = 82;

    if (frequencia < 75) {
        console.log("Reprovado por frequência");
    } else if (nota >= 7) {
        console.log("Aprovado");
    } else if (nota >= 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado por nota");
    }
}

// Ex.20
{
    let valorCompra = 380;
    let percentual = 0;

    if (valorCompra < 100) {
        percentual = 0;
    } else if (valorCompra < 300) {
        percentual = 0.05;
    } else if (valorCompra < 500) {
        percentual = 0.10;
    } else {
        percentual = 0.15;
    }

    let desconto = valorCompra * percentual;
    let total = valorCompra - desconto;

    console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Total: R$ ${total.toFixed(2)}`);
}

// Ex.21 
{
    let ladoA = 3;
    let ladoB = 4;
    let ladoC = 5;

    if (
        ladoA > 0 &&
        ladoB > 0 &&
        ladoC > 0 &&
        ladoA + ladoB > ladoC &&
        ladoA + ladoC > ladoB &&
        ladoB + ladoC > ladoA
    ) {
        console.log("Triângulo válido");
    } else {
        console.log("Triângulo inválido");
    }
}

// Ex.22 
{
    let ladoA = 6;
    let ladoB = 6;
    let ladoC = 4;

    if (
        ladoA <= 0 ||
        ladoB <= 0 ||
        ladoC <= 0 ||
        ladoA + ladoB <= ladoC ||
        ladoA + ladoC <= ladoB ||
        ladoB + ladoC <= ladoA
    ) {
        console.log("Não forma um triângulo");
    } else if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Equilátero");
    } else if (
        ladoA === ladoB ||
        ladoA === ladoC ||
        ladoB === ladoC
    ) {
        console.log("Isósceles");
    } else {
        console.log("Escaleno");
    }
}

// Ex.23
   let peso = 72;
    let altura = 1.75;

    if (peso <= 0 || altura <= 0) {
        console.log("Peso ou altura inválidos");
    } else {
        let imc = peso / (altura ** 2);

        console.log(`IMC: ${imc.toFixed(2)}`);

        if (imc < 18.5) {
            console.log("Abaixo do peso");
        } else if (imc < 25) {
            console.log("Faixa considerada normal");
        } else if (imc < 30) {
            console.log("Sobrepeso");
        } else {
            console.log("Obesidade");
        }
    }

    // Ex.24
    {
    let horas = 5;
    let clienteConveniado = true;

    if (horas <= 0) {
        console.log("Quantidade de horas inválida");
    } else {
        let valor = 10;

        if (horas > 2) {
            valor = 10 + (horas - 2) * 4;
        }

        if (clienteConveniado) {
            valor = valor * 0.80;
        }

        console.log(`Valor final: R$ ${valor.toFixed(2)}`);
    }
}

// Ex.25
{
    let velocidade = 92;
    let limite = 80;

    if (velocidade <= limite) {
        console.log("Dentro do limite");
    } else if (velocidade <= limite * 1.20) {
        console.log("Acima do limite");
    } else {
        console.log("Muito acima do limite");
    }
}

// Ex.26
{
    let media = 9.1;
    let frequencia = 92;
    let rendaFamiliar = 2400;

    if (media >= 9 && frequencia >= 90 && rendaFamiliar <= 2500) {
        console.log("Bolsa integral");
    } else if (
        media >= 7 &&
        frequencia >= 75 &&
        rendaFamiliar <= 4000
    ) {
        console.log("Bolsa parcial");
    } else {
        console.log("Sem bolsa");
    }
}

// Ex.27
{
    let usuario = "admin";
    let senha = "1234";
    let tentativas = 2;

    if (tentativas >= 3) {
        console.log("Conta bloqueada");
    } else if (usuario === "admin" && senha === "1234") {
        console.log("Login autorizado");
    } else {
        console.log("Credenciais inválidas");
    }
}

// Ex.28
{
    let consumoKWh = 250;
    let tarifa = 0;

    if (consumoKWh < 0) {
        console.log("Consumo inválido");
    } else {
        if (consumoKWh <= 100) {
            tarifa = 0.60;
        } else if (consumoKWh <= 200) {
            tarifa = 0.75;
        } else {
            tarifa = 0.90;
        }

        let conta = consumoKWh * tarifa;

        console.log(`Tarifa por kWh: R$ ${tarifa.toFixed(2)}`);
        console.log(`Conta de energia: R$ ${conta.toFixed(2)}`);
    }
}

// Ex.29
{
    let estoque = 12;
    let quantidade = 3;
    let precoUnitario = 80;
    let saldoCliente = 220;
    let clienteVIP = false;

    let subtotal = quantidade * precoUnitario;
    let valorFinal = subtotal;

    if (clienteVIP) {
        valorFinal = subtotal * 0.90;
    }

    if (quantidade <= 0) {
        console.log("Compra recusada: quantidade inválida");
    } else if (quantidade > estoque) {
        console.log("Compra recusada: estoque insuficiente");
    } else if (saldoCliente < valorFinal) {
        console.log("Compra recusada: saldo insuficiente");
    } else {
        estoque = estoque - quantidade;

        console.log("Compra autorizada");
        console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
        console.log(`Estoque restante: ${estoque}`);
    }
}

// Ex.30
{
    let idade = 17;
    let notaProva = 82;
    let frequencia = 88;
    let autorizacaoResponsavel = true;
    let possuiPendencia = false;

    if (
        idade >= 14 &&
        idade <= 20 &&
        notaProva >= 70 &&
        frequencia >= 80 &&
        !possuiPendencia &&
        (idade >= 18 || autorizacaoResponsavel)
    ) {
        console.log("Inscrição aprovada");
    } else {
        console.log("Inscrição recusada");
    }
}