'use strict';

// VARIÁVEIS 
let somaMarguerita = 0;
let somaCampestre = 0;
let somaBarbecue = 0;

let vendaMarguerita = 0.00;
let vendaCampestre = 0.00;
let vendaBarbecue = 0.00;

let btnAdicionar = document.getElementById('adicionar');
let btnRetirar = document.getElementById('retirar');
let btnPlanilha = document.getElementById('export');

// EVENTOS
btnAdicionar.addEventListener('click',adicionar,false);
btnRetirar.addEventListener('click',retirar,false);
btnPlanilha.addEventListener('click',planilha,false);

// FUNÇÕES

function adicionar() {
    if(document.getElementById('marguerita').checked)
    {
        somaMarguerita = somaMarguerita + 1;
        vendaMarguerita = vendaMarguerita + 25.00;
        document.getElementById('resultadoMarguerita').innerHTML = somaMarguerita;
        document.getElementById('vendaMarguerita').innerHTML = vendaMarguerita.toFixed(2);

    }else if(document.getElementById('campestre').checked) 
    {
        somaCampestre = somaCampestre + 1;
        vendaCampestre = vendaCampestre + 25.00;
        document.getElementById('resultadoCampestre').innerHTML = somaCampestre;
        document.getElementById('vendaCampestre').innerHTML = vendaCampestre.toFixed(2);

    } else if (document.getElementById('Barbecue').checked)
    {
        somaBarbecue = somaBarbecue + 1;
        vendaBarbecue = vendaBarbecue + 25.00;
        document.getElementById('resultadoBarbecue').innerHTML = somaBarbecue;
        document.getElementById('vendaBarbecue').innerHTML = vendaBarbecue.toFixed(2);
    }
}

function retirar()
{
    if(document.getElementById('marguerita').checked)
    {
        somaMarguerita = somaMarguerita - 1;
        vendaMarguerita = vendaMarguerita - 25.00;
        if (somaMarguerita < 0) {
            somaMarguerita = 0;
            vendaMarguerita = 0.00;
        }
        document.getElementById('resultadoMarguerita').innerHTML = somaMarguerita;
        document.getElementById('vendaMarguerita').innerHTML = vendaMarguerita.toFixed(2);

    }else if(document.getElementById('campestre').checked) 
    {
        somaCampestre = somaCampestre - 1;
        vendaCampestre = vendaCampestre - 25.00;
        if (somaCampestre < 0) {
            somaCampestre = 0;
            vendaCampestre = 0.00;
        }
        document.getElementById('resultadoCampestre').innerHTML = somaCampestre;
        document.getElementById('vendaCampestre').innerHTML = vendaCampestre.toFixed(2);

    } else if (document.getElementById('Barbecue').checked)
    {
        somaBarbecue = somaBarbecue - 1;
        vendaBarbecue = vendaBarbecue - 25.00;
        if (somaBarbecue < 0) {
            somaBarbecue = 0;
            vendaBarbecue = 0.00;
        }
        document.getElementById('resultadoBarbecue').innerHTML = somaBarbecue;
        document.getElementById('vendaBarbecue').innerHTML = vendaBarbecue.toFixed(2);
    }
}

function planilha(e) {
    TableToExcel.convert(document.getElementById('table'));
}