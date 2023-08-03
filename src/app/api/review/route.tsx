import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET (req: Request) {
  try {

    const reviews = await prisma.resenia.findMany()

    return NextResponse.json(reviews)

  } catch (error) {

    const e = new Error('Error al obtener las reseñas')
    return NextResponse.json({ error: e.message })
  }
}

export async function POST (req: Request, res: Response){
  const { nombre, comentario, calificacion } = await req.json()

  try {
    
    const review = await prisma.resenia.create({
      data: {
        nombre,
        comentario,
        calificacion
      }
    })

    return NextResponse.json(review)
  } catch (error) {

    const e = new Error('Error al crear la reseña')
    return NextResponse.json({ error: e.message })
  }

}