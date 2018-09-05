window.onload = function () {
	typingDescription();
}

var titleContainer = document.getElementById('about-me-title');
var contentContainer = document.getElementById('about-me-content');
var i = 0;
var x = 0;
var titleDesc = '<Hello World!/>';
var contentDesc = 'My name is Annaëlle Sagot, I\'m a 21 years old Web Developer currently living in Rouen, France. After getting my Engineering Degree at the French School CESI, I decided to specialize myself in Web Development in the Videogames Industry.';
var speedTitle = 100;
var speedDesc = 40;

function typingDescription() {
	if(i < titleDesc.length) {
		titleContainer.innerHTML += titleDesc.charAt(i);
		i++;
		setTimeout(typingDescription, speedTitle);
	}

	if(i == titleDesc.length) {
		if(x < contentDesc.length) {
			contentContainer.innerHTML += contentDesc.charAt(x);
			x++;
			setTimeout(typingDescription, speedDesc);
		}
	}
}