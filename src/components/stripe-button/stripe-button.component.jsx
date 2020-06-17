import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GuslRIBNethBXyvGHJxL6cxvcl2Zbpg8k2TvPdumlaYterjS5YdmvSypMZMsihIno9KmSqKxOV4dMl8qtVa4w5C00QK8Dyuom";

  const onToken = (token) => {
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Mesh Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/M8B.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripCheckoutButton;
