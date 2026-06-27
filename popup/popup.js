const dropdownElements = document.getElementById('location-select')
const startDateElements = document.getElementById('start-date')
const endDateElements = document.getElementById('end-date')
const saveButton = document.getElementById('btn-save')
const stopButton = document.getElementById('btn-stop')

saveButton.onclick = function(){
    console.log("hii"); 
    console.log(startDateElements.value);
    chrome.runtime.sendMessage({event:"onStart"})
    
}

stopButton.onclick = function(){
    chrome.runtime.sendMessage({event:"onStart"})
    console.log("bye");
    
}