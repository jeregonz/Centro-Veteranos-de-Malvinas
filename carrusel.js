const sections = document.querySelectorAll('.section-inicio')

sections.forEach((section, index) => {
    const prevBtn = section.querySelector('.prev')
    const nextBtn = section.querySelector('.next')

    // Evento para el botón anterior
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const prevSection = sections[index - 1]
            if (prevSection) {
                prevSection.scrollIntoView({ behavior: 'smooth' })
            }
        })
    }

    // Evento para el botón siguiente
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const nextSection = sections[index + 1]
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' })
            }
        })
    }
})

const main = document.querySelector('.main-inicio')

let startX = 0 // Coordenada inicial del toque
let currentIndex = 0 // Índice actual de la sección visible

// Maneja el inicio del toque
const handleTouchStart = (event) => {
    startX = event.touches[0].clientX // Guarda la posición inicial del toque
}

// Maneja el movimiento del toque
const handleTouchMove = (event) => {
    if (!startX) return // Evita errores si no se detectó un touchstart

    const currentX = event.touches[0].clientX // Posición actual del toque
    const diffX = startX - currentX // Diferencia entre la posición inicial y actual

    // Umbral para detectar swipe (50px para evitar movimientos pequeños)
    const swipeThreshold = 50

    if (Math.abs(diffX) > swipeThreshold) {
        if (diffX > 0 && currentIndex < sections.length - 1) {
            // Swipe hacia la izquierda (siguiente sección)
            currentIndex++
            sections[currentIndex].scrollIntoView({ behavior: 'smooth' })
        } else if (diffX < 0 && currentIndex > 0) {
            // Swipe hacia la derecha (sección anterior)
            currentIndex--
            sections[currentIndex].scrollIntoView({ behavior: 'smooth' })
        }

        // Resetea para evitar múltiples desplazamientos en un solo toque
        startX = 0
    }
}

// Resetea las coordenadas al finalizar el toque
const handleTouchEnd = () => {
    startX = 0
}

// Asigna los eventos táctiles al contenedor principal
main.addEventListener('touchstart', handleTouchStart)
main.addEventListener('touchmove', handleTouchMove)
main.addEventListener('touchend', handleTouchEnd)


const indicators = document.querySelector('.carousel-indicators')

// Generar indicadores
sections.forEach((_, index) => {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  if (index === 0) dot.classList.add('active') // Activa el primer punto por defecto
  indicators.appendChild(dot)
})

const dots = document.querySelectorAll('.dot')

// Función para actualizar los indicadores
const updateDots = (currentIndex) => {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex)
  })
}

// Configurar IntersectionObserver
const observerOptions = {
  root: null, // Observa el viewport completo
  threshold: 0.5, // Al menos el 50% de la sección debe estar visible
}

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const visibleIndex = Array.from(sections).indexOf(entry.target)
      updateDots(visibleIndex)
    }
  })
}

const observer = new IntersectionObserver(observerCallback, observerOptions)

// Observar cada sección
sections.forEach((section) => observer.observe(section))

// Navegación con botones (prev y next)
sections.forEach((section, index) => {
  const prevBtn = section.querySelector('.prev')
  const nextBtn = section.querySelector('.next')

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const newIndex = Math.max(0, index - 1)
      sections[newIndex].scrollIntoView({ behavior: 'smooth' })
    })
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const newIndex = Math.min(sections.length - 1, index + 1)
      sections[newIndex].scrollIntoView({ behavior: 'smooth' })
    })
  }
})

// Navegación por teclado
document.addEventListener('keydown', (event) => {
  const activeIndex = Array.from(sections).findIndex((section) =>
    section.getBoundingClientRect().left === 0
  )

  if (event.key === 'ArrowRight' && activeIndex < sections.length - 1) {
    sections[activeIndex + 1].scrollIntoView({ behavior: 'smooth' })
  } else if (event.key === 'ArrowLeft' && activeIndex > 0) {
    sections[activeIndex - 1].scrollIntoView({ behavior: 'smooth' })
  }
})

// Navegación al hacer clic en un punto
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sections[index].scrollIntoView({ behavior: 'smooth' })
  })
})
