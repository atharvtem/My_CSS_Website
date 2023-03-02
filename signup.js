
  function validate()
  {
          var uname=document.myform.uname.value;
          var pwd=document.myform.pwd.value;
          var cpwd=document.myform.cpwd.value;
          var contact=document.myform.contact.value;

          console.log(uname);
          if(uname==null||uname=="")
          {
              alert('Username Should not be empty');
              return false;
          }
          if(pwd==null||pwd=="")
          {
              alert('Password Should not be empty');
              return false;
          } else if(pwd.length<6){
              alert('Password must be greater than 6 characters');
              return false;
          }
          if(cpwd!=pwd)
          {
             alert('Password and Confirm password must match');
              return false;
          }

  }
