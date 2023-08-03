interface Fecha {
  fecha: string
}

export function formatearFecha(fecha: Fecha){
  const date = new Date(fecha.fecha)
  
  const fechaFormateada = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return fechaFormateada
}