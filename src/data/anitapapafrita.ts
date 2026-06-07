export interface AnitaImage {
  id: number
  src: string
  thumb: string
}

export interface AnitaProject {
  title: string
  status: string
  synopsis: string
  images: AnitaImage[]
}

export const anitaPapafrita: AnitaProject = {
  title: 'Anita Papafrita',
  status: 'Próximamente',
  synopsis: `Ana emprende un viaje íntimo hacia su pasado, reviviendo los
recuerdos y el vínculo con su madre, a quien vio por última vez
cuando tenía seis años. Ese momento marca un antes y un después en
su vida, el cual se convierte en el motor de sus luchas y de su
convicción por romper el silencio familiar sobre la desaparición
de sus padres. Entre recuerdos, anécdotas y una carta perdida, Ana
busca comprender y resignificar aquello por lo que la familia tuvo
que atravesar en una trama marcada por la ausencia y la
persecución política.`,
  images: [
    { id: 1, src: '/images/Anita/photo-1.jpeg', thumb: '/images/Anita/Miniaturas/photo-1.jpeg' },
    { id: 2, src: '/images/Anita/photo-2.jpeg', thumb: '/images/Anita/Miniaturas/photo-2.jpeg' },
    { id: 3, src: '/images/Anita/photo-3.jpeg', thumb: '/images/Anita/Miniaturas/photo-3.jpeg' },
    { id: 4, src: '/images/Anita/photo-4.jpeg', thumb: '/images/Anita/Miniaturas/photo-4.jpeg' },
    { id: 5, src: '/images/Anita/photo-5.jpeg', thumb: '/images/Anita/Miniaturas/photo-5.jpeg' },
    { id: 6, src: '/images/Anita/photo-6.jpeg', thumb: '/images/Anita/Miniaturas/photo-6.jpeg' },
    { id: 7, src: '/images/Anita/photo-7.jpeg', thumb: '/images/Anita/Miniaturas/photo-7.jpeg' },
    { id: 8, src: '/images/Anita/photo-8.jpeg', thumb: '/images/Anita/Miniaturas/photo-8.jpeg' },
    { id: 9, src: '/images/Anita/photo-9.jpeg', thumb: '/images/Anita/Miniaturas/photo-9.jpeg' },
    { id: 10, src: '/images/Anita/photo-10.jpeg', thumb: '/images/Anita/Miniaturas/photo-10.jpeg' },
  ],
}
