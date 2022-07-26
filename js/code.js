const navbar = document.querySelector('.box-navbar')
const navlist = document.querySelector('.nav-list')
const link = document.querySelector('.links')


navbar.addEventListener('click', () => {
    navlist.classList.toggle('active')
})

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

const info = document.querySelectorAll('.info')

for (let i = 1; i < info.length; i += 2) {
    info[i].classList.add('right')
}