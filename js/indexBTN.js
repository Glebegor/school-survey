let name
let surname

function startSurvey(){
    name = document.getElementById('Name').value
    localStorage.setItem('NAME', name)
    surname = document.getElementById('Surname').value
    localStorage.setItem('SURNAME', surname)
    window.location.href = "survey.html"
};

function checkTest(){
    var trueask = 0

    for(var el = 0; el <= 10; el++){
        var ask = document.getElementsByName('ask' + el)

        for(let i = 0; i < ask.length; i++){
            if(ask[i].value == 'True' && ask[i].checked){
                ask[i].style.cssText=` 
                    background: green!important;
                    border: 6px solid green!important; `;
                trueask++
                
                
            }else if(ask[i].value == 'false' && ask[i].checked){
                ask[i].style.background = '#dc3545'
                if(ask[i].value == 'True'){
                    ask[i].style.cssText=` 
                        background: green!important;
                        border: 6px solid green!important; `;
                }

            }
            $('input').prop("disabled", ask[i].value == 'false');
        }
        
    } 
    
    document.getElementById('count').innerHTML = "Ім'я: " + localStorage.getItem("NAME") + '<br>' + " Прізвище: " + localStorage.getItem("SURNAME") + '<br>' + "Оцінка: " + trueask + "/10";
}