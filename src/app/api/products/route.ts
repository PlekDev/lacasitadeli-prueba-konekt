import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET - Listar productos con búsqueda y filtro
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id') || ''
    const search = searchParams.get('search') || ''
    const categoryId = searchParams.get('categoryId') || ''
    const barcode = searchParams.get('barcode') || ''
    const locationId = searchParams.get('locationId') || ''
    
    const limit = parseInt(searchParams.get('limit') || '100')
    const excludeId = searchParams.get('excludeId') || ''

    const products = await db.product.findMany({
      where: {
        active: true,
        ...(id && { id }),
        ...(excludeId && { id: { not: excludeId } }),
        ...(search && {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { barcode: { contains: search, mode: 'insensitive' } },
          ]
        }),
        ...(categoryId && { categoryId }),
        ...(barcode && { barcode }),
      },
      include: {
        category: true,
        inventory: locationId ? {
          where: { locationId },
        } : true,
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    })

    return NextResponse.json({ success: true, data: products })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ success: false, error: 'Error al obtener productos' }, { status: 500 })
  }
}

// POST - Crear nuevo producto
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, barcode, sku, description, categoryId, costPrice, salePrice, unit, imageUrl, initialStock, locationId } = body

    const product = await db.product.create({
      data: {
        name,
        barcode: barcode || null,
        sku: sku || null,
        description,
        categoryId: categoryId || null,
        costPrice: parseFloat(costPrice) || 0,
        salePrice: parseFloat(salePrice) || 0,
        unit: unit || 'pieza',
        imageUrl,
      },
    })

    // Si se especifica stock inicial, crear registro de inventario
    if (initialStock && locationId) {
      await db.inventory.create({
        data: {
          productId: product.id,
          locationId,
          quantity: parseInt(initialStock),
        },
      })
    }

    return NextResponse.json({ success: true, data: product })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json({ success: false, error: 'Error al crear producto' }, { status: 500 })
  }
}
