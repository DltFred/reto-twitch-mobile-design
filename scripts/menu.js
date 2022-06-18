const $d = document
export function toggleMenu() {
  const $menuButton = $d.querySelector(".menuButton")
  const $containerNavbar = $d.querySelector(".containerNavbar")
  const $nestedList = $d.querySelectorAll(".nestedList")
  $menuButton.addEventListener("click", () => {
    $containerNavbar.classList.toggle("menuOpen")
    if ($containerNavbar.classList.contains("menuOpen")) {
      $menuButton.style.backgroundImage = "url('../images/icon-close-menu.svg')"
      $nestedList.forEach(item => item.classList.remove("isShow"))
    } else $menuButton.style.backgroundImage = "url('../images/icon-menu.svg')"
  })
}

export function toggleNestedMenu() {
  const $navItems = $d.querySelectorAll(".nav-item")
  $navItems.forEach(item => {
    item.addEventListener("click", () => {
      const $ul = item.nextElementSibling
      if ($ul.nodeName === 'UL') $ul.classList.toggle("isShow")
      $ul.classList.contains('isShow')
        ? item.querySelector('img').src = '../images/icon-arrow-up.svg'
        : item.querySelector('img').src = '../images/icon-arrow-down.svg'
    })
  })
}