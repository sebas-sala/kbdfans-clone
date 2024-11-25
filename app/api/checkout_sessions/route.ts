import Stripe from "stripe";
import { NextResponse } from "next/server";

import type { ICartProduct } from "@/types/db";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || "sk_test_IKYCHOAmUhC7IPTdaoVtO58D"
);

interface IPostBody {
  cancel_url: string;
  success_url: string;
  cartItems: ICartProduct[];
}

export async function POST(request: Request) {
  try {
    const res = (await request.json()) as IPostBody;

    const { cartItems, success_url, cancel_url } = res;

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json(
        { message: "No items in cart" },
        { status: 400 }
      );
    }

    const lineItems = cartItems.map((item) => ({
      price: item.stripe_price_id,
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${success_url}/?success=true`,
      cancel_url: `${cancel_url}/?canceled=true`,
    });

    if (!session) {
      return NextResponse.json(
        { message: "Error creating session" },
        { status: 500 }
      );
    }

    if (!session.url) {
      return NextResponse.json(
        { message: "Error creating session" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
