export function init() {
    const header = document.getElementById('header')
    const headerHeight = header.clientHeight
    document.getElementById('body').style.marginTop = headerHeight+'px'

    function language(){

        const headerBtn = document.querySelectorAll('.header__lang-toggle-btn')

        headerBtn?.forEach(el => {
            el.addEventListener('click',() => {
                headerBtn?.forEach(all => {all.classList.remove('active')})
                el.classList.add('active')

                const img = el.getAttribute('img-path')
                document.querySelector('.header__lang-title img').setAttribute('src',img)
                document.querySelector('.header__lang-title source').setAttribute('srcset',img)
                const languageText = el.querySelector('p').innerHTML
                document.querySelector('.header__lang-title p').innerHTML = languageText
            })
        })

    }
    language()
    
    function menu(){

        const menuBtn = document.querySelector('.header__menu')
        const menuSpan = document.querySelector('.header__con-back-btn')
        const menu = document.getElementById('menu')
        const menuCon = document.querySelector('.menu__con')
        const menuConHeight = menuCon.clientHeight + 80

        menu.style.top = headerHeight+'px'

        let id = false
        menuBtn.addEventListener('click',() => {
            if (id == false) {
                menu.classList.add('active')
                menu.style.height = menuConHeight+'px'
                menuSpan.classList.add('active')
                id = true
            } else {
                menu.classList.remove('active')
                menu.style.height = '0px'
                menuSpan.classList.remove('active')
                id = false
            }
        })


        document.querySelectorAll('.stat')?.forEach(stat => {
            if (stat.innerHTML.charAt(0) == '+'){
                stat.style.color = 'green'
            } else {
                stat.style.color = 'red'
            }
        })
    }
    menu()
}