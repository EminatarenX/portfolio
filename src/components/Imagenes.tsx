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
import apollo from '@/img/apollo.png'
import graphql from '@/img/graphql.png'
import express from '@/img/expressjs.jpg'
import prisma from '@/img/prisma.png'
import mongodb from '@/img/mongodb.png'
import aws from '@/img/aws.png'
import useApp from '@/hooks/useApp'



export default function Imagenes() {
  const { darkMode } = useApp()
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
      <Image
        src={apollo}
        alt="apollo"
        width={150}
        height={150}
        className={`hover:scale-105 transition-all ${darkMode ? 'filter invert' : ''}`}
      />
      <Image
        src={graphql}
        alt="graphql"
        width={150}
        height={150}
        className={`hover:scale-105 transition-all `}
      />
      <Image
        src={express}
        alt="express"
        width={150}
        height={150}
        className={`hover:scale-[1.6] transition-all scale-150`}
      />
        <Image
        src={prisma}
        alt="prisma"
        width={150}
        height={150}
        className={`hover:scale-105 transition-all`}
      />
      <Image
        src={mongodb}
        alt="mongo"
        width={150}
        height={150}
        className={`hover:scale-125 transition-all scale-[1.2]`}
      />
       <Image
        src={aws}
        alt="aws"
        width={150}
        height={150}
        className={` hover:scale-105 transition-all ${darkMode ? 'filter invert' : ''}`}
      />
    </>
  )
}
