"use client"
import Image from "next/image"
import EmiInicio from '@/img/emi-developer.jpg'
import github from '@/img/git.png'
import instagram from '@/img/instagram.png'
import useApp from "@/hooks/useApp"
import { useEffect } from "react"
import Review from "@/components/Review"

export default function Home( ){
  const { darkMode, getReviews, reviews } = useApp()
  
  useEffect(()=> {
    getReviews()
    
  },[])

  return (
    <main className={`pt-10 lg:p-40 flex-col ${darkMode ? 'bg-slate-800': 'bg-gradient-to-tr  from-sky-100 to-sky-500'}`}>
      <section className="flex flex-col xl:flex-row justify-around items-center animate-entrada gap-10">
        <article className="flex flex-col">
          

            <h1 className={`text-6xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-sky-950'}`}>
              Hola, soy <span className={`${darkMode ? 'text-sky-500' : 'text-gray-100'}`}>Eminataren</span>
            </h1>
            <h2 className={`text-4xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-sky-950'}`}>
              Full Stack Developer 
            </h2>

            <div className="lg:flex justify-evenly mt-5 hidden ">
              <a href="https://github.com/EminatarenX" target="_blank">
              <Image
                src={github}
                alt="github"
                height={50}
                width={50}
                className={darkMode ? 'invert' : ''}
              />
              </a>
              <a href="https://www.instagram.com/eminataren/" target="_blank">
              <Image
                src={instagram}
                alt="instagram"
                height={50}
                width={50}
                
              />
              </a>
            </div>          

        </article>
        
        <Image 
         src={EmiInicio}
          height={2000} 
          width={2000} 
          alt="Imaen-emi" 
          className="rounded-full object-cover xl:w-[450px] animate-respiro "  
        />
      </section>

      <section 
        className="flex flex-col justify-center items-center mt-40 animate-delay-entrada"
      >
        <h2 className={`text-4xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-sky-950'}`}>
          Mira lo que opinan de mi
        </h2>
        {
          reviews.length === 0 && <p className={`${darkMode ? 'text-sky-500' : 'text-blue-800'}`}>Cargando...</p>
        }
        <article 
        className='flex gap-5 p-10 overflow-x-scroll scroll-smooth mx-4 justify-between w-[100%] animate-delay-entrada'
        >
          
         { 
         
         reviews.map((review) => (
            <Review 
              key={review.id} 
            {...review} />
          ))
          }
          
        </article>
      </section>


    </main>
  )
}

