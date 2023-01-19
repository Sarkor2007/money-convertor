export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}


export function convertor() {
    window.onload = function () {
        let c = {'USD':'11000', 'EUR':'12000', 'RUB':'60', 'UZS':'1'}; // Устанавливаем курс валют
    
        let val = document.getElementById('val'); // Получаем элемент ввода данных
        let currency1 = document.getElementById('cur1'); // Получаем первый селект
        let currency2 = document.getElementById('cur2'); // Получаем второй селект
        let result = document.getElementsByClassName('convert_result')[0]; // Получаем поле куда будем писать результат
        function summ() { // Делаем функцию
            let z = 0;
            if(currency1.value === currency2.value){ // Если оба значения в селектах равны
                result.innerText = val.value; // То просто вписываем данные из поля ввода
            } else {
                if(currency1.value != 'UZS'){ // Если не равны uzs, то
                    z = val.value*c[currency1.value]; // Переводим сумму в uzs
                    result.innerHTML = Math.ceil((z/c[currency2.value])*100)/100; // Делим на курс и округляем до сотых
                } else { // Если не равны
                    result.innerHTML = Math.ceil((val.value*c[currency2.value])*100)/100; // Умножаем на курс и округляем до сотых
                }
            }
        }
        val.oninput = function () { // При вводе данных в поле вызываем функцию.
            summ();
        };
        currency1.onchange = function () { // При смене первого селекта вызываем функцию.
            summ();
        };
        currency2.onchange = function () { // При смене второго селекта вызываем функцию.
            summ();
        }
    }
}

export function offer() {
    const offerBtn = document.querySelectorAll('.main__offer-btn ul li a')
    const offerCon = document.querySelectorAll('.main__offer-con')
    offerBtn?.forEach(el => {
        el.addEventListener('click',() => {
            offerCon.forEach(all => {
                all.classList.remove('active')
            })
            offerBtn.forEach(all => {
                all.classList.remove('active')
            })
            const target = el.getAttribute("slide-number")
            offerCon.forEach(el => {
                let id = el.getAttribute('slide-number')
                if (id == target) {
                    el.classList.add('active')
                }
            })
            el.classList.add('active')
        })
    })
}

export function news() {
    const news = document.getElementById('news')
    const divs = document.querySelectorAll('.main-left .left-wrapper')
    const btns = document.querySelectorAll('.main-news__box-title')
    const closeBtns = document.querySelectorAll('.news-close')

    btns.forEach(el => {
        el.addEventListener('click',() => {
            news.classList.add('active')
            divs?.forEach(el => {
                el.style.display = 'none';
            })
        })
    }) 
    closeBtns?.forEach(el => {
        el.addEventListener('click',() => {
            news.classList.remove('active')
            divs?.forEach(el => {
                el.style.display = 'block';
            })
        })
    })
}