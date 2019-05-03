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
function GaleryBuilder(data = false) { console.log(data); }
function DocumentsBuilder(data = false) { console.log(data); }
function MultimediaBuilder(data = false) { console.log(data); }
