export interface Review {
  id? : number,
  nombre: string,
  comentario: string,
  calificacion: number
  fecha?: string
}

export interface Auth {
  id: string
  nombre: string
}