window.addEventListener('DOMContentLoaded', ()=> {
    const loader = document.querySelector(".body");
    const body_sec = document.getElementById("body");
    body_sec.style.display = 'none';
    setTimeout(()=> {
        setTimeout(()=> {
            loader.style.display = "none";
        }, 1000)
        loader.style.opacity = "0"
    },2000)
    setTimeout(()=> {
        body_sec.style.display = 'block';
    }, 2500)
    const catefores = document.querySelector('.catefores');
    const bars = document.querySelector('.bars');
    const xmark = document.querySelector('.xmark');
    const box_cate = document.querySelector('.box_cate');
    box_cate.addEventListener('click', ()=> {
        if (catefores.style.display = 'none') {
            bars.style.display = 'none';
            xmark.style.display = 'block';
            catefores.style.display = 'block';
        } else {
            bars.style.display = 'block';
            xmark.style.display = 'none';
            catefores.style.display = 'none';
        }
    })
})