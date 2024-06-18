function filterFunction() {
    var input, filter, div, i, txtValue;
    input = document.querySelector('.mb-3 input');
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    options = div.getElementsByTagName('div');

    for (i = 0; i < options.length; i++) {
        txtValue = options[i].textContent || options[i].innerText;
        console.log(txtValue);
        console.log(options[i].textContent);
        console.log(options[i].innerText);
        console.log('----------------------');
      
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            options[i].style.display = "";
        } else {
            options[i].style.display = "none";
        }
    }
    
}


document.querySelector('.dropdown input').addEventListener('focus', function () {
    document.getElementById("myDropdown").classList.add('show');
});

document.querySelector('.dropdown input').addEventListener('blur', function () {
    setTimeout(function () {
        document.getElementById("myDropdown").classList.remove('show');
    }, 200); // Delay to allow click to register
});

document.querySelectorAll('#myDropdown div').forEach(function (item) {
    item.addEventListener('click', function () {
        document.querySelector('.dropdown input').value = this.textContent;
        document.getElementById("myDropdown").classList.remove('show');
    });
});
let distric = document.getElementById("distric");
distric.disable = "true";