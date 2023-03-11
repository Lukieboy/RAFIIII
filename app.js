let body = document.querySelector("body");
let link = document.querySelector(".idk");
let colors = ["red", "orange", "yellow", "green","blue", "purple", "pink"]


link.addEventListener("click", ()=>{
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    document.querySelector(".navbar").style.background=bgColor;


    // body.innerHTML +=`<style>
    // body, .navbar, footer, .bg-confetti-animated {
    //     background-color:red !important;
    // }
    // .header{
    //     background:linear-gradient(red, transparent),
    // linear-gradient(transparent, red),
    //                      url('../images/raffffi.jpeg') no-repeat center;
    // }
    // </style>`
})

document.querySelector(".open").addEventListener("click", ()=>{
    document.querySelector(".stuff").innerHTML = `
    Hi Rafi, <br>
    You are such a wonderful friend...and I'm so grateful to have you in my life...You are such an amazing person...<br>
    I really don't know what I would do without you...it's so nice to talk to you and you are really just an amazing friend...<br>
    
    Happy Birthday,
    
    Lucas`
})