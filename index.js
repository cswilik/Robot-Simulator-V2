document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  //The first ev listener needs to be on the entire document
      //It needs to add 
  init();

  // ADD CODE HERE!
  document.addEventListener("keydown", function(ev){ 
    //left = 37, up = 38, right = 39, down = 40
    let li = document.createElement('li')
    if (ev.keyCode == "37") {
      li.innerText = "left"
//create element
    } else if (ev.keyCode == "38") {
      li.innerText = "up"
    } else if (ev.keyCode == "39") {
      li.innerText = "right"
    } else if (ev.keyCode == "40") { 
      li.innerText = "down"  
    }

    const movesUl = document.querySelector('#moves-container')
    li.classList.add('moves')
    li.addEventListener('click', evt => {
      li.remove()
    })

    movesUl.append(li)
    // console.log(ev.keyCode)
  })

  let moveButton = document.querySelector("#move-button")

  moveButton.addEventListener("click", function(evt) {
    //Looks at the innerText of the li and passes that into move function
    let li = document.querySelector('.moves')
    let moveDirection = li.innerText
    move(moveDirection)
    li.remove()
    // let allLi = document.querySelectorAll('.moves')
    //move(moveDirection).setInterval(move(moveDirection), 5000) => {


      // function moves (li) {
      //   let direction = li.innerText
      //   setInterval(move(direction), 5000)
      //   // debugger
      //   li.remove()
      // }

    // allLi.forEach(moves(li))
    
      
    //li.remove()
    // console.log(evt)
  })

});

