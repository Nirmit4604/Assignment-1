// Define word categories and their options
const words = {
    character: ['Nirmit', 'Yashesh', 'Valmiki', 'Shivali','LewisHamilton'],
    action: ['ran', 'jumped', 'slept', 'laughed','travelled'],
    location: ['in the park', 'at the beach', 'in the city', 'in the forest','at home'],
    time: ['at dawn', 'in the afternoon', 'at sunset', 'at midnight','at dusk'],
    ending: ['and lived happily ever after.', 'and it was very peaceful', 'and it was a great day.','and the journey ends.','and the journey continues.']
  };
  
  // Initialize selected words
  let selectedWords = {
    character: '',
    action: '',
    location: '',
    time: '',
    ending: ''
  };
  
  // Function to update the output display
  function updateOutput() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = Object.values(selectedWords).filter(word => word !== '').join(' ');
  }
  
  // Function to handle word selection
  function selectWord(category) {
    const options = words[category];
    const selectedIndex = options.indexOf(selectedWords[category]);
    const newIndex = (selectedIndex + 1) % options.length;
    selectedWords[category] = options[newIndex];
    updateOutput();
  }
  
  // Event listeners for word buttons
  document.querySelectorAll('.word-btn').forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      selectWord(category);
    });
  });
  
  // Event listener for generating random story
  document.getElementById('random-btn').addEventListener('click', function() {
    Object.keys(selectedWords).forEach(category => {
      const options = words[category];
      const randomIndex = Math.floor(Math.random() * options.length);
      selectedWords[category] = options[randomIndex];
    });
    updateOutput();
  });
  
  // Event listener for reset button
  document.getElementById('reset-btn').addEventListener('click', function() {
    Object.keys(selectedWords).forEach(category => {
      selectedWords[category] = '';
    });
    updateOutput();
  });
  
  // Event listener for viewing story
  document.getElementById('view-story-btn').addEventListener('click', function() {
    const story = Object.values(selectedWords).filter(word => word !== '').join(' ');
    alert(story);
  });
  