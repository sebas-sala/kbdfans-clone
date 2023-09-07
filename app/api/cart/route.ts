import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { findUserById } from "@/actions/user-actions";
import {
  addItemToCart,
  deleteItemFromCart,
  findCartItemByUserIdAndProductId,
  getCartItems,
  updateItemQuantity,
} from "@/actions/cart-actions";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { message: "User ID not provided" },
        { status: 400 }
      );
    }

    const user = await findUserById(userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const cartItems = await getCartItems(userId);

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ message: "Cart not found" }, { status: 404 });
    }

    return NextResponse.json(cartItems);
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    const { productId } = await request.json();

    if (!productId) {
      return NextResponse.json(
        { message: "Product ID not provided" },
        { status: 400 }
      );
    }

    const supabase = createServerComponentClient({ cookies });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { message: "No user provided" },
        { status: 400 }
      );
    }

    const userId = user.id;

    const existingCartItem = await findCartItemByUserIdAndProductId(
      userId,
      productId
    );

    if (existingCartItem) {
      await updateItemQuantity(existingCartItem, false);
    } else {
      console.log(userId, productId);
      await addItemToCart(userId, productId);
    }

    const updatedCartItems = await getCartItems(userId);
    return NextResponse.json(updatedCartItems);
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const productId = searchParams.get("productId");

    if (!userId) {
      return NextResponse.json(
        { message: "User ID not provided" },
        { status: 400 }
      );
    }

    if (!productId) {
      return NextResponse.json(
        { message: "Product ID not provided" },
        { status: 400 }
      );
    }

    const user = await findUserById(userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const findCart = await findCartItemByUserIdAndProductId(userId, +productId);
    console.log(findCart);
    if (!findCart) {
      return NextResponse.json(
        { message: "Cart item not found" },
        { status: 404 }
      );
    }

    await updateItemQuantity(findCart, true);

    const cartItems = await getCartItems(userId);
    console.log(cartItems);
    return NextResponse.json(cartItems);
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const productId = searchParams.get("productId");

    if (!userId) {
      return NextResponse.json(
        { message: "User ID not provided" },
        { status: 400 }
      );
    }

    if (!productId) {
      return NextResponse.json(
        { message: "Product ID not provided" },
        { status: 400 }
      );
    }

    const user = findUserById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const cartItem = await findCartItemByUserIdAndProductId(userId, +productId);

    if (!cartItem) {
      return NextResponse.json(
        { message: "Cart item not found" },
        { status: 404 }
      );
    }

    await deleteItemFromCart(cartItem.id);

    const cartItems = await getCartItems(userId);

    return NextResponse.json(cartItems);
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}
