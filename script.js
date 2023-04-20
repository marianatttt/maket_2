// var myButton = document.getElementById("myButton");
// var myForm = document.getElementById("myForm");
//
// // Додаємо обробника подій
// myButton.addEventListener("click", function(event) {
//     // Відміняємо дію за замовчуванням (відкриття посилання)
//     event.preventDefault();
//     // Показуємо форму
//     myForm.style.display = "block";
// });

// var closeButton = document.querySelector('.form-close');
// closeButton.addEventListener('click', function(event) {
//     event.
//
//     preventDefault();
//     myForm.
//
//         style.display = 'none';
// });



var myButton = document.getElementById("myButton");
var myForm = document.getElementById("myForm");
var closeButton = document.querySelector(".form-close");
var blurBackground = document.querySelector(".blur-background");

// Додаємо обробника подій на кнопку відкриття форми
myButton.addEventListener("click", function(event) {
    // Відміняємо дію за замовчуванням (відкриття посилання)
    event.preventDefault();
    // Показуємо форму
    myForm.style.display = "block";
    // Робимо задній фон розмитим
    blurBackground.style.filter = "blur(4px)";
});

// Додаємо обробника подій на кнопку закриття форми
closeButton.addEventListener("click", function(event) {
    // Відміняємо дію за замовчуванням (відкриття посилання)
    event.preventDefault();
    // Ховаємо форму
    myForm.style.display = "none";
    // Робимо задній фон чітким
    blurBackground.style.filter = "none";
});

// Додаємо обробника подій на кнопку відправки форми
var formButton = document.querySelector(".form-button");
formButton.addEventListener("click", function(event) {
    // Відміняємо дію за замовчуванням (відправку форми)
    event.preventDefault();
    // Виконуємо потрібні дії при відправці форми
    // ...
});


// ====================

function validateForm() {

    var params = {
        what: document.getElementById("what").value.trim(),
        which: document.getElementById("which").value.trim(),
        type: document.getElementById("type").value.trim(),
        area: document.getElementById("area").value.trim(),
        term: document.getElementById("term").value.trim(),
        tel: document.getElementById("tel").value.trim(),
        email: document.getElementById("email").value.trim(),
    };

    if (!params.what || !params.which || !params.type || !params.area || !params.term || !params.tel || !params.email) {
        alert("Please fill in all required fields.");
        return;
    }
    var phoneRegex =  /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/;
    if (!phoneRegex.test(params.tel)) {
        alert("Будь ласка, введіть номер телефону у правильному форматі");
        return false;
    }
    var emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    if (!emailRegex.test(params.email)) {
        alert("Будь ласка, введіть коректну email-адресу");
        return false;
    }
    if (params.area < 0 || params.term < 0) {
        alert("Будь ласка, введіть не від'ємні числа у полях 'Площа приміщення' та 'Термін роботи'");
        return false;
    }


    const serviceID = "service_d6dvxjs";
    const templateID = "template_mjdm6pj";

    emailjs.send(serviceID, templateID, params)
        .then(res=>{
            document.getElementById("what").value = "";
            document.getElementById("which").value = "";
            document.getElementById("type").value = "";
            document.getElementById("area").value = "";
            document.getElementById("term").value = "";
            document.getElementById("tel").value = "";
            document.getElementById("tel").value = "";
            console.log(res);
            alert("Your message sent successfully!!")
        })
        .catch(err=>console.log(err));

}

// let myImageSlider = new Swiper('.image-slider', {
//     // Стрелки
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
// })