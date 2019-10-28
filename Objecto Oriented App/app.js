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
            return true
        }
        return false
    }
    editProduct(element) {

    }
    checkValues() {

    }
    showMsg(message, cssClass) {
        let div = document.createElement('div');
        div.className = `alert alert-dismissible alert-${cssClass} mt-3`;
        div.appendChild(document.createTextNode(message));
        // Showing in the DOM
        let container = document.querySelector('.container'); //Obtengo todo el container
        let app = document.querySelector('#application');
        container.insertBefore(div, app); //Insert the new alert div before the application div
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 1500);
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
        ui.showMsg('Product Added Successfully', 'success');
        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function(e) {
        let ui = new Ui();
        if (ui.deleteProduct(e.target)) {
            ui.showMsg('Product deleted Successfully', 'success');
        }
    });