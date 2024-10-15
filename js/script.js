const navlink=document.querySelectorAll('.nav-link');

navlink.forEach(link => {
    link.addEventListener('click',function(){

        navlink.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    })
})

function showSidemenu(){
    const sidebar=document.querySelector('.side-menu');
    sidebar.style.display='flex';
}

function hideSidemenu(){
    const sidebar=document.querySelector('.side-menu');
    sidebar.style.display='none';
}