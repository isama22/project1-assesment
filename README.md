# project1-assesment
realized after writing js for a majority of the allotted time that i got too focused on making the new input value appear that i wasn't thinking about making it actually do any addition, so when you write a new input and press the plus button it only appends itself. but it works great as an input value appender! spent the rest of my time wrestling with css but had to scrap it since it just wasn't working and had to make time for myself to trouble shoot some gh-pages problems since i didnt have time to start over.

here's a paste below from my notes app just to illustrate the train of thought i was following:
==============================================================

use javascript to DOM display the current number inside the input field, append to a div with an ID, just like how I displayed the score in my card game? 

Make div display input field.input value 

————————————————————————————
I could set it up like 
--Appending “P” element to html from an input 
	Make input field append p element 
		add a value=“” to input tag to that when the page loads you see a 1

(Didn’t need to do!)
--If P has first child, remove child, then append new child 
	So that every time the button is clicked it replaces the previous appended P 

--Make input field clear every time input is clicked 

-Have a p tag with “0” in it at page load. 
	-have input value append to P, 
		-if there is a child element, clear it, then append new P element
			(didn’t work)
			-nest a P inside of a P? parent P will have ID but not child
			(worked!)
		if p2Tag has a child element, clear it before adding new P element to pTag

-have minus button subtract whatever is in the input field from whatever’s displayed in PTag on html(the counter)
	-cache minus button tag/ add event listener to connect to function
		-write a function that will subtract the value of the input field from Ptag display 
	

//psedo:
Function subtractInputValue() {
	Let minusButtonWork = “input-field.value - value of Ptag value”
	“append minusButton work to PTag”
}

Try to just get the subtract button to subtract from what is in the p2 tag 

