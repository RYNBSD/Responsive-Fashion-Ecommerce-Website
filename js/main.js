/* ========== Navigation =========== */
const navList = document.querySelector('.nav-list')
const hamburger = document.querySelector('.hamburger')
const Close = document.querySelector('.close')

//console.log(navList, hamburger, Close);

hamburger.addEventListener('click', () => {
    navList.classList.add('show')       
})

Close.addEventListener('click', () => {
    navList.classList.remove('show')       
})
