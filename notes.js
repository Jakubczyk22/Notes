const saveButton = document.getElementById('saveButton');
const noteInput = document.getElementById('noteInput');
const savedNotesContainer = document.getElementById('savedNotes');

//3. Додаємо функціонал до кнопки 
saveButton.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
  
    if (noteText !== '') {
      const noteElement = document.createElement('div');
      noteElement.className = 'note';
      noteElement.innerHTML = `<p>${noteText}</p><button class="deleteButton">Видалити</button>`;
  
      savedNotesContainer.appendChild(noteElement);
  
      noteInput.value = ''; // Очищаємо поле введення примітки
    }
  });
  
  // Видалення примітки при кліку на кнопку "Видалити"
  savedNotesContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteButton')) {
      const noteElement = event.target.parentElement;
      savedNotesContainer.removeChild(noteElement);
    }
  });