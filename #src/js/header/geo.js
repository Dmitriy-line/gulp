// /* USER LOCATION*/
// let headerCity = document.querySelector('#user-city');
// let userCity = document.querySelector('.modal-city');
// let btnTrue = document.querySelector('#true');
// let btnFalse = document.querySelector('#false');
// let locModal = document.querySelector('.location-modal');

// function openModal() {
//     locModal.classList.add('active')
// }
// function closeModal() {
//     locModal.classList.remove('active')
// }



// const getRequest = new XMLHttpRequest();
// getRequest.open("GET", "http://ipwhois.app/json/?lang=ru");
// getRequest.responseType = 'json'


// getRequest.onload = () => {
//     localStorage.setItem("city", `\n${getRequest.response.city}\n`)
//     let myCity = localStorage.getItem("city")
//     userCity.innerHTML = myCity;
   
//     btnTrue.addEventListener('click', () => {
//         headerCity.innerHTML = myCity;
//         closeModal()
//     })

//     if (headerCity.innerHTML === ""){
//         openModal()
//     } else {
//         closeModal()
//         headerCity.innerHTML = myCity;
//     }

// }

// getRequest.send()