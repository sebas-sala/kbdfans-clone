// import { NextResponse } from "next/server";

// import {
//   addItemToCart,
//   deleteItemFromCart,
//   findCartItemByUserIdAndProductId,
//   getCartItems,
//   updateItemQuantity,
// } from "@/actions/cart-actions";
// import { findUserById } from "@/actions/user-actions";

// export const dynamic = "force-dynamic";

// export async function GET(
//   request: Request,
//   { params }: { params: { userId: string } }
// ) {
//   try {
//     const { userId } = params;

//     if (!userId) {
//       return NextResponse.json(
//         { message: "User ID not provided" },
//         { status: 400 }
//       );
//     }

//     const user = await findUserById(userId);

//     if (!user) {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }

//     const cartItems = await getCartItems(userId);

//     if (!cartItems || cartItems.length === 0) {
//       return NextResponse.json({ message: "Cart not found" }, { status: 404 });
//     }

//     return NextResponse.json(cartItems);
//   } catch (e) {
//     console.error(e);
//     return NextResponse.error();
//   }
// }

// export async function POST(
//   request: Request,
//   { params }: { params: { userId: string } }
// ) {
//   try {
//     const { productId } = await request.json();

//     if (!productId) {
//       return NextResponse.json(
//         { message: "Product ID not provided" },
//         { status: 400 }
//       );
//     }

//     const { userId } = params;

//     if (!userId) {
//       return NextResponse.json(
//         { message: "No user provided" },
//         { status: 400 }
//       );
//     }

//     const existingCartItem = await findCartItemByUserIdAndProductId(
//       userId,
//       productId
//     );

//     if (existingCartItem) {
//       await updateItemQuantity(existingCartItem, false);
//     } else {
//       await addItemToCart(userId, productId);
//     }

//     const updatedCartItems = await getCartItems(userId);
//     return NextResponse.json(updatedCartItems);
//   } catch (e) {
//     console.error(e);
//     return NextResponse.error();
//   }
// }

// export async function PUT(
//   req: Request,
//   { params }: { params: { userId: string } }
// ) {
//   try {
//     const { userId } = params;

//     if (!userId) {
//       return NextResponse.json(
//         { message: "No user provided" },
//         { status: 400 }
//       );
//     }

//     const res = await await req.json();

//     const { productId } = res;

//     if (!productId) {
//       return NextResponse.json(
//         { message: "Product ID not provided" },
//         { status: 400 }
//       );
//     }

//     const findCart = await findCartItemByUserIdAndProductId(userId, +productId);

//     if (!findCart) {
//       return NextResponse.json(
//         { message: "Cart item not found" },
//         { status: 404 }
//       );
//     }

//     await updateItemQuantity(findCart, true);

//     const cartItems = await getCartItems(userId);

//     return NextResponse.json(cartItems);
//   } catch (e) {
//     console.error(e);
//     return NextResponse.error();
//   }
// }

// export async function DELETE(
//   request: Request,
//   { params }: { params: { userId: string } }
// ) {
//   try {
//     const { userId } = params;

//     if (!userId) {
//       return NextResponse.json(
//         { message: "No user provided" },
//         { status: 400 }
//       );
//     }

//     const { searchParams } = new URL(request.url);

//     const productId = searchParams.get("productId");

//     if (!productId) {
//       return NextResponse.json(
//         { message: "Product ID not provided" },
//         { status: 400 }
//       );
//     }

//     const cartItem = await findCartItemByUserIdAndProductId(userId, +productId);

//     if (!cartItem) {
//       return NextResponse.json(
//         { message: "Cart item not found" },
//         { status: 404 }
//       );
//     }

//     await deleteItemFromCart(cartItem.id);

//     const cartItems = await getCartItems(userId);

//     return NextResponse.json(cartItems);
//   } catch (e) {
//     console.error(e);
//     return NextResponse.error();
//   }
// }
