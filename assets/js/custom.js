// categories start

document.addEventListener('DOMContentLoaded', function () {
  const contentContainer = document.getElementById('content-container');
  const navLinks = document.querySelectorAll('.scroll-content li a');
  const contents = contentContainer.children;

  navLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
      const contentId = link.getAttribute('data-content');
      for (const content of contents) {
        content.classList.add('hidden');
      }
      document.getElementById(contentId).classList.remove('hidden');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const contentContainers = document.querySelectorAll('.content-container2');
  const navLinks = document.querySelectorAll('.cate_option p');

  navLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
      const contentId = link.getAttribute('data-content');
      contentContainers.forEach(container => {
        const contents = container.children;
        for (const content of contents) {
          content.classList.add('hidden');
        }
        container.querySelector(`#${contentId}`).classList.remove('hidden');
      });
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const contentContainer = document.getElementById('content-container_2');
  const navLinks = document.querySelectorAll('.scroll-content li a');
  const contents = contentContainer.children;

  navLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
      const contentId = link.getAttribute('data-content');
      for (const content of contents) {
        content.classList.add('hidden');
      }
      document.getElementById(contentId).classList.remove('hidden');
    });
  });
});

// categories end


// header_sticky start
const header = document.getElementById("header");
const toggleClass = "scrollChangeHeader";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});
// header_sticky end


//  hoverable dropdown start
$(".navigation li").hover(function () {
  var isHovered = $(this).is(":hover");
  if (isHovered) {
    $(this).children(".buyer").stop().slideDown(300);
  } else {
    $(this).children(".buyer").stop().slideUp(300);
  }
});
//  hoverable dropdown end

// sidebar hoverable Dropdown start
document.addEventListener('DOMContentLoaded', function () {
  const liElements = [
    { liId: 'li-1', megaMenuId: 'mega-menucat-1' },
    { liId: 'li-2', megaMenuId: 'mega-menucat-2' },
    { liId: 'li-3', megaMenuId: 'mega-menucat-3' },
    { liId: 'li-4', megaMenuId: 'mega-menucat-4' }
  ];

  liElements.forEach((element, index) => {
    const liItem = document.getElementById(element.liId);
    const megaMenu = document.getElementById(element.megaMenuId);

    if (liItem && megaMenu) {
      liItem.addEventListener('mouseover', function () {
        // console.log(`Mouse over on item ${index + 1}`, megaMenu);
        megaMenu.classList.add('show-mega-menu');
      });

      liItem.addEventListener('mouseout', function () {
        // console.log(`Mouse out on item ${index + 1}`, megaMenu);
        megaMenu.classList.remove('show-mega-menu');
      });
    } else {
      // console.log(`No mega menu found for item ${index + 1}`);
    }
  });
});

// sidebar hoverable Dropdown end

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//  accordion js start
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector("#accordion-icon");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector("#accordion-icon");

      c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
      ic.classList.toggle("ri-add-line", i !== index || !isOpen);
      ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
    });
  });
});
//  accordion js end

// zoom image start
const imgContainer = document.querySelector('.product_main_img');
const img = document.querySelector('#mainImage');

imgContainer.addEventListener('mousemove', function (e) {
  const rect = imgContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  img.style.transformOrigin = `${x}px ${y}px`;
});

imgContainer.addEventListener('mouseleave', function () {
  img.style.transformOrigin = 'center center';
});
// zoom image end

// Product change image start
function changeImage(imageSrc) {
  let mainImage = document.getElementById('mainImage');
  mainImage.src = 'assets/img/product_details/' + imageSrc;

  tabimg = document.querySelectorAll('.smallimg');
  for (i = 0; i < tabimg.length; i++) {
    tabimg[i].className = tabimg[i].className.replace(" activeimg", "");
  }
  event.currentTarget.className += " activeimg";
}
// Product change image end

// increase and decrease button start
function increaseValue(button, limit) {
  const numberInput = button.parentElement.querySelector('.number');
  var value = parseInt(numberInput.innerHTML, 10);
  if (isNaN(value)) value = 0;
  if (limit && value >= limit) return;
  numberInput.innerHTML = value + 1;
}

function decreaseValue(button) {
  const numberInput = button.parentElement.querySelector('.number');
  var value = parseInt(numberInput.innerHTML, 10);
  if (isNaN(value)) value = 0;
  if (value < 1) return; numberInput.innerHTML = value - 1;
}
// increase and decrease button end

// copy website link start
function Copy() {
  var Url = document.getElementById("url");
  Url.select();
  document.execCommand("copy");
}
window.onload = function () {
  var Url = document.getElementById("url");
  Url.value = window.location.href;
};
// copy website link end

// product comment pagination  start
let currentPage = 1;
const sectionsPerPage = 1; // Number of sections to show per page

function showSections(page) {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section, index) => {
    const sectionPage = Math.floor(index / sectionsPerPage) + 1;
    section.classList.toggle('active', sectionPage === page);
  });

  updatePageInfo();
}

function changePage(direction) {
  const totalPages = Math.ceil(document.querySelectorAll('.section').length / sectionsPerPage);
  currentPage = Math.max(1, Math.min(totalPages, currentPage + direction));
  showSections(currentPage);
}

function updatePageInfo() {
  const totalPages = Math.ceil(document.querySelectorAll('.section').length / sectionsPerPage);
  document.getElementById('page-info').textContent = `Page ${currentPage} of ${totalPages}`;
}

// Show the first page by default
showSections(currentPage);

// product comment pagination end

// Description_box show and / hide start

$('.showBtn').click(function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.hideme').slideUp();
  } else {
    $('.hideme').slideUp();
    $('.showBtn').removeClass('active');
    $(this).addClass('active');
    $(this).next().filter('.hideme').slideDown();
  }
});

// Description_box show and / hide end

// Shop by department start

$(document).ready(function () {
  $('.cat-toggle').hover(
    function () {
      $(this).find('.cat__menu').stop().slideDown(300);
    },
    function () {
      $(this).find('.cat__menu').stop().slideUp(300);
    }
  );
});

// Shop by department end

// left right slider pagination
$(document).ready(function () {
  var currentSlide = 0;
  var totalSlides = $('.slide').length;

  function updatePagination() {
    $('.page-info').text('Page ' + (currentSlide + 1) + ' of ' + totalSlides);
    $('.prev').prop('disabled', currentSlide === 0);
    $('.next').prop('disabled', currentSlide === totalSlides - 1);
  }

  function showSlide(index) {
    var newTransformValue = 'translateX(' + (-index * 100) + '%)';
    $('.slides').css('transform', newTransformValue);
    updatePagination();
  }

  $('.prev').click(function () {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  });

  $('.next').click(function () {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  });

  showSlide(currentSlide); // Initialize the slider
});
