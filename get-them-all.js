const getArchitects = () => {
    const architects = document.querySelectorAll('a.architect')
    const nonArchitects = document.querySelectorAll(':not(a.architect)')
    return [Array.from(architects), Array.from(nonArchitects)]
  }
  
  const getClassical = () => {
    const classicalArchitects = document.querySelectorAll('a.architect.classical')
    const nonClassicalArchitects = document.querySelectorAll('a.architect:not(.classical)')
    return [Array.from(classicalArchitects), Array.from(nonClassicalArchitects)]
  }
  
  const getActive = () => {
    const activeClassicalArchitects = document.querySelectorAll('a.architect.classical.active')
    const nonActiveClassicalArchitects = document.querySelectorAll('a.architect.classical:not(.active)')
    return [Array.from(activeClassicalArchitects), Array.from(nonActiveClassicalArchitects)]
  }

  
  const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano')
    const activeClassicalArchitects = document.querySelectorAll('a.architect.classical.active:not(#BonannoPisano)')
    return [bonannoPisano, Array.from(activeClassicalArchitects)]
  }
  
  