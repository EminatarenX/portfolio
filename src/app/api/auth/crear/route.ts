
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

export async function POST(req: Request){
    const { usuario, password } = await req.json()

    const saltRounds = 10

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const newUser = await prisma.usuario.create({
            data: {nombre: usuario, password: hashedPassword}
        })

        return NextResponse.json(newUser)

    } catch (error) {
        console.log(error)
        const e = new Error('Error al crear usuario')
        return NextResponse.json({error: e.message})
    }

}