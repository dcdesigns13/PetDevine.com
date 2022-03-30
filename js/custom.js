/* Comprehensive Services for Desktop*/

$("#pet1").click(function () {
	document.getElementById("service_display1").style.display = 'block';
	document.getElementById("service_display2").style.display = 'none';
	document.getElementById("service_display3").style.display = 'none';
	document.getElementById("service_display4").style.display = 'none';
	document.getElementById("service_display5").style.display = 'none';

	$("#pet2").removeClass("active");
	$("#pet3").removeClass("active");
	$("#pet4").removeClass("active");
	$("#pet5").removeClass("active");
	$("#pet1").addClass("active");
});
$("#pet2").click(function () {
	document.getElementById("service_display1").style.display = 'none';
	document.getElementById("service_display2").style.display = 'block';
	document.getElementById("service_display3").style.display = 'none';
	document.getElementById("service_display4").style.display = 'none';
	document.getElementById("service_display5").style.display = 'none';

	$("#pet1").removeClass("active");
	$("#pet3").removeClass("active");
	$("#pet4").removeClass("active");
	$("#pet5").removeClass("active");
	$("#pet2").addClass("active");
});
$("#pet3").click(function () {
	document.getElementById("service_display1").style.display = 'none';
	document.getElementById("service_display2").style.display = 'none';
	document.getElementById("service_display3").style.display = 'block';
	document.getElementById("service_display4").style.display = 'none';
	document.getElementById("service_display5").style.display = 'none';

	$("#pet1").removeClass("active");
	$("#pet2").removeClass("active");
	$("#pet4").removeClass("active");
	$("#pet5").removeClass("active");
	$("#pet3").addClass("active");
});
$("#pet4").click(function () {
	document.getElementById("service_display1").style.display = 'none';
	document.getElementById("service_display2").style.display = 'none';
	document.getElementById("service_display3").style.display = 'none';
	document.getElementById("service_display4").style.display = 'block';
	document.getElementById("service_display5").style.display = 'none';

	$("#pet1").removeClass("active");
	$("#pet2").removeClass("active");
	$("#pet3").removeClass("active");
	$("#pet5").removeClass("active");
	$("#pet4").addClass("active");
});
$("#pet5").click(function () {
	document.getElementById("service_display1").style.display = 'none';
	document.getElementById("service_display2").style.display = 'none';
	document.getElementById("service_display3").style.display = 'none';
	document.getElementById("service_display4").style.display = 'none';
	document.getElementById("service_display5").style.display = 'block';

	$("#pet1").removeClass("active");
	$("#pet2").removeClass("active");
	$("#pet3").removeClass("active");
	$("#pet4").removeClass("active");
	$("#pet5").addClass("active");
});


/* Comprehensive Services for Mobile*/

$("#pet_mob1").click(function () {
	document.getElementById("service_display1").style.display = 'block';
	document.getElementById("service_display2").style.display = 'none';
	document.getElementById("service_display3").style.display = 'none';
	document.getElementById("service_display4").style.display = 'none';
	document.getElementById("service_display5").style.display = 'none';

	$("#pet_mob2").removeClass("active");
	$("#pet_mob3").removeClass("active");
	$("#pet_mob4").removeClass("active");
	$("#pet_mob5").removeClass("active");
	$("#pet_mob1").addClass("active");
});
$("#pet_mob2").click(function () {
	document.getElementById("service_display1").style.display = 'none';
	document.getElementById("service_display2").style.display = 'block';
	document.getElementById("service_display3").style.display = 'none';
	document.getElementById("service_display4").style.display = 'none';
	document.getElementById("service_display5").style.display = 'none';

	$("#pet_mob1").removeClass("active");
	$("#pet_mob3").removeClass("active");
	$("#pet_mob4").removeClass("active");
	$("#pet_mob5").removeClass("active");
	$("#pet_mob2").addClass("active");
});
$("#pet_mob3").click(function () {
	document.getElementById("service_display1").style.display = 'none';
	document.getElementById("service_display2").style.display = 'none';
	document.getElementById("service_display3").style.display = 'block';
	document.getElementById("service_display4").style.display = 'none';
	document.getElementById("service_display5").style.display = 'none';

	$("#pet_mob1").removeClass("active");
	$("#pet_mob2").removeClass("active");
	$("#pet_mob4").removeClass("active");
	$("#pet_mob5").removeClass("active");
	$("#pet_mob3").addClass("active");
});
$("#pet_mob4").click(function () {
	document.getElementById("service_display1").style.display = 'none';
	document.getElementById("service_display2").style.display = 'none';
	document.getElementById("service_display3").style.display = 'none';
	document.getElementById("service_display4").style.display = 'block';
	document.getElementById("service_display5").style.display = 'none';

	$("#pet_mob1").removeClass("active");
	$("#pet_mob2").removeClass("active");
	$("#pet_mob3").removeClass("active");
	$("#pet_mob5").removeClass("active");
	$("#pet_mob4").addClass("active");
});
$("#pet_mob5").click(function () {
	document.getElementById("service_display1").style.display = 'none';
	document.getElementById("service_display2").style.display = 'none';
	document.getElementById("service_display3").style.display = 'none';
	document.getElementById("service_display4").style.display = 'none';
	document.getElementById("service_display5").style.display = 'block';

	$("#pet_mob1").removeClass("active");
	$("#pet_mob2").removeClass("active");
	$("#pet_mob3").removeClass("active");
	$("#pet_mob4").removeClass("active");
	$("#pet_mob5").addClass("active");
});

/*menu smooth scroll*/

$(document).ready(function () {
	// Add smooth scrolling to all links
	$(".nav a").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 90
			}, 800, function () {


			});
		} // End if
	});
});

$(function () {
	$('ul.nav li').on('click', function () {
		$(this).parent().find('li.active').removeClass('active');
		$(this).addClass('active');
	});
});


/*Sticky header*/

window.onscroll = function () {
	myFunction()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

/*Date Picker*/

$('.form_date').datetimepicker({

	weekStart: 1,
	todayBtn: 1,
	autoclose: 1,
	todayHighlight: 1,
	startView: 2,
	minView: 2,
	forceParse: 0
});

/*lightbox image gallery   */

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);







