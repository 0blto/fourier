

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
/*
document.querySelectorAll('input').forEach(item => {
    item.oninput = () => {
        step.innerHTML = item.value
        result.style.opacity = '1'
        result.style.visibility = 'visible'
    }
})
*/