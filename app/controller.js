/* Page Data */
// Windows width & height
var $window_width = $(window).width();
var $window_height = $(window).height();

// Header's width & height
var $nav = $(".nav").outerWidth();
var $nav = $(".nav").outerHeight();

/* Page Elements */
var header = document.getElementById("header");

/* Header Builder */
function HeaderBuilder(data = false) {
	if(data) {
		var output = "";
		for(var key in data) {
			output += "<a href='"+ data[key]+ "'"+ "><button class='btn btn-primary'>"+ key+ "</button></a>";
		}
		return header.innerHTML = output;
	}
	return false;
}

/* Page Builders */
function HomeBuilder(data = false) { console.log(data); }
function NewsBuilder(data = false) { console.log(data); }
function GaleryBuilder(data = false) {
	var output = document.createElement("div");
	output.className = "container-fluid";
	for(var i = data.img; i > 0; i -= data.rowLength) {
		var d = document.createElement("div");
		d.className = "row d-flex justify-content-around";
		for(var j = 0;  j < data.rowLength; j++) {
			var a = document.createElement("a");
			var img = document.createElement("img");
			a.href = "resources/assets/images/"+ data.imgName+ (i-j)+ data.imgExtension;
			img.src = "resources/assets/images/"+ data.imgName+ (i-j)+ data.imgExtension;
			img.style = "padding-top: 25px;"
			a.setAttribute("target", "_blank");
			a.setAttribute("rel", "noopener noreferrer");
			a.appendChild(img);
			d.appendChild(a);
		}
		output.appendChild(d);
	}
	$("#page").html(output);
}
function DocumentsBuilder(data = false) { console.log(data); }
function MultimediaBuilder(data = false) { console.log(data); }
