import React from 'react';

import StripCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
 const priceForStripe = price * 100;
 const publickey = `pk_test_51GuIsyEchdbK6FNoBwPSuCjefCVukK7yHzq9ZaKhen67EdANGDutKd0a676HZ1zO0pItrrGAG16ixVE3cyJo5HIE00zCu5S09c`;
 const OnToken = token =>{
     console.log(token);
     alert('Payment Successful');
 }
 return(
     <StripCheckout
     
     label='Pay Now'
     name='Cloth Shopping Ltd.'
     billingAddress
     shippingAddress
     image='https://svgshare.com/i/CUz.svg'
     description={`Your total is Rs.${price}`}
     amount={priceForStripe}
     panelLabel='Pay Now'
     token={OnToken}
     stripeKey={publickey}

     />
 )
 
}

export default StripeCheckoutButton;