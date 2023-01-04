class MoveNavbar {
    constructor(NavHeader, icon, items) {
        this.NavHeader = document.querySelector(NavHeader)
        this.icon = document.querySelector(icon)
        this.items = document.querySelectorAll(items)
        this.active = 'active'
    }

    BringNavBar = () => {
        this.NavHeader.classList.toggle(this.active)
        this.ShowItem()
    }
    ShowItem = () => {
        this.items.forEach((i, index) => {
            i.style.animation == "" ? i.style.animation = `showitems ${index /0.8}s ease forwards 0.4` : i.style.animation = ""
            console.log(i.style.animation)
        })
    }
    check = () => {
        if (this.icon) {
            this.icon.addEventListener('click', () => {
                this.BringNavBar()
            })
        }
    }
    init = () => {
        this.check()
    }
}

const ActNavbar = new MoveNavbar('.nav-list', '.box-navbar', '.item')
ActNavbar.init()