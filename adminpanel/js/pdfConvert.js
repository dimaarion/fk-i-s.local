$(document).ready(() => {
	function addImagePdf(pdf_url, c) {
		var __PDF_DOC,
			__CURRENT_PAGE,
			__TOTAL_PAGES,
			__PAGE_RENDERING_IN_PROGRESS = 0,
			__CANVAS = c.get(0),
			__CANVAS_CTX = __CANVAS.getContext('2d');

		function showPDF(pdf_url) {


			PDFJS.getDocument({ url: pdf_url }).then(function (pdf_doc) {
				__PDF_DOC = pdf_doc;
				__TOTAL_PAGES = __PDF_DOC.numPages;

				// Hide the pdf loader and show pdf container in HTML

				// Show the first page
				showPage(1);

			}).catch(function (error) {
				// If error re-show the upload button


				alert(error.message);
			});

		}

		function showPage(page_no) {
			__PAGE_RENDERING_IN_PROGRESS = 1;
			__CURRENT_PAGE = page_no;

			// Disable Prev & Next buttons while page is being loaded


			// While page is being rendered hide the canvas and show a loading message


			// Update current page in HTML

			// Fetch the page
			__PDF_DOC.getPage(page_no).then(function (page) {
				// As the canvas is of a fixed width we need to set the scale of the viewport accordingly
				var scale_required = __CANVAS.width / page.getViewport(1).width;
				// Get viewport of the page at required scale
				var viewport = page.getViewport(scale_required);
				// Set canvas height
				__CANVAS.height = viewport.height;
				var renderContext = {
					canvasContext: __CANVAS_CTX,
					viewport: viewport
				};


				// Render the page contents in the canvas
				page.render(renderContext).then(function () {
					__PAGE_RENDERING_IN_PROGRESS = 0;
					// Re-enable Prev & Next buttons
					// Show the canvas and hide the page loader


				});
			});
		}
		showPDF(pdf_url);
		return __CANVAS;
	}


	function createCanvas(addImagePdf) {
		let boxImage = $(".boxImage");
		let img = $(".boxImage img");
		let settens = $(".settens");
		settens = Array.from(settens);
		imgArr = Array.from(img);
		imgArr = imgArr.map((x, i) => isPdf(x, i));
		function cssSitImage(d = false,t, i) {
			settens[i].addEventListener("click", (e) => {
				let setImg = $("#settinsPanel img");
				let imageInput = $("#imageInput");
				if (d === true) {
					let urlIm = addImagePdf(t, $('#canv' + i)).toDataURL() ;			
					setImg.attr("src", urlIm);
					setImg.css({
						width: "150px",
						height: "100px"
					});
					console.log(imageInput)
					imageInput.attr("value", urlIm);
				} else {
					setImg.css({
						width: "100%",
					});
				}
			});
		}
		function isPdf(x, i) {
			let t = img.eq(i).attr("alt");
			let tArr = t.split(".");
			let mime = tArr[tArr.length - 1];
			if (mime === "pdf") {

				boxImage.eq(i).append('<canvas id = "canv' + i + '"></canvas>');
				addImagePdf(t, $('#canv' + i)).toDataURL();
				img.eq(i).css({ display: "none" });
				cssSitImage(true,t, i);

			} else {
				cssSitImage(false,t, i);


			}

		}

	}
	// This is better than showing the not-good-looking file input element


	//createCanvas(addImagePdf)


})