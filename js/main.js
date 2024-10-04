let section=document.querySelectorAll('section');
let linknav= document.querySelectorAll('header .navmenu a');

window.onscroll=()=>{
  section.forEach(sec=>{
    let top= window.scrollY;
    let offset=sec.offsetTop-150;
    let height= sec.offsetHeight;
    let id= sec.getAttribute('id');

    if(top>=offset && top<offset +height){
      navmenuLinks.forEach(links=> {
        links.classList.remove('active');
        if(links.getAttribute('href')==='#'+id){
         links.classList.add('active');
        }
      });
    };
  });
};

const click2= document.getElementById("click2");

click2.addEventListener("click", function(){
  window.location.href= "formrent.html";
});

const bulet= document.getElementById("circle1");

bulet.addEventListener("circle1", function(){
  window.location.href= "Delivery.html";
});

const selectElement = document.getElementById('options');

  selectElement.addEventListener('change', (event) => {
        const selectedOption = event.target.value;

  });

function openDatePicker() {
    document.getElementById('datePicker').click();
}

function setDate(value) {
    document.getElementById('date').value = value;
}

const banktf = document.getElementById('bankrad');
const codrad = document.getElementById('codrad');
const scanrad = document.getElementById('scann');
const bankOptRad = document.getElementById('bank-opt');


function toggleBankOpti() {
  if (banktf.checked) {
    bankOptRad.style.display = 'block'; // Tampilkan dropdown jika "Bank Transfer" dipilih
  } else {
    bankOptRad.style.display = 'none';  // Sembunyikan dropdown jika pilihan lain dipilih
  }
}

banktf.addEventListener('change', toggleBankOpti);
codrad.addEventListener('change', toggleBankOpti);
scanrad.addEventListener('change', toggleBankOpti);
toggleBankOpti();



document.getElementById("viewing").addEventListener("click", function() {
  window.location.href = "Viewcollect.html"; 
});



const click3 = document.querySelectorAll("view");

click3.forEach(button => {
  button.addEventListener("click", function() {
    window.location.href = "ViewDress.html";
  });
});

document.querySelector(".click1").addEventListener("click", function() {
  const video = document.createElement("video");
  video.setAttribute("id", "video");
  video.setAttribute("autoplay", true);
  
  const container = document.getElementById("camera-container");
  container.appendChild(video);

  navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
          video.srcObject = stream;
      })
      .catch(function(err) {
          alert("Error: " + err.message);
      });
});

function submitPost() {

  alert("Your order has been booked!");
}