// document.addEventListener("DOMContentLoaded", function() {
//     const mainImage = document.getElementById('big-img');
//     const thumb1 = document.getElementById('slide-img1');
//     const thumb2 = document.getElementById('slide-img2');

//     thumb1.addEventListener('click', function() {
//         mainImage.style.backgroundImage = "C:/Users/Hp/Desktop/mindx/web car/productdetail/productimg/carbig.jpg";
//     });

//     thumb2.addEventListener('click', function() {
//         mainImage.style.backgroundImage = 'url(C:/Users/Hp/Desktop/mindx/web car/productdetail/productimg/carbig2.jpg)';
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const thumbnails = document.querySelectorAll('.thumbnails img');

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            const slideIndex = this.getAttribute('data-slide');
            slides.forEach(function(slide, index) {
                if (index == slideIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        });
    });
});