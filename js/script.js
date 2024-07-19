// Gráfico --> Seção 05


const ctx = document.getElementById('grafico1');

        new Chart(ctx, {
            type: 'bar',
            data: {
            labels: [2000,2001,2003,2005,2007,2009,2011,2013,2015,2017,2019,2021,2023],
            datasets: [{
                label: 'Acumulado',
                data: [25,37,49,60,79,107,141,183,298,459,631,746,769],
                borderWidth: 1,
                backgroundColor:'#074d0770'
            }
        ,
            {
            label: 'Novas',
            data: [25,8,12,11,19,28,34,42,115,161,172,115,23],
            borderColor: '#FF6384',
            backgroundColor: '#34c75a'
            }   
        
        ]
            },
            
            options: {
            scales: {
                y: {
                beginAtZero: true
                }
            }
            }
        });





const btn_plus =document.querySelectorAll(".mais-pergunta");
const respostas = document.getElementById("caixa-respostas");
const txt_resposta = document.getElementById("txt-resposta")
let click = 1;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");




function maisClick(btn) {
        click +=1;
        if (click%2==0){
            respostas.style.display = "block";
            switch (btn){
                case 1:
                    txt_resposta.innerHTML = "<p>Ola Mundo1</p>";
                    btn1.innerText ="x";
                    abrirResposta();
                    break;
                case 2:
                    txt_resposta.innerHTML = "<p>Ola Mundo2</p>";
                    btn2.innerText ="x";
                    abrirResposta();
                    break
                
                case 3:
                    txt_resposta.innerHTML = "<p>Ola Mundo3</p>";
                    btn3.innerText ="x";
                    abrirResposta();
                    break;
    
                case 4:
                    txt_resposta.innerHTML = "<p>Ola Mundo4</p>";
                    btn4.innerText ="x";
                    abrirResposta();
                    break
            }
        }
        else {
            abrirResposta(false);
            btn1.innerText = "+";
            btn2.innerText = "+";
            btn3.innerText = "+";
            btn4.innerText = "+";
        }

    }



function abrirResposta(status = true){
        if(status){
            for (var x=1;x < 40;x++){
                console.log(x)
                setTimeout(function() {
                    respostas.style.width = x+"%";
                  }, 200);
            }
        }
        else {
            for (var x=40;x > 0 ;x--){
                console.log(x)
                setTimeout(function() {
                    respostas.style.width = x+"%";
                  }, 200);
                
            }

        }

    }









const menu = document.getElementById("menu");
const menuHamburguer = document.getElementById("menu-hamburguer");

let menuClick = 1;



const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");


menuAtivado();




function abrirMenu() {
    menuClick++
    if(menuClick % 2 == 0 ){
        menuAtivado(false);
        menu.style.display = "block";
        for (var y=1;y < 30;y++){
            console.log(y)
            setTimeout(function() {
                menu.style.height = y+"%";
              }, 100);
        }
        

        

    }
    else {
        menuAtivado();
        for (var y=30;y > 0;y--){
            console.log(y)
            setTimeout(function() {
                menu.style.height = y+"%";
              }, 100);
        }
    }

    }

    function menuAtivado(status=true) {
        if (status){
            b1.style.opacity = 1;
            b2.style.opacity = 1;
            b3.style.opacity = 1;
            b1.style.transform = "rotate(0)";
            b3.style.transform = "rotate(0)";
            b1.style.top = "0";
            b2.style.top = "16px";
            b3.style.top = "32px";
        }
        else {
            b1.style.opacity = 1;
            b2.style.opacity = 0;
            b3.style.opacity = 1;
            b1.style.top = "15px";
            b1.style.transform = "rotate(-45deg)";
            b3.style.top = "15px";
            b3.style.transform = "rotate(45deg)";

    
        }
    }