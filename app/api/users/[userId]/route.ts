import { NextResponse } from "next/server";

import { findUserById } from "@/actions/user-actions";

import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const userId = (await params).userId;

    if (!userId) {
      throw new Error("No session found");
    }

    const user = await findUserById(userId);

    return NextResponse.json(user);
  } catch (e) {
    console.error("Error al obtener los datos del usuario:", e);
    return NextResponse.error();
  }
}
