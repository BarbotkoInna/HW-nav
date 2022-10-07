const navOpener = () => {
    const btnNavOpener = document.querySelector('.js-nav-opener');
    const navHolder = document.querySelector('.js-nav-holder');

    btnNavOpener.addEventListener( 'click', (e) => {
        e.target.classlist.toggle('active');
        navHolder.classlist.toggle('active');  
    });
}

navOpener();ща