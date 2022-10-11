let btnlang=document.getElementById('enbtn')
let btlangcontext=document.getElementById('btnlang')



btnlang.addEventListener('click',function(){
    btlangcontext.classList.toggle('active')
    });


 $("#enbtn").blur(function(){
    btlangcontext.classList.remove('active')
      });