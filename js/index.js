// Your code goes here
const navItems = document.querySelectorAll(".nav");

navItems.forEach(item =>{
item.addEventListener("mouseenter", e => {
  // Make sure your click event is firing
//   console.log(`mouseenter happened!`);
  item.style.transform = 'scale(1.1)';
  item.style.transition = ' transform 0.5s';
});
});

navItems.forEach(item =>{
    item.addEventListener("mouseleave", e => {
      // Make sure your click event is firing
    //   console.log(`mouseover happened!`);
      item.style.transform = 'scale(1.0)';
      item.style.transition = ' transform 0.5s';
    });
    });

    const logoHeading = document.querySelector(".logo-heading");

    logoHeading.addEventListener("mouseover", e =>{
        logoHeading.textContent = "HEHE"
    });
  

    const imgAll = document.querySelectorAll("img")
    // console.log(imgAll);

    imgAll.forEach(item =>{
        item.addEventListener("wheel", e =>{
            item.style.display = "none";
        })
    });


    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(item =>{
        item.addEventListener("mouseup", e =>{
            item.style.display = "none";
        })
    });
    // console.log(navLinks)

    const textContentAll = document.querySelectorAll(".text-content");

    textContentAll.forEach(item =>{
        item.addEventListener("click", e =>{
            item.style.transform = 'scale(.5)';
            item.style.transition = 'transform 0.5s';
        })  
    });

    textContentAll.forEach(item =>{
        item.addEventListener("contextmenu", e =>{
            item.style.color = "red";
        })  
    });


    const destiTxt = document.querySelectorAll(".btn");

    destiTxt.forEach(item =>{
        item.addEventListener("mousemove", e => {
            item.textContent = "REDACTED";
            item.style.background = "black";
            item.style.color = "white";
        })
    });
    

 

    const h4All = document.querySelectorAll("h4");
    h4All.forEach(item =>{
        item.addEventListener("mouseout", e =>{
            item.style.fontSize = "10rem";
        })
    })
    
    const h2Pick = document.querySelectorAll("h2");
    h2Pick.forEach(item =>{
        item.addEventListener("mousedown", e =>{
            item.style.fontWeight = "bold";
            item.style.fontSize = "10rem";
        })
    })