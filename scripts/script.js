//current page transition 
window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;
    
    if(scroll < 580) {
        document.getElementById("current-page").innerHTML = "<p class='rotate-p'>V</p><p>C<br>O<br>D<br>E<br>/<br>V</p>"
    }else    
    if(scroll > 580 && scroll < 1440) {
        document.getElementById("current-page").innerHTML = "<p>A<br>B<br>O<br>U<br>T</p>" 
    } else
    if(scroll > 1440) {
        document.getElementById("current-page").innerHTML = "<p class='current-p-size'>P<br>R<br>O<br>J<br>E<br>C<br>T<br>S</p>"
    }
})

//button transform
window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;   
    if(scroll < 920) {        
        document.getElementById("btn").style.opacity = "0.05"
    }else{
        document.getElementById("btn").style.opacity = "0.4"
    }
})

//button go to top
const btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

//smoothScroll on page
const body = document.body,
    jsScroll = document.getElementsByClassName('js-scroll')[0],
    height = jsScroll.getBoundingClientRect().height - 1,
    speed = 0.1

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll(){
    offset += (window.pageYOffset - offset) * speed
    var scroll = "translateY(-"+offset+"px) translateZ(0) "
    jsScroll.style.transform = scroll;

    raf = requestAnimationFrame(smoothScroll)
}
smoothScroll();

