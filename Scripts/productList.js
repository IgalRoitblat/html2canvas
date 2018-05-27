class ProductList {

	constructor() {
		this.products = [];
	}

	displayAll() {
		this.products.forEach(product => {
			var product = new Product(product);
			product.buildProduct();
		})
	}

	populate(products) {
		$("main").empty();
		this.products = [];
		if (products.length > 0) {
			products.forEach((product) => {
				this.products.push(product)
			})
		} else {
			this.emptyResults();
		}
		this.displayAll();
	}

}
