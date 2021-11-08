function darkMode() {
    let body = document.body;
    let div1 = document.querySelector(".div1");
    let div2 = document.querySelector(".div2");
    let scrollBar = document.querySelector(".scroll-bar");
    let aTags = document.querySelectorAll("a")
    body.classList.toggle("body-dark");
    div1.classList.toggle("div1-dark");
    div2.classList.toggle("div2-dark");
    scrollBar.classList.toggle("scroll-bar-dark");
    aTags.forEach(tag => tag.classList.toggle("a-dark"))
    
 }