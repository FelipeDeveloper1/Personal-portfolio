const ola = document.querySelector('.ola')

const hora = new Date().toLocaleTimeString()
definir = () => {
    if (hora < '12') {
        ola.textContent = 'Ola! Bom dia'
    } else if (hora >= '12' && hora < '18') {
        ola.textContent = 'Ola! Boa tarde'
    } else {
        ola.textContent = 'Ola! Boa noite'
    }
}
definir()

const box = document.querySelectorAll('.box')

for (let i = 1; i < box.length; i += 2) {
    box[i].classList.add('right')
}