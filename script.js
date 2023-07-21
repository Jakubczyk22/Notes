const addBtn = document.getElementById('addNotes');
const notes = document.getElementById('notes');
const readyNotes = document.getElementById('readyNotes')

addBtn.addEventListener('click',()=>{
    const notesText = notes.value.trim();
    if(notesText !=''){
        const newElement = document.createElement('article');
        newElement.className =  'newNote';
        newElement.innerHTML = `<p>${notesText}</p><button class="deleteBTN">Delete</button>`;

        readyNotes.appendChild(newElement);
        notes.value = '';
    }
    
})