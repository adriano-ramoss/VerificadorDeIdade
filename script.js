function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[Erro] Verifique os dados digitados e tente Novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bebeH.jpg')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'img/jovemH.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'img/adultoH.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosoH.jpg')

            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bebeM.jpg')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'img/jovemM.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'img/adultaM.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosoM.jpg')

            }
        }

    res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
    }
    res.style.display = 'inline'
    res.appendChild(img)
    img.style.display = 'flex'
    
}