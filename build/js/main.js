const initApp = () => {
    const openBtn = document.getElementById('mobile-open-btn')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        openBtn.classList.toggle('toggle-btn')
    }

    openBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

const observer = new IntersectionObserver((entries,observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if(entry.target.classList.contains('slideright')){
                entry.target.classList.add('animate-slide-in-right');
                return;
            }
            if(entry.target.classList.contains('slideleft')){
                entry.target.classList.add('animate-slide-in-left');
                return;
            }
            
            if(entry.target.classList.contains('popup')){
                entry.target.classList.add('animate-pop-up');
                return;
            }
      }
    });
  },{
    root:null,
    threshold:0.5,
});

const slideright = document.querySelectorAll('.slideright');
slideright.forEach((element) => observer.observe(element));
const slideleft = document.querySelectorAll('.slideleft');
slideleft.forEach((element) => observer.observe(element));
const popup = document.querySelectorAll('.popup');
popup.forEach((element) => observer.observe(element));
document.addEventListener('DOMContentLoaded', initApp)