import { type NextRequest, NextResponse } from "next/server";

import { findUserById } from "@/actions/user-actions";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;

    if (!userId) {
      throw new Error("No session found");
    }

    const user = await findUserById(userId);

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (e) {
    console.error("Error al obtener los datos del usuario:", e);
    return NextResponse.error();
  }
}
