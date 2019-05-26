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
function HeaderBuilder(obj = false) {
	if(obj) {
		var output = "";
		for(var key in obj) {
			output += "<a href='"+ obj[key]+ "'"+ "><button class='btn btn-white text-dark'>"+ key+ "</button></a>";
		}
		return header.innerHTML = output;
	}
	return false;
}

/* Page Builders */
function HomeBuilder(obj = false) {
	// Windows width & height
	var $window_width = $(window).width();
	var $window_height = $(window).height();

	// Header's height
	var $header_height = $("#nav").outerHeight();

	// #coverimg height
	$img_height = $window_height - $header_height;
	$("#coverimg").css({ "height": $img_height });
}
function TestBuilder(obj = false) {
	// Windows width & height
	var $window_width = $(window).width();
	var $window_height = $(window).height();

	// Header's height
	var $header_height = $("#nav").outerHeight();

	// .box
	var $box = $('.box');
	var $boxWidth = $box.width();
	var $boxHeight = $box.height();

	var xProportion = (($window_width - ($boxWidth * $box.length)) / $box.length);
	var yProportion = (($boxWidth / $boxHeight) * xProportion);

	console.log(xProportion);
	var $newBoxWidth = xProportion + $boxWidth;
	var $newBoxHeight = yProportion + $boxHeight;

	$box.css({ "width" : $newBoxWidth, /*"height" : $newBoxHeight*/ });
	$('.box div').html((Math.round($newBoxWidth * 100) / 100)+ " X "+ (Math.round($newBoxHeight * 100) / 100));
	console.log("");
	console.log(obj.width+ " X "+ obj.height);
	console.log($newBoxWidth+ " X "+ $newBoxHeight);
}
function GaleryBuilder(obj = false) {
	var output = document.createElement("div");
	output.className = "container-fluid";
	for(var i = obj.img; i > 0; i -= obj.rowLength) {
		var d = document.createElement("div");
		d.className = "row d-flex justify-content-around";
		for(var j = 0;  j < obj.rowLength; j++) {
			var a = document.createElement("a");
			var img = document.createElement("img");
			a.href = "resources/assets/images/"+ obj.imgName+ (i-j)+ obj.imgExtension;
			img.src = "resources/assets/images/"+ obj.imgName+ (i-j)+ obj.imgExtension;
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
function MultimediaBuilder(obj = false) {
	var i = 0;
	var output = "";
	for(key in obj.data) {
		if(i == 0 || (i/obj.rowLength) >= 1) { output += "<tr>"; }
		output += "<td><a href='"+ key+ "' target='_blank' rel='noopener noreferrer'><i class='"+ obj.data[key]+ "'</i></a></td>";
		i++;
		if(i == obj.rowLength) { output += "</tr>"; i = 0; }
	}
	$("#page tbody").html(output);
}
