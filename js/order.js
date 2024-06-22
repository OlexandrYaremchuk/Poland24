const form = document.querySelector('.order-form-name');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  console.dir(e);
  const formElements = e.target.elements;
  //   console.log(formElements);
  const count = formElements.amount.value;
  const price = formElements.price.value;
  console.log(count, price);
  const select = document.getElementById('delivery');
  console.dir(select);
  const selectedOption = select.options[select.selectedIndex];
  const deliveryPrice = selectedOption.getAttribute('data-price');
  console.log(deliveryPrice);
}
