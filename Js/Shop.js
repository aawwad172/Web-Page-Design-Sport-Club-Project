  let bagCount = 0;

  // This function is called when the add to bag button is clicked
  function addToBag() {
    // Increment the bag count
    bagCount++;
    // Show an alert to continue shopping or go to checkout
    if (
      confirm(
        "Item added to bag. Do you want to continue shopping or go to checkout?"
      )
    ) {
      // If the user clicks "OK", do nothing
    } else {
      // If the user clicks "Cancel", go to the checkout page
      window.location.href = "checkout.php";
    }
  }

  // This function is called when the checkout button is clicked
  function checkout() {
    // If there are no items in the bag, show an error message
    if (bagCount === 0) {
      alert(
        "Your bag is empty. Please add some items to your bag before checking out."
      );
    } else {
      // If there are items in the bag, go to the checkout page
      window.location.href = "checkout.php";
    }
  }
