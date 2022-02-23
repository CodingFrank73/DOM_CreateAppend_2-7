let btn = document.querySelector('button');
btn.addEventListener('click', start);

let counter = 0;

function start() {
    let container = document.createElement('div')

    container.textContent = counter;

    if (counter % 10 == 0) {
        container.classList.add("weiss")
    }

    container.classList.add("rechteck")

    document.body.childNodes[3].appendChild(container)

    counter++;
}