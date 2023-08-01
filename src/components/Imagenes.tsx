import Image from 'next/image'
import html from '@/img/html.jpg'
import react from '@/img/React.jpg'
import css from '@/img/css.jpg'
import js from '@/img/js.jpg'
import tailwind from '@/img/tailwindcss.jpg'
import next from '@/img/nextjs.jpg'
import ts from '@/img/ts.jpg'
import node from '@/img/nodejs.jpg'
import jwt from '@/img/jwt.jpg'
import mysql from '@/img/mysql.jpg'
import postgres from '@/img/Postgresql.jpg'
import mssql from '@/img/sql-server.jpg'

export default function Imagenes() {
  return (
    <>
      <Image
        src={html}
        alt="html"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={css}
        alt="css"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={js}
        alt="js"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
        <Image
          src={ts}
          alt="ts"
          width={150}
          height={150}
          className='hover:scale-105 transition-all'
        />
      <Image
        src={react}
        alt="react"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={tailwind}
        alt="tailwind"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={next}
        alt="next"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={node}
        alt="node"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={jwt}
        alt="jwt"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={mysql}
        alt="mysql"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={postgres}
        alt="postgres"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={mssql}
        alt="mssql"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
    </>
  )
}
