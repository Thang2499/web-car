
function submitForm() {
    const carprice = parseFloat(document.getElementById('carprice').textContent.replace(/\./g, ''));
    const selected = document.getElementById('selected').value;
    const productname = document.getElementById('productname').textContent;
    const productQuantity = parseFloat(document.getElementById('numbers').value);
    // localStorage.setItem('carprice', carprice);
    // localStorage.setItem('selected', selected);
    // localStorage.setItem('productname', productname);
    // const productQuantity = parseInt(document.getElementById('numbers').value);
    const activeSlide = document.querySelector('.slide.active img');
    const currentSlideSrc = activeSlide.src;
    localStorage.setItem('currentSlideSrc', currentSlideSrc);
    const product = {
        name: productname,
        price: carprice,
        color: selected,
        quantity: productQuantity,
        image: currentSlideSrc
    };
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    window.location.href = 'pay-page.html';
};

function calculateTotalPrice(products) {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
};

  
function formatPrice(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

window.onload = function () {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const imgpay = document.getElementById('paycontainer');
    // const carprice = parseFloat(localStorage.getItem('carprice'));
    // const selected = localStorage.getItem('selected');
    // const productname = localStorage.getItem('productname');
    // const currentSlideSrc = localStorage.getItem('currentSlideSrc');
    // const quantity = localStorage.getItem('quantity');

    // if (currentSlideSrc) {
    //     document.getElementById('imgpay').src = currentSlideSrc;
    //     document.getElementById('carname').textContent = `${carprice}`;
    //     document.getElementById('color-price').innerHTML = ` ${selected}`;
    // } else {
    //     alert('No slide data found.');
    // }
    products.forEach(product => {
        const productDiv = document.createElement('div');
        const productimg = document.createElement('div');
        productimg.classList.add('color-price-div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.src = product.image;
        img.classList.add('product');

        const producth2 = document.createElement('span');
        producth2.textContent = product.name;
        producth2.classList.add('name-title');

        const name = document.createElement('p');
        name.textContent =  `Giá: ${formatPrice(product.price)}`;
        name.classList.add('product-price');

        const span = document.createElement('p');
        span.textContent = `Màu sắc: ${product.color}` ;
        span.classList.add('product-color');

        const soluong = document.createElement('p');
        soluong.textContent = `Số lượng: ${product.quantity}`;
        soluong.classList.add('quantity');

        productDiv.appendChild(img);
        productimg.appendChild(producth2);
        productDiv.appendChild(productimg);
        productimg.appendChild(name);
        productimg.appendChild(span);
        productimg.appendChild(soluong);
        imgpay.appendChild(productDiv);
    });

    const totalPrice = calculateTotalPrice(products);
    
    document.getElementById('total').innerText = ` ${formatPrice(totalPrice)}`;

    document.getElementById('btn-buy').addEventListener('click', function () {
        const email = document.getElementById('exampleInputEmail1').value.trim();
        const phone = document.getElementById('exampleInputPhone').value.trim();
        const address = document.getElementById('exampleInputAddress').value.trim();
        const productName = document.getElementById('exampleInputPassword1').value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{10}$/;
        const addressPattern = /.{5,}/;

        // if (!emailPattern.test(email)) {
        //     alert('vui lòng nhập email');
        //     return;
        // }
        // if (!productName) {
        //     alert('vui lòng nhập họ và tên');
        //     return;
        // }
        // if (!phonePattern.test(phone)) {
        //     alert('vui lòng nhập số điện thoại');
        //     return;
        // }
        // if (!addressPattern.test(address)) {
        //     alert('vui lòng nhập địa chỉ');
        //     return;
        // }
        if (products.length === 0) {
            alert('Bạn chưa có sản phẩm để thanh toán');
        } else {
            // Clear the products from localStorage
            localStorage.removeItem('products');

            // Clear the product list display
            imgpay.innerHTML = '';

            document.getElementById('orderMessage').style.display = 'block';
            document.getElementById('total-price').style.display = 'none';
            document.getElementById('total').style.display = 'none';
            document.getElementById('exampleInputEmail1').value = '';
            document.getElementById('exampleInputPassword1').value = '';
            document.getElementById('exampleInputPhone').value = '';
            document.getElementById('exampleInputAddress').value = '';
            document.getElementById('exampleDataList').value = '';
        }
    });
}




