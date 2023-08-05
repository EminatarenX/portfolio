
export function formatearFecha(fecha: Date): string {
  const date = new Date(fecha)
  
  const fechaFormateada = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return fechaFormateada
}


