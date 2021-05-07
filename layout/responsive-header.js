var headerNav =document.getElementById('nav');
        var mobileMenuClose =document.getElementById('mobile-menu-close');
        var mobileMenuOpen =document.getElementById('mobile-menu-open');
        var navMenu =document.getElementsById('menu-list')
        mobileMenuOpen.onclick=function(){
            navMenu.style.display='block';
            mobileMenuOpen.style.display='none';
            mobileMenuClose.style.display='block';
        }
        mobileMenuClose.onclick=function(){
            navMenu.style.display='none';
            mobileMenuOpen.style.display='block';
            mobileMenuClose.style.display='none';
        }        