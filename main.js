import './style.css'
                     /* # es para buscar id */
document.querySelector('#dark-mode').addEventListener('click', () => {
     /* Dark viene del css :root */
  document.documentElement.className = 'dark'
})

document.querySelector('#light-mode').addEventListener('click', () => {
  document.documentElement.className = 'light'
})


//OTRA MANERA DE HACERLO
//Sí
/* let activeDarkmode

const darkMode = () => {No
    activeDarkmode =  !activeDarkmode */

   //No
/*     console.log(activeDarkmode) */
//Sí
  //  if (activeDarkmode){     //class List tocar la clase y añadir una nueva,(la clase dark de css)
       //no
     // document.querySelector('h1').classList.add('dark')    (add, remove remplaace)
    // document.querySelector('h1').classList.remove('light')


        //Sí
    /*    document.body.classList.add('dark')
       document.body.classList.remove('light') */


   // } else{      No         //REMOVE PARA REMOVER EL MODO OSCURO
      // document.querySelector('h1').classList.remove('dark')
      //document.querySelector('h1').classList.add('dark')    

      //Sí
    /*   document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
} */
