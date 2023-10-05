import { NextResponse } from 'next/server'

import { getProductsWithoutImages } from '@/actions/product-actions'

export const dynamic = 'force-dynamic'

export async function GET() {
  const products = await getProductsWithoutImages()

  return NextResponse.json(products)
}
