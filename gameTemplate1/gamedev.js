$( document ).ready(function() {
	$("#main").click(function() {
			
			function leftArrowPressed() {
            var element = document.getElementById("Person.gif");
            element.style.left = parseInt(element.style.left) - 5 + 'px';
            }

            function rightArrowPressed() {
            var element = document.getElementById("Person.gif");
            element.style.left = parseInt(element.style.left) + 5 + 'px';

            }

            function upArrowPressed() {
            var element = document.getElementById("Person.gif");
            element.style.top = parseInt(element.style.top) - 5 + 'px';
            }

            function downArrowPressed() {
            var element = document.getElementById("Person.gif");
            element.style.top = parseInt(element.style.top) + 5 + 'px';
            }
	}}
//Your jquery goes here

});