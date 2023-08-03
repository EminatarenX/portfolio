import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET (req: Request) {
  const numero_visitas = await prisma.visitas.count()
  
  return NextResponse.json(numero_visitas)
}

export async function POST (req: Request) {
  const visita = await prisma.visitas.create({})
  
  return NextResponse.json({ message: 'Visita registrada' , visita})
}
