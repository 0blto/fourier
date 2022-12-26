const spoken = 'https://www.wolframalpha.com/api/v1/spoken-json.jsp'



const result = document.querySelector('.result'),
step = document.querySelector('.step')

const popup = document.querySelector(".popup")
const close = document.querySelector(".popup_close")
const area = document.querySelector(".popup_area")



function pop_up() {
    popup.style.opacity = "1"
    popup.style.visibility = "visible"
    document.body.style.overflowY = "hidden"
}

function pop_down() {
    popup.style.opacity = "0"
    popup.style.visibility = "hidden"
    document.body.style.overflowY = "auto"
}

close.onclick = function() {
    pop_down()
}

area.onclick = function() {
    pop_down()
}

document.querySelectorAll('input').forEach(item => {
    item.oninput = () => {
        step.innerHTML = item.value
        result.style.opacity = '1'
        result.style.visibility = 'visible'
    }
})

document.getElementById('submit').addEventListener('click', () => {
    const queryParams = new URLSearchParams({
        appid: "L48TK6-9RVE7WV446",
        input: 'what is the meaning of life?'
    })
    const apiUrl = spoken + '?' + queryParams.toString()
    const header = new Headers({ "Access-Control-Allow-Origin": "*" })
    console.log(apiUrl)
    fetch(apiUrl,{
        headers: header
    }).then(response => console.log(response))
    
})
