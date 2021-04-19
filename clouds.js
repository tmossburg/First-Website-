
    <!-- src = main.js --!> 
    var modal = document.getElementById('simpleModal');
    var modalBtn = document.getElementById('modalbtn');
    var closeBtn = document.getElementsByClassName('closeBtn')[0];
        
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    
    //outside click
    window.addEventListener('click',clickoutside);
    
    function openModal()
        {
          console.log('Button was pushed!');
            modal.style.display='block';
        }
        
    function closeModal()
        {
            modal.style.display='none';
        }
        
    function clickoutside(e)
        {
            if(e.target == modal)
            {
                modal.style.display='none';
            }
        }
