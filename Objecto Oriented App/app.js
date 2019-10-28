class Product {
    constructor(name, price, date) {
        this.name = name;
        this.price = price;
        this.date = date;
    }
}

//Class that interacts with the HTML file
class Ui {
    addProduct(product) {
        let listedProducts = document.getElementById('product-list');

        let element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong> ${product.name}
                    <strong>Product Price</strong> ${product.price}
                    <strong>Product Year</strong> ${product.year}
                    <a href="#" class="btn btn-danger" name="productDelete">Delete</a>
                </div>
            </div>
        `
        listedProducts.appendChild(element);
    }
    resetForm() {
        document.getElementById('product-form').reset();
    }
    deleteProduct(element) {
        if (element.name === 'productDelete') {
            element.parentElement.remove();
        }
    }
    editProduct(element) {

    }
    checkValues() {

    }
    showMsg() {

    }
}

//DOM events

document.getElementById('product-form')
    .addEventListener('submit', function(e) {
        let name = document.getElementById('productName').value;
        let price = document.getElementById('productPrice').value;
        let date = document.getElementById('productDate').value;

        let product = new Product(name, price, date);
        let ui = new Ui();
        ui.addProduct(product);
        ui.resetForm();
        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function(e) {
        let ui = new Ui();
        ui.deleteProduct(e.target)
    });