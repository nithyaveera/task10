let countdown= (number, callback) => {
    var countdownContainer = document.createElement("div");
      countdownContainer.style.textAlign = 'center'
      countdownContainer.style.margin = '45vh 35vw'
      countdownContainer.style.fontSize ='2em'
      countdownContainer.style.color = '#c10037'
      document.body.append(countdownContainer)
      setTimeout(() => {
          countdownContainer.textContent = number
          setTimeout(() => {
              countdownContainer.textContent = number - 1
              setTimeout(() => {
                  countdownContainer.textContent = number - 2
                  setTimeout(() => {
                      countdownContainer.textContent = number - 3
                      setTimeout(() => {
                          countdownContainer.textContent = number - 4
                          setTimeout(() => {
                              countdownContainer.textContent = number - 5
                              setTimeout(() => {
                                  countdownContainer.textContent = number - 6
                                  setTimeout(() => {
                                      countdownContainer.textContent = number - 7
                                      setTimeout(() => {
                                          countdownContainer.textContent = number - 8
                                          setTimeout(() => {
                                              countdownContainer.textContent = number - 9
                                              setTimeout(() => {
                                                callback()
                                              }, 1000);
                                          }, 1000);
                                      }, 1000);
                                  }, 1000);
                              }, 1000);
                          }, 1000);
                      }, 1000);
                  }, 1000);
              }, 1000);
          },1000);
      }, 1000);
  }
  
countdown(10, () => {
    var countdownn = document.querySelector("div")
    countdownn.textContent="Happy Independence Day!"
}
)
