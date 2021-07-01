// FRONT END FILE TO INTERACT WITH THE DOM
const userinput = document.getElementById("tareaInput").value;
const SubmitBtn = document.querySelector('#btn-agregar');
const list = document.querySelector('#cartable');
const PriceInputUser = document.getElementById("priceInput").value;


SubmitBtn.addEventListener('click', (event) => {
   const userinput = document.getElementById("tareaInput").value;
   console.log(userinput);

   const PriceInputUser = document.getElementById("priceInput").value
   console.log(PriceInputUser);

   loadAllCars();
})

const loadAllCars = () => {
   const userinput = document.getElementById("tareaInput").value;
   const PriceInputUser = document.getElementById("priceInput").value

   let userinp = { body: userinput, budget: PriceInputUser };
   // let priceinp = { body: PriceInputUser };

   console.log("inside loadAllCars:", userinp);
   console.log(typeof userinp);
   fetch('api/cars/all', {

      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      // body: userinput,
      body: JSON.stringify(userinp)

   })
      .then(response => response.json())
      .then(data => {
         console.log('Success:', data);

         console.log("this is data from backened", data);
         data.cars.forEach(function (car) {
            console.log(car);
            let carsTable =
               `<table >
            
            <tr>
            <td>${car.make}</td>
            <td>${car.model}</td>
            <td>${car.body_styles}</td>
            <td>${car.price}</td>
            <td><img src="${car.images}" width=300 height=200></td>
            </tr>
            </table>`
            list.insertAdjacentHTML('beforeend', carsTable);

         }//for loop closing

         );//data for each loop

      })
      .catch((error) => {
         console.error('Error: ', error)
      })
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("viewBtn1");
var btn2 = document.getElementById("viewBtn2");
var btn3 = document.getElementById("viewBtn3");
var btn4 = document.getElementById("viewBtn4");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function () {
   modal.style.display = "block";
}
btn2.onclick = function () {
   modal.style.display = "block";
}
btn3.onclick = function () {
   modal.style.display = "block";
}
btn4.onclick = function () {
   modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
   modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}









/////Contact Form Code ////

const scriptURL = 'https://script.google.com/macros/s/AKfycbwhsU4xs7P5fd3NcJQLbR2bt3RtNG6v5zgPHADpbJGaGF357ytcItxUkwLRtuYU-SjI5A/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
      .catch(error => console.error('Error!', error.message))
})
