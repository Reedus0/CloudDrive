export const refreshAllFiles = () => {
  let files = Array.from(document.querySelectorAll('.browser-files__element'))
  for (let i = 0; i < files.length; i++) {
    files[i].classList.remove("_active")
  }
}