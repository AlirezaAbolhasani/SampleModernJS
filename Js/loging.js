{
    let e ;
    let name ;

    // لاگ کردن کلیک‌ها
    document.addEventListener('click', function(event) {
        // console.log('کلیک شد:', event);
        name =' کلیک شد:';
        e =event;
        timeManager();
    })

    // لاگ کردن حرکت موس
    // document.addEventListener('mousemove', function(event) {
    //     console.log('حرکت موس:', event);
    // });

    // لاگ کردن تغییرات صفحه
    document.addEventListener('scroll', function(event) {
        // console.log('اسکرول شد:', event);
        name ='اسکرول شد:';
        e =event;
        timeManager();
    });

    // لاگ کردن فشردن کلیدها
    document.addEventListener('keydown', function(event) {
        // console.log('کلید فشرده شد:', event);
        name ='کلید فشرده شد';
        e =event;
        timeManager();
    });

    let timeManager = () =>{

        setTimeout( ()=>{
            console.log(name,new Date(), e); 
        })
    }
}