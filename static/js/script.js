function create_slider(slider_id) {
  const items = document.querySelectorAll(slider_id + ' .slider_img');
  const itemCount = items.length;
  const nextItem = document.querySelector(slider_id + ' .next');
  const previousItem = document.querySelector(slider_id + ' .previous');
  let count = 0;

  function showNextItem() {
    items[count].classList.remove('active');

    if(count < itemCount - 1) {
      count++;
    } else {
      count = 0;
    }

    items[count].classList.add('active');
    console.log(count);
  }

  function showPreviousItem() {
    items[count].classList.remove('active');

    if(count > 0) {
      count--;
    } else {
      count = itemCount - 1;
    }

    items[count].classList.add('active');
    console.log(count);
  }

  function keyPress(e) {
    e = e || window.event;
    
    if (e.keyCode == '37') {
      showPreviousItem();
    } else if (e.keyCode == '39') {
      showNextItem();
    }
  }

  nextItem.addEventListener('click', showNextItem);
  previousItem.addEventListener('click', showPreviousItem);
  document.addEventListener('keydown', keyPress);}