import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

export async function POST(req: Request){

    const { usuario, password } = await req.json()
    try {
      
      const user = await prisma.usuario.findFirst({
          where: {
              nombre: usuario
          }
      })
  
      if(!user){
        const error = new Error('Usuario no encontrado')
        return NextResponse.json({msg: error.message}, {status: 404})
      } 
  
      const passwordMatch = await bcrypt.compare(password, user.password)
  
      if(!passwordMatch){
        const error = new Error('Password incorrecto')
        return NextResponse.json({msg: error.message}, {status: 401})
      } 
  
      return NextResponse.json({token: 'token', id: user.id})

    } catch (error) {
      return NextResponse.json({msg: "Hubo un error"}, {status: 500})
    }

}


