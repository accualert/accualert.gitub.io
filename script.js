window.addEventListener('DOMContentLoaded', () => {
  const savedText = localStorage.getItem('dynamicText');
  const dynamicText = document.getElementById('dynamicText');

  if (savedText) {
    dynamicText.innerHTML = savedText;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const newText = urlParams.get('text');

  if (newText) {
    dynamicText.innerHTML += '<br>' + newText;
    localStorage.setItem('dynamicText', dynamicText.innerHTML);
  }
});
