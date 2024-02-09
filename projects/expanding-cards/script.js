const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  //   console.log(panel)
  panel.addEventListener('click', () => {
    // console.log(123)
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panel.forEach((panel) => {
    panel.classList.remove('active')
  })
}
