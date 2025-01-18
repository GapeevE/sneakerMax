sizeList = document.getElementsByName('sizeTd')
sizeInput = document.getElementById('sizeInput')
sizeInputValue = sizeInput.getAttribute('value')
sizeList.forEach(e => {
    e.addEventListener('click', function() {
        if (!e.classList.contains('active')) {
            e.classList.add('active')
            sizeInputValue += `${e.innerText} `
        } else {
            e.classList.remove('active')
            resultValue = sizeInputValue.replace(`${e.innerText} `, '')
            sizeInputValue = resultValue
        } 

    })
});

btnStep = document.getElementById('btn-step')
headerStep = document.getElementById('header-step')
counter = document.getElementById('counter')
first = document.getElementById('first')
second = document.getElementById('second')
third = document.getElementById('third')
final = document.getElementById('final')
headerIdealForm = document.getElementById('ideal-form-header')
paragraphIdealForm = document.getElementById('ideal-form-paragraph')
hrIdealForm = document.getElementById('ideal-form-hr')
hrFinal = document.getElementById('final-hr')
stepper = document.getElementById('div-stepper')
congratulation = document.getElementById('congratulation')
bntCongratulation = document.getElementById('get-congratulation')
btnStep.addEventListener('click', function() {
    if (counter.innerText[0] == 1) {
        first.classList.add('hidden')
        second.classList.remove('hidden')
        counter.innerHTML = '2 из 3'
        headerStep.innerHTML = 'Какой размер вам подойдет?'
    } else if (counter.innerText[0] == 2) {
        second.classList.add('hidden')
        third.classList.remove('hidden')
        counter.innerHTML = '3 из 3'
        headerStep.innerHTML = 'Уточните какие-либо моменты'
    } else {
        third.classList.add('hidden')
        final.classList.remove('hidden')
        headerIdealForm.innerHTML = 'Ваша подборка готова!'
        headerStep.classList.add('hidden')
        paragraphIdealForm.innerHTML = 'Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог'
        paragraphIdealForm.style.color = '#DBBBA9'
        hrIdealForm.style.borderTop = '1px solid #DBBBA9'
        hrFinal.classList.add('hidden')
        stepper.classList.add('hidden')
    }
})
bntCongratulation.addEventListener('click', function() {
    final.classList.add('hidden')
    congratulation.classList.remove('hidden')
})

btnsQuestion = document.getElementsByName('btn-question')
contentsQuestion = document.getElementsByName('content-question')
headersQuestion = document.getElementsByName('header-question')
btnsQuestion.forEach(e => {
    e.addEventListener('click', function() {
        contentsQuestion.forEach(c => {
            headersQuestion.forEach(h => {
                if (c.getAttribute('value') == h.getAttribute('value')) {
                    if (c.getAttribute('value') == e.getAttribute('value')) {
                        if (c.classList.contains('hidden')) {
                            c.classList.remove('hidden')
                            e.classList.add('changeSvg')
                        } else {
                            c.classList.add('hidden')
                            e.classList.remove('changeSvg')
                        }
                    }
                }
            })
        })
    })
})

btnLinks = document.getElementById('span-modal-links')
modalLinks = document.getElementById('modal-links')
btnLinks.addEventListener('click', function() {
    (modalLinks.classList.contains('hidden')) ? modalLinks.classList.remove('hidden') :modalLinks.classList.add('hidden')
})

fade = document.getElementById('canvas-fade')
meList = document.getElementsByName('me')
meList.forEach(m => {
    m.addEventListener('click', function() {
        fade.classList.add('popup-active')
    })
})

badge = document.getElementsByName('badge-not-allowed')
btnNotAllowed = document.getElementsByName('btn-not-allowed')
btnNotAllowed.forEach(btn => {
    btn.addEventListener('click', function() {
        badge.forEach(element => {
            if (element.getAttribute('value') == btn.getAttribute('value')) {
                (element.classList.contains('hidden')) ? element.classList.remove('hidden') : (element.classList.add('hidden'))
            }
        });
        if (!btn.classList.contains('size-btn-false')) {
            (btn.classList.contains('size-btn-active')) ? btn.classList.remove('size-btn-active') : btn.classList.add('size-btn-active')
        }
    })
})

selectImg = document.getElementById('select-img')
otherImgList = document.getElementsByName('other-img')
otherImgList.forEach(img => {
    img.addEventListener('click', function() {
        selectImg.getAttribute('src')
    })
})

btnPlaceOrder = document.getElementById('btn-place-order')
fadeFirst = document.getElementById('first-fade')
fadeSecond = document.getElementById('second-fade')
fadeThird = document.getElementById('third-fade')
btnPlaceOrder.addEventListener('click', function() {
    fadeFirst.classList.add('hidden')
    fadeSecond.classList.remove('hidden')
})
coList = document.getElementsByName('co')
coValue = document.getElementById('co-value');
(coValue.innerHTML == 0) ? coValue.classList.add('hidden') : coValue.classList.remove('hidden');
coList.forEach(co => {
    co.addEventListener('click', function() {
        newValue = Number(coValue.innerHTML) + 1
        coValue.innerHTML = newValue
        coValue.classList.remove('hidden')
        if (Number(coValue.innerHTML) > 9) {
            coValue.innerHTML = 1
            coValue.style.color = '#FF0000'
        }
    })
})
btnTrd = document.getElementById('btn-trd-fade')
coText = document.getElementById('co-text')
coText.addEventListener('click', function(event) {
    event.preventDefault()
})
btnTrd.addEventListener('click', function() {
    coValue.innerHTML = 0;
    coValue.classList.add('hidden')
    fade.classList.add('popup-active')
    fadeFirst.classList.add('hidden')
    fadeThird.classList.remove('hidden')
})
btntrdGo = document.getElementById('trd-go-btn')
btntrdGo.addEventListener('click', function() {
    fadeThird.classList.add('hidden')
    fadeSecond.classList.remove('hidden')
})

dropdownHeader = document.getElementById('dropdown-header')
dropdownSvg = document.getElementById('dropdown-svg')
dropdownCard = document.getElementsByName('dropdown-card')
dropdownHeader.addEventListener('click', function() {
    if (dropdownSvg.classList.contains('dropdown-header-active')) {
        dropdownCard.forEach(item => {
            dropdownSvg.classList.remove('dropdown-header-active')
            item.classList.add('hidden')
        })
    } else {
        dropdownCard.forEach(item => {
            item.classList.remove('hidden')
            dropdownSvg.classList.add('dropdown-header-active')
        })
    }
})
dropdownDelBtn = document.getElementsByName('btn-del-dd')
dropdownDelBtn.forEach(b => {
    b.addEventListener('click', function() {
        dropdownCard.forEach(c => {
            if (b.getAttribute('value') == c.getAttribute('value')) {
                c.remove()
            }
        })
    })
})

divTrdCard = document.getElementsByName('trd')
svgTrdCard = document.getElementsByName('trd-svg')
svgTrdCard.forEach(e => {
    e.addEventListener('click', function() {
        divTrdCard.forEach(d => {
            if (e.getAttribute('value') == d.getAttribute('value')) {
                d.remove()
            }
        })
    })
})