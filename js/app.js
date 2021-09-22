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
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createNavbar();
