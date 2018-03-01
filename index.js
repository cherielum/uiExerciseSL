//=============================
//NAV BAR 
//============================

//Colorful fun 

function red() {
    document.body.style.backgroundColor="#e5452e"; 
  }
  
  function blue() {
      document.body.style.backgroundColor="#4b8afe";
  }
  
  function green() {
      document.body.style.backgroundColor="#44a845";
  }
  
  function yellow() {
      document.body.style.backgroundColor= "#f9bd00";
  }
  function white() {
      document.body.style.backgroundColor= "white";
  }


  //Tabs
  function Emailtype(evt, Emailtype) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Emailtype).style.display = "block";
    evt.currentTarget.className += " active";
}
   
//=============
//SIDE NAV BAR 
//=============

// button 
//get modal element
var modal= document.getElementById('simpleModal'); 
//get open modal button 
var modalBtn = document.getElementById('modalBtn');
//get close button 
var closeBtn = document.getElementsByClassName('closeBtn')[0]; //need to specify first quote

//listen for an open click
modalBtn.addEventListener('click', openModal); 

//listen for a close click
closeBtn.addEventListener('click', closeModal); 

//listen for outside click
window.addEventListener('click', outsideClick);

//function to open modal 
function openModal() {
	modal.style.display= 'block';
}


//function to close modal 
function closeModal() {
	modal.style.display= 'none';
}

//function to close modal if outside click 
function outsideClick(e){
	if(e.target == modal) {
	modal.style.display = 'none'; 
	}
}


//=======================
//SEARCH BAR 
//=======================

//get Input element
let filterInput = document.getElementById('filterInput');
//add event listener
filterInput.addEventListener('keyup', filterNames);
  function filterNames() {
    //get value of Input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    //get names uL
    let ul = document.getElementById('names');

    //get li from ul
    let li = ul.querySelectorAll('li.collection-item');

    //loop through collection item li
    for (let i = 0; i<li.length;i++) {
      let a = li[i].getElementsByTagName('a')[0];

      //if matched
      if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
          li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }

  }

