document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', event => {
    const draw = event.target.attributes.draw.value
    document.querySelector('#draw').attributes.class.value = draw
  })
})