import Image from 'next/image'
import useApp from '@/hooks/useApp'



export default function Imagenes() {
  const { darkMode } = useApp()
  return (
    <>
      <Image
        src={"/img/html.jpg"}
        alt="html"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={"/img/css.jpg"}
        alt="css"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={"/img/js.jpg"}
        alt="js"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
        <Image
          src={"/img/ts.jpg"}
          alt="ts"
          width={150}
          height={150}
          className='hover:scale-105 transition-all'
        />
      <Image
        src={"/img/React.jpg"}
        alt="react"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={"/img/tailwindcss.jpg"}
        alt="tailwind"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={"/img/nextjs.jpg"}
        alt="next"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={"/img/nodejs.jpg"}
        alt="node"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={"/img/jwt.jpg"}
        alt="jwt"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={"/img/mysql.jpg"}
        alt="mysql"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={"/img/Postgresql.jpg"}
        alt="postgres"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={"/img/sql-server.jpg"}
        alt="mssql"
        width={150}
        height={150}
        className='hover:scale-105 transition-all'
      />
      <Image
        src={"/img/apollo.png"}
        alt="apollo"
        width={150}
        height={150}
        className={`hover:scale-105 transition-all ${darkMode ? 'filter invert' : ''}`}
      />
      <Image
        src={"/img/graphql.png"}
        alt="graphql"
        width={150}
        height={150}
        className={`hover:scale-105 transition-all `}
      />
      <Image
        src={"/img/expressjs.jpg"}
        alt="express"
        width={150}
        height={150}
        className={`hover:scale-[1.6] transition-all scale-150`}
      />
        <Image
        src={"/img/prisma.png"}
        alt="prisma"
        width={150}
        height={150}
        className={`hover:scale-105 transition-all`}
      />
      <Image
        src={"/img/mongodb.png"}
        alt="mongo"
        width={150}
        height={150}
        className={`hover:scale-125 transition-all scale-[1.2]`}
      />
       <Image
        src={"/img/aws.png"}
        alt="aws"
        width={150}
        height={150}
        className={` hover:scale-105 transition-all ${darkMode ? 'filter invert' : ''}`}
      />
    </>
  )
}
