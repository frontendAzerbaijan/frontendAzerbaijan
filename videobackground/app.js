const  menuToggle1 = document.querySelector('.toggle');
        const  showcase1 = document.querySelector('.showcase');

        menuToggle1.addEventListener('click' , () =>{
            menuToggle1.classList.toggle('active');
            showcase1.classList.toggle('active');
        })