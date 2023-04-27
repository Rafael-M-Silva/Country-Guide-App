const btn = document.querySelector("#btn")

btn.addEventListener("click", (e)=> {
    e.preventDefault()
    renderCountry()
})

/* função para fazer o requerid */
function renderCountry() {
    let img = document.querySelector("#img")
    let country = document.querySelector("#country").value /* pegando o valor do input */
    const url = `https://restcountries.com/v3.1/name/${country}`
    fetch(url)
    .then((response)=> {
        return response.json()
    }).then((data)=> {
        /* Validação caso seja undefined - imprimindo só Nome Invalido e resetando os demais campos */
        if(data[0] == undefined) {
            img.setAttribute("src", ``)
            document.querySelector("#flag").innerHTML = `Nome Invalido!`
            document.querySelector("#capital").innerHTML = ``
            document.querySelector("#continent").innerHTML = ``
            document.querySelector("#population").innerHTML = ``
            document.querySelector("#currency").innerHTML = ``
            document.querySelector("#common").innerHTML = ``
        }else {
            let lengthCommon = data[0].altSpellings.length - 1 /* pegando o tamanho do common */
            let population = data[0].population
            let continent = data[0].subregion
            let currency = data[0].currencies[Object.keys(data[0].currencies)].name /* Estudar Object.keys - Primeira vez usando */
            let capital = data[0].capital[0]
            let common = data[0].altSpellings[lengthCommon]  /* pegando o ultimo valor do common, tentei pegar direto na variavel, mas nao tive sucesso, fiz uma varivel pra pegar o tamanho e passei aqui, por hora está OK! */
            let flags = data[0].flags.png
            let flag = data[0].altSpellings[1]

            /* Imprimindo na tela a resposta da API*/
            img.setAttribute("src", `${flags}`)
            document.querySelector("#flag").innerHTML = `${flag}`
            document.querySelector("#capital").innerHTML = `<b>capital:</b> ${capital}`
            document.querySelector("#continent").innerHTML = `<b>continent:</b> ${continent}`
            document.querySelector("#population").innerHTML = `<b>population:</b> ${population}`
            document.querySelector("#currency").innerHTML = `<b>currency:</b> ${currency}`
            document.querySelector("#common").innerHTML = `<b>common:</b> ${common}`
        }
    })   
}


