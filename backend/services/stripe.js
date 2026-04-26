import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_KEY);

export async function createCheckout(email) {
  return await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    customer_email: email,
    line_items: [{
      price: "YOUR_PRICE_ID",
      quantity: 1
    }],
    success_url: "https://yourapp.com/success",
    cancel_url: "https://yourapp.com/cancel"
  });
}
