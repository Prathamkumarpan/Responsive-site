let navbar = document.querySelector('.navbar');
let toggle = document.querySelector('.toggle');
let set_year =document.getElementById('set_year');
let scroll_btn = document.getElementById('Up_btn');
let img_src= document.querySelector('.content_img');
let btn_right = document.getElementById('btn_right');
let btn_left = document.getElementById('btn_left');
let quotes = document.getElementById('content_company');
let img_arr = [
    {
        src:"./imges/model_img/model_two.jpg",
        quotes:"Ask not what your country can do for you; ask what you can do for your country."
    },
    {
        src:"./imges/model_img/model_four.jpg",
        quotes:"All the world’s a stage, and all the men and women merely players."
    },
    {
        src:"./imges/model_img/model_one.png",
        quotes:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled anddemoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foreseethe pain and trouble that are bound to ensue; and equal blame belongs to those who fail in theirduty through weakness of will, which is the same as saying."
    }
]

// it's mobile toggle menu
toggle.addEventListener('click',()=>{
    document.querySelector('.toggle').classList.toggle('is_active');
    navbar.classList.toggle('active');
})

// copyright section year
let time = new Date();
let year = time.getFullYear();
set_year.innerHTML = year;

// scroll Top section on click
function setup(){
    document.documentElement.scrollTop = 0;
}
scroll_btn.addEventListener('click',setup);

// carousel section

let i = 0;
btn_left.addEventListener('click',()=>{
    i--;
    if(i < 0){
        i =img_arr.length-1;
    }
    img_src.src = img_arr[i].src;
    quotes.innerHTML = img_arr[i].quotes;
});

btn_right.addEventListener('click',()=>{
    img_src.src = img_arr[i].src;
    quotes.innerHTML = img_arr[i].quotes;
    i++;
    if(i > img_arr.length-1){
        i = 0;
    }
});     

