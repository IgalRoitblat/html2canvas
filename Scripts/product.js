class Product {

	constructor(product) {
		this.product = product;
	}

	buildProduct() {
		var img = new Image();
		img.crossOrigin = "anonymous";
		img.src = this.product.link_to_image;
		$("body").append(
			$("<div>").addClass("productContainer").append(
				$("<div>", {
					"crossOrigin": "anonymous",
					id: this.product.name
				}).css('background-image', 'url(' + img.src + ')').addClass("drag"),
				$("<div>").addClass("productInfo").append(
					$("<span>", {text: "Product Name: " + this.product.name}),
					$("<span>", {text: "Product Code: " + this.product.code})
				)
			)
		)
	}

}


