window.onload = function() {
    const submit = document.querySelector(".submit-btn");
    const rating_container = document.querySelector(".rating-container");
    const tku_container = document.querySelector(".tku-container");
    const ratings = document.querySelectorAll(".rating-btn");
    const rating = document.getElementById('option');
    
    submit.addEventListener('click', function(){
      rating_container.style.display = 'none';
      tku_container.style.display = 'flex';
    })

    ratings.forEach(rate => {
      rate.addEventListener('click', function(){
        rating.innerHTML = rate.innerHTML;
      })
    });
  }