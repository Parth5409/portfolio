// <-------- Script for About Section Columns -------->

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// <-------- Script For Running Text -------->

var typed = new Typed('#element', {
    strings: ['Web Developer,', '&amp; Java Developer.'],
    typeSpeed: 80,
    loop: true,
});

// <-------- Script for Sidebar Menu (Hamburger Menu) -------->

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// <-------- Script to Add Contact Info to Google Sheets -------->

const scriptURL = 'https://script.google.com/macros/s/AKfycbzJM6_eZOQFEKDW_EblcS7pCZpvM16Y_jipT1oLN23V_WYThotcIcWUVldOHdNB-qs/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
