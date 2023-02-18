const notepad = document.getElementById("notepad")
const savebutton = document.getElementById("savebutton")
const message = document.getElementById("message")

// Load saved content from local storage
const savedContent = localStorage.getItem("notepadContent")
if (savedContent) {
	notepad.value = savedContent
}

// Save content to local storage
savebutton.addEventListener("click",()=>{
	saving()
})

// insert tab character
notepad.addEventListener("keydown", (event) => {
	if(event.key=="Tab"){
		event.preventDefault()
		console.log("okos")
		let start = notepad.selectionStart
		let end = notepad.selectionEnd
		
		// set notepad value to: text before caret + tab + text after caret
		notepad.value = notepad.value.substring(0, start) +
		"\t" + notepad.value.substring(end)
		
		// put caret at right position again
		notepad.selectionStart = notepad.selectionEnd = start + 1
	}
	//save content when ctrl + s
	if(event.ctrlKey && event.key=="s"){
		event.preventDefault()
		saving()
	}
})

function saving(){
	localStorage.setItem("notepadContent", notepad.value)
	message.innerText="text saved"
	message.classList.add("active")

	setTimeout(()=>{message.classList.remove("active")},1000)
}