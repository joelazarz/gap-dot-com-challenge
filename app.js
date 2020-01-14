/**  PART ONE
This code can be pasted into the console on any item page
once the 'add to cart button' is clicked the order subtotal will be stored to localStorage
where it can be accessed in the second part of this solution
*/

let addToBagBtn = document.querySelector("#addToBag");

addToBagBtn.addEventListener('click', () => {
  console.log('add to cart button has been clicked');

  function subtotalCheck() {
    let subtotalPop = document.querySelector("#modalWindow > div.modal-footer.pd_0-75.pd_right_0-75.pd_left_0-75 > div.g-1-1.sp_sm > div.right.g-1-2.border-box.tx_right.sds-cb_font--secondary.sds-cb_heading-e.sds_color--gray80");
    
    if(subtotalPop != null) {
      let subtotalFloat = parseFloat(subtotalPop.innerText.replace('Subtotal $', ''));
      console.log('Subtotal div exists:', subtotalFloat);
      localStorage.setItem('orderSubtotal', subtotalFloat);
      return;
    } else {
      console.log('Subtotal div does not exist yet, running setTimeout');
      setTimeout(function() {
        subtotalCheck();
      }, 1000);
    }
  }; 

  subtotalCheck();

});


/**  PART TWO
The code below can be pasted into the console on gap.com or any subdomain in order to retrieve the order subtotal
*/

function retrieveSubtotal() {
  let orderSubtotalVar = localStorage.getItem('orderSubtotal');
  console.log(orderSubtotalVar);
};

retrieveSubtotal();



