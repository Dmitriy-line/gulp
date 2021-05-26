const  modalOverlay = document.querySelector('.thank-you__modal');
const  modalClose = document.querySelector('.thank-you__close');


function openThanhkYou () {
    document.body.style.overflow = "hidden";
	modalOverlay.classList.add('is-open');
}

function ModalClose (){
    document.body.style.overflow = "";
	modalOverlay.classList.remove('is-open');
}

modalClose.addEventListener('click', ModalClose)


/** Чистый JS */
var form = document.querySelectorAll('form');

form.forEach(function (f) {
    f.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var formData = {
    name: document.querySelector('input[name="name"]').value,
    email: document.querySelector('input[name="email"]').value,
    phone: document.querySelector('input[name="phone"]').value
  };

  var request = new XMLHttpRequest();

  request.addEventListener('load', openThanhkYou);

  request.open('POST', '../send.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&email=' + encodeURIComponent(formData.email) + '&phone=' + encodeURIComponent(formData.phone) );
});

})




