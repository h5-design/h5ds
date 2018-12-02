import { bodyInnerUniqueId } from 'core/config'

export const workplaceGoTop = function workplaceGoTop() {
  const raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame
  let dom = document.querySelector(`#${bodyInnerUniqueId}`) as Element
  let animate = () => {
    if (dom.scrollTop <= 0) {
      window.dispatchEvent(new Event('resize'))
      return false
    } else {
      dom.scrollTop -= 90
      raf(animate)
    }
  }
  raf(animate)
}
