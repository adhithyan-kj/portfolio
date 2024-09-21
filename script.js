
   $(".carousel").owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })

  function sendmail(){
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    const serviceID = "service_1dqfbyh";
    const templateID = "template_3q45equ";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById('name').value="";
        document.getElementById('email').value="";
        document.getElementById('subject').value="";
        document.getElementById('message').value="";
        alert("Your Message was sent successfully");
    })
    .catch(err=>console.log(err));
  }