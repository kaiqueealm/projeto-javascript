function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) >  ano){
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) //number pra troca o teclado de letra por numero
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/criança-2.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-2.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-2.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idoso-2.png')
            }
        
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/criança-1.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-1.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-1.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idoso-1.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // onde vai aparecer a imagem depois de tudo 
    }

}


