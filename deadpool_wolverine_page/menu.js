let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

document.addEventListener('DOMContentLoaded', () => {
    const btnTopo = document.getElementById('btn-topo');
    btnTopo.style.display = 'none'; // Oculta o botão inicialmente

    window.addEventListener('scroll', () => {
        // Verifica se a posição de rolagem vertical é maior que a altura da seção inicial
        if (window.scrollY > window.innerHeight) {
            btnTopo.style.display = 'block'; // Mostra o botão se a condição for atendida
        } else {
            btnTopo.style.display = 'none'; // Oculta o botão se a condição não for atendida
        }
    });
});