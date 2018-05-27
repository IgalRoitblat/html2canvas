$(document).ready(() => {
	var x = null;
	showAll();

	$("#droppable").droppable({
		drop: function (e, ui) {
		if ($(ui.draggable)[0].id != "") {
			x = ui.helper.clone();
			ui.helper.remove();
			x.draggable({
				containment: '#droppable',
				tolerance: 'fit',
				stack: '.drag'
			});
	
			x.resizable({
				animate: true,
				helper: "ui-resizable-helper",
				handles: "n, e, s, w, nw, ne, sw,se"
			});

			x.appendTo('#droppable');
		}}
	});

});

$("#preview").click(() => {
	$("#previewContainer").remove();
	$("#download").remove();
	html2canvas(document.querySelector("#droppable"), {allowTaint: true}).then(canvas => {
		$("body").append(
			$("<div>", {id: "previewContainer", width: "100%"}).append(
				$("<h2>", {text: "Preview", width: "100%"}),
			)
		)
		document.querySelector("#previewContainer").appendChild(canvas);
	});
	$("body").append(
		$("<a>", {id: "download", href: "", text: "Click here to download"}).click((e) => {
			downloadCanvas(e.target, document.querySelector("canvas"), 'canvas.png');
		})
	)
});

$("#reset").click(() => {
	$("#previewContainer").remove();
	$("#download").remove();
})


$(document).click((e) =>  {
	if( $(e.target).closest(".drag").length > 0 ) {
		$(e.target).closest(".drag").find(".ui-resizable-handle").show();
	}
	else {
		$("#droppable").find(".ui-resizable-handle").hide();
	}
});


function showAll() {
    fetch('http://www.mocky.io/v2/5b00281e3100007d0076def9')
    .then(response => response.json())
    .then(data => initProducts(data.products)).then(() => {
    	  $(".drag").draggable({
				helper: 'clone',
				cursor: 'move',
				tolerance: 'fit',
				stack: '.drag',
				revert: "invalid"
			});
	});
}

function initProducts(products) {
	var Allproducts = new ProductList();
	Allproducts.populate(products);
}

function downloadCanvas(link, canvasId, filename) {
	link.href = canvasId.toDataURL();
	link.download = filename;
}