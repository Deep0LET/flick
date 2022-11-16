const buttonEl = document.querySelector(".btn")

buttonEl.addEventListener("mouseover",(event)=>{
    const x =(event.pageX -buttonEl.offsetTop);
    const y =(event.pageX -buttonEl.offsetTop);

    buttonEl.style.setProperty("--xPos" , x + "px")
    buttonEl.style.setProperty("--yPos" , y+"px")
})