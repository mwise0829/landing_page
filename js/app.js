const bar = document.querySelector('#navbar__list');
const menuItem = document.querySelectorAll('section');

// build the nav
function createNavbar() {
  const fragment = document.createDocumentFragment();

  menuItem.forEach((navItem) => {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.innerText = navItem.getAttribute('data-nav');
    a.setAttribute('class', 'menu__link');

    // Scroll to section on link click
    a.addEventListener("click", () => {
      navItem.scrollIntoView({ behavior: "auto" });
      navItem.style.backgroundColor = '#00000026';
      li.style.backgroundColor = '#00000026';
    });
    li.appendChild(a);
    fragment.appendChild(li);
  });

  bar.appendChild(fragment);
};


/**
 * End body Functions
 * Begin Events
 * 
*/

// Build menu 
createNavbar();

//active class

window.onscroll = function(){
    if (window.pageYOffset > 50) {;
          document.getElementById('section1').style.background = "gray";
    } 
    else {
        document.getElementById('section1').style.background = "transparent";
     }
    
     if (window.pageYOffset > 500) {;
        document.getElementById('section2').style.background = "darkgray";
     } 
    else {
      document.getElementById('section2').style.background = "transparent";
     }

     if (window.pageYOffset > 1000) {;
        document.getElementById('section3').style.background = "gray";
     } 
    else {
      document.getElementById('section3').style.background = "transparent";
     }

     if (window.pageYOffset > 1700) {;
        document.getElementById('section4').style.background = "darkgray";
     } 
    else {
      document.getElementById('section4').style.background = "transparent";
     }
       
    };

