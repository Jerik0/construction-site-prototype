(() => {

  let sections = document.querySelectorAll('.section');

  console.log(sections.length);
  console.log('hi');

  for(let i = 0; i < sections.length; i++) {
    if(i % 2 !== 0) {
      sections[i].style.height = '10vh';
    }
    // sections[i].addEventListener()
  }

})();