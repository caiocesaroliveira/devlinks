function toggleMode() {
  const lightModeClass = 'light'

  const html = document.documentElement
  html.classList.toggle(lightModeClass)

  // Pega a tag imagem
  const img = document.querySelector('#profile img')

  if (html.classList.contains(lightModeClass)) {
    //Se estiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      'alt',
      'Foto de Mayk Brito sorrindo, usando óculos e jaqueta preta, sem barba e fundo roxo e azul'
    )
  } else {
    //Se estiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute(
      'alt',
      'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo'
    )
  }
}
