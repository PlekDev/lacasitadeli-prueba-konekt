import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const { searchParams } = new URL(request.url)
    const locationId = searchParams.get('locationId') || ''

    const product = await db.product.findUnique({
      where: { id },
      include: {
        category: true,
        inventory: locationId ? {
          where: { locationId },
        } : true,
      },
    })

    if (!product) {
      return NextResponse.json({ success: false, error: 'Producto no encontrado' }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: product })
  } catch (error) {
    console.error('Error fetching product detail:', error)
    return NextResponse.json({ success: false, error: 'Error al obtener el producto' }, { status: 500 })
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    // Explicitly pick fields to avoid mass assignment security risks
    const {
      name,
      description,
      categoryId,
      costPrice,
      salePrice,
      unit,
      imageUrl,
      active
    } = body

    const updateData: any = {}
    if (name !== undefined) updateData.name = name
    if (description !== undefined) updateData.description = description
    if (categoryId !== undefined) updateData.categoryId = categoryId
    if (costPrice !== undefined) updateData.costPrice = typeof costPrice === 'string' ? parseFloat(costPrice) : costPrice
    if (salePrice !== undefined) updateData.salePrice = typeof salePrice === 'string' ? parseFloat(salePrice) : salePrice
    if (unit !== undefined) updateData.unit = unit
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl
    if (active !== undefined) updateData.active = active

    const updatedProduct = await db.product.update({
      where: { id },
      data: updateData,
    })

    return NextResponse.json({ success: true, data: updatedProduct })
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json({ success: false, error: 'Error al actualizar producto' }, { status: 500 })
  }
}
