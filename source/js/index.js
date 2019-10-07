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
    setTimeout(() => header.classList.add('fade'), 800);
    setTimeout(() => main.classList.add('emergence', ), 100);
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