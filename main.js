var inputText = "";
var index = 0;
var count = 6;
var blink = null;

var curl = jQuery.get("terminal.txt", function(data){ //pull text into DOM
	inputText = curl.responseText;
});

var loopOn = setInterval("loop()", 30);

function loop () { // loop over all the characters in terminal.txt, $count at a time
	typeText();
	if (index > inputText.length) { // once through all the data in terminal.txt
		clearInterval(loopOn); // turn off the loop
		$("#term").append("<span id='blink'>|</span>"); // append a cursor character
		blink = setInterval(function(){$("#blink").fadeToggle(10);},750); // and turn on cursor blink
	}
}

function typeText() {
	if (inputText) {
		var c = $("#term").html();
		index += count; // keep tabs of location
		var s = inputText.substring(0,index); // move to display up to $index characters
		$("#term").html(s);
		window.scrollBy(0,50); // scroll if output exceeds window
	}
}
