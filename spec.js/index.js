const myForm = document.querySelector('#create')
const body = document.querySelector('body')
const img = document.querySelector('img')
const div = document.querySelector('#picture')
const url = 'https://source.unsplash.com/random'

//const clientId = 'J3q3Vn3bHJd5q4pX2ht0K5tM8z-6NCDj_OgYP1Kqetg'

const getImage = async (url) => {
  return await fetch(url)
  .then(res => res.url)
}

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('button has been clicked')
    getImage(url)
      .then(res => {
        img.setAttribute('src', res)
      })
    
      .catch(err => {
        console.error(`Error => ${err}`)
        const errorMessage = 'Sorry, but there was an error getting your image.'
        const p = document.createElement('p')
        const container = document.querySelector('.container')
        p.textContent = errorMessage;
        container.appendChild(p)
      })

})



    
    
