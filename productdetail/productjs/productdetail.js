document.addEventListener('DOMContentLoaded', function() {

    let defaultOpenButton = document.getElementById("defaultOpen");
    if (defaultOpenButton) {
        defaultOpenButton.click();
    }
    openPage('Home', defaultOpenButton, 'white')
    
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

function openPage(pageName,elmnt,color) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.borderTop = "none";   
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
    elmnt.style.borderTop = "4px solid #00a2d1";
  }

const numbers2 = document.getElementById("numbers");
const btn1 = document.getElementById("btn1");
const btn = document.getElementById("btn");
btn1.addEventListener('click', function(){
    let count = parseInt(numbers2.value);
        count -= 1;
        numbers2.value = count;
        updateButtonState(); 
})
btn.addEventListener('click', function(){
    let count = parseInt(numbers2.value);
        count += 1;
        numbers2.value = count;
        updateButtonState();
})
function updateButtonState() {
    if (parseInt(numbers2.value) <= 1) {
        btn1.disabled = true;
    } else {
        btn1.disabled = false;
    }
}
updateButtonState();

