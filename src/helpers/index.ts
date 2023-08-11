
export function formatearFecha(fecha: string) {

  
  const date = new Date(fecha)
  
  const fechaFormateada = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return fechaFormateada
}

export const serverURL = process.env.SERVER || 'http://localhost:5439/'


