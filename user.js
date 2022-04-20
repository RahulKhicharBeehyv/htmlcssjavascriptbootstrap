var student=[{"user":"admin",
              "password":"admin"},
              {"user":"vineetks",
              "password":"vineetks"},
              {"user":"rahul",
              "password":"rahul"},
              {"user":"khichar",
              "password":"khichar"}];

function test()
{
     const form = document.getElementById( "myForm" );
     var user=form.elements[0].value;
     var password=form.elements[1].value;
    //  console.log(user+"     "+password)
     for(var st of student)
     {
         if(st.user==user&&st.password==password)
         {
             console.log("jai shree ram rahul khichar");
             window.location.href = "http://www.w3schools.com";
         }
     }

     alert("Entered Information is wrong");
     document.location.reload();
    
 
}


            
              console.log("rahul khichar");