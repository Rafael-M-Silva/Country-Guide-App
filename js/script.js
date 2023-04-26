const btn = document.querySelector("#btn")

btn.addEventListener("click", (e)=> {
    e.preventDefault()
    alert("test")
})

const url = `https://restcountries.com/v3.1/all?fields=name,flags`

fetch(url)
.then(response()=> {
    return response.json()
})
.then(data()=> {
    console.log(data)
})