// Get the elements with class="column"
var elements = document.getElementsByClassName("column");
var elems = document.getElementsByClassName('bus-img');


// Declare a loop variable
var i;

// List View
function listView() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.width = "100%";
//   }
document.querySelector(".cards").style.display="block";
for (var i=0;i<elems.length;i+=1){
    elems[i].style.display = 'none';
  }
}

// Grid View
function gridView() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.width = "50%";
//   }
document.querySelector(".cards").style.display="grid";
for (var i=0;i<elems.length;i+=1){
    elems[i].style.display = 'inline-block';
  }
}