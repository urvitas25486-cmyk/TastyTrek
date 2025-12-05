const filterVeg = document.createElement('button');
filterVeg.textContent = "Show Veg Only";
const filterNonVeg = document.createElement('button');
filterNonVeg.textContent = "Show Non-Veg Only";
const showAll = document.createElement('button');
showAll.textContent = "Show All";
[filterVeg, filterNonVeg, showAll].forEach(btn => {
  btn.style.margin = '0 10px';
  btn.style.padding = '8px 12px';
  btn.style.border = 'none';
  btn.style.borderRadius = '6px';
  btn.style.background = '#ff6b35';
  btn.style.color = '#fff';
  btn.style.cursor = 'pointer';
});
const container = document.querySelector('.container');
container.insertBefore(filterVeg, container.firstChild);
container.insertBefore(filterNonVeg, container.firstChild);
container.insertBefore(showAll, container.firstChild);
const cards = document.querySelectorAll('.card');
filterVeg.addEventListener('click', () => {
  cards.forEach(card => {
    if(card.querySelector('.veg')) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

filterNonVeg.addEventListener('click', () => {
  cards.forEach(card => {
    if(card.querySelector('.nonveg')) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

showAll.addEventListener('click', () => {
  cards.forEach(card => card.style.display = 'block');
});
