function spinWords(string){
    const words = string.split(/\s+/)
    const array = words.map(elem => {
      if(elem.length >= 5){
      elem.split('').reverse().join('')
      } 
    
    }
     )
    console.log(array)
    return array
  }