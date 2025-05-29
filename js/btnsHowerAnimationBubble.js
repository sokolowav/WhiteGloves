export const iniBtnsHowerAnimationBubble = () => {
  const btns = document.querySelectorAll('.news .button')
  btns.forEach((btn) => {
    const span = btn.querySelector('.bubble')

    function setPosition(e) {
      const rect = btn.getBoundingClientRect()
      const relX = e.clientX - rect.left
      const relY = e.clientY - rect.top

      span.style.left = `${relX}px`
      span.style.top = `${relY}px`
    }

    btn.addEventListener('mouseenter', setPosition)
    btn.addEventListener('mouseout', setPosition)
  })
}