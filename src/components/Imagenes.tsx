import aws from '../../public/aws.jpg'
import Image from 'next/image'
import html from '../../public/html.jpg'
import react from '../../public/react.jpg'
import css from '../../public/css.jpg'
import js from '../../public/js.jpg'
import tailwind from '../../public/tailwindcss.jpg'
import next from '../../public/nextjs.jpg'
import ts from '../../public/ts.jpg'
import node from '../../public/nodejs.jpg'
import jwt from '../../public/jwt.jpg'
import mysql from '../../public/mysql.jpg'
import postgres from '../../public/Postgresql.jpg'
import mssql from '../../public/sql-server.jpg'

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
