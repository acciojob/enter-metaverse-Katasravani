//your JS code here. If required.
// function clickme() {

// 	let a=document.getElementById("status");
// 	a.type="h1";
	
// }

function click() {


	const statusElement = document.getElementById('status');
    const enterBtn = document.getElementById('enterBtn');
	
        // Create a new h1 element
        const h1Element = document.createElement('h1');
        
        // Set its content
        h1Element.textContent = 'Entered Metaverse';
        
        // Replace the p tag with the new h1 element
        statusElement.parentNode.replaceChild(h1Element, statusElement);
	

