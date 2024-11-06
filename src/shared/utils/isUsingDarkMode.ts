function isUsingDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export { isUsingDarkMode }
