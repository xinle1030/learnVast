let nav = document.querySelector('nav');

// when there is a scroll event to this document
window.addEventListener('scroll', function() {
    // find the nav bar using the nav bar id
    let $nav = $("#mainNavbar");
    // once we scroll the page top more than the navbar height, we will detect the scroll and change the nav bar scc properties using toggleClass method on .scrolled class
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
});

let letters = document.querySelectorAll(".letter");
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener("mouseover", () => {
        letters[i].classList.toggle("flip-animation");
    });
}