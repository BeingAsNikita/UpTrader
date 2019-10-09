function animation(target) {
    var header = document.querySelector('.header');
    var headerWrap = document.querySelector('.header__wrap')
    var main = document.querySelector('.main');
/*
    headerWrap.classList.add('animated', 'fadeOutUp');
    header.classList.add('hidden');
    setTimeout(() => main.classList.remove('hidden'), 3000) 
    main.classList.add('animate', )
*/

    headerWrap.classList.add('fadeOutUp');
    setTimeout(() => header.classList.add('fade'), 500);
    setTimeout(() => main.classList.add('emergence', ), 200);
    console.log(event.target.id)

    switch(event.target.id) {
        case 'trade': document.querySelector('#tab_1').checked = true;
        break;
        case 'invest': document.querySelector('#tab_2').checked = true;
        break;
        case 'attract': document.querySelector('#tab_3').checked = true;
        break;


      }
    
}

function openContent() {
    var header = document.querySelector('#header');
    var btn = document.querySelector('#'+ event.target.id + '-content');
    console.log(header.offsetHeight)
    if(header.style.backgroundImage !== 'none') {
        header.style.backgroundImage = 'none';
        header.style.height = 100 + '%';
        btn.classList.toggle('main__content--close');
    } else {
        header.style.backgroundImage = 'url("../img/bg-1.png")';
        btn.classList.toggle('main__content--close');
        header.style.height = 100 + 'vh';
    }
}