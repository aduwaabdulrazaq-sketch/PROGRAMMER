const form = document.getElementById('aduwaForm');
const successBox = document.getElementById('successBox');
const okBtn = document.getElementById('okBtn');

form.addEventListener('submit', function(e){
  e.preventDefault(); // This stops the page reload and shows submitted
  successBox.classList.add('show');
  form.reset();
});

okBtn.addEventListener('click', function(){
  successBox.classList.remove('show');
});

// Close when clicking outside
successBox.addEventListener('click', function(e){
  if(e.target === successBox){
    successBox.classList.remove('show');
  }
});
