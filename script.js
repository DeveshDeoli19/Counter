let count = 0;

let value = document.querySelector("#value")
let btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let className = e.currentTarget.classList
        console.log(className)
        if (className.contains('decrease')) {
            count--;
        }
        else if (className.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }

        count < 0 ? value.style.color = "Red" : count > 0 ? value.style.color = "Green" : value.style.color = "Gray"
        value.innerHTML = count;
    })
})