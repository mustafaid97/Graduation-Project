
// select landing page element 
let landingPage = document.querySelector(".landing-page");

// Get Array of Imgs 
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];



setInterval(() => {

    // Get Random Number 
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // Change Background Image Url 
    landingPage.style.backgroundImage = 'url("img/Landing/' + imgsArray[randomNumber] + '")';

}, 7000);



// document.querySelector(".i-2").onclick = function() {

//     document.querySelector(".response-links").classList.toggle("open");
// }

// document.querySelector(".response-links").onclick = function() {

//     document.querySelector(".response-links").classList.remove("open");

// }

// زرار اللنكات في الشاشات الصغيرة

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    e.stopPropagation();

    this.classList.toggle("menu-active");

    tLinks.classList.toggle("open");

};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {

        // Check If Menu Is Open
        if (tLinks.classList.contains("open")) {

            toggleBtn.classList.toggle("menu-active");

            // Toggle Class "open" On Links
            tLinks.classList.toggle("open");

        }


    }

});

// stop Propagation On Menu
tLinks.onclick = function (e) {
    e.stopPropagation();
}



