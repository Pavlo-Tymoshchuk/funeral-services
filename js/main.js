window.addEventListener("load", function(event) {
    // Main SLider
    
    // Set height price block 
    
    let priceBlockWrapper = document.querySelector('.price-block__slider');
    
    if(document.querySelector('.price-block__list--slider')) {
        let priceListHeight = document.querySelector('.price-block__list--slider').offsetHeight;
        priceBlockWrapper.style.height = priceListHeight + "px";
    }
    
    // Set height price block 
    
    let allButtonsWrapper = document.querySelectorAll('.js-arrow');
    
    allButtonsWrapper.forEach(itemWrapper => {
        let wrapper = itemWrapper.closest('.slider');
        let allButtons = wrapper.querySelectorAll('.js-button-slider');
        let allItems = wrapper.querySelectorAll('.js-item-slider');
        let arrowNext = wrapper.querySelector('.js-arrow-slider-next');
        let arrowPrev = wrapper.querySelector('.js-arrow-slider-prev');
        
        if(arrowNext) {
            arrowNext.addEventListener('click', function(){
                let arctiveButton = wrapper.querySelector('.js-button-slider.active');
                if(arctiveButton.nextElementSibling.classList.contains('js-button-slider')) {
                    arctiveButton.nextElementSibling.click();
                }else {
                    wrapper.querySelector(".js-button-slider[data-index='1']").click();
                }
            });
            
            arrowPrev.addEventListener('click', function(){
                let arctiveButton = wrapper.querySelector('.js-button-slider.active');
                if(arctiveButton.previousElementSibling != null) {
                    arctiveButton.previousElementSibling.click();
                }else {
                    wrapper.querySelector(`.js-button-slider[data-index='${allButtons.length}']`).click();
                }
            });
        }
    
        allButtons.forEach(itemButton => {
            itemButton.addEventListener('click', function(){
                let dataIndex = itemButton.dataset.index;
                
                allButtons.forEach(item => {
                    item.classList.remove('active');
                });
                
                allItems.forEach(item => {
                    item.classList.remove('show');
                });
                
                this.classList.add('active');
                
                let activeElem = wrapper.querySelector(`.js-item-slider[data-index="${dataIndex}"]`);
                
                if(activeElem.classList.contains("price-block__list--slider")) {
                    let heightBlock = activeElem.offsetHeight;
                    priceBlockWrapper.style.height = heightBlock + "px";
                }
                
                activeElem.classList.add('show');
            });
        });
    
    });
    
    // /Main SLider
    
    // Popup
        
    let mainButton = document.querySelectorAll('.js-button');
    let overlay = document.querySelector('.overlay');
    let htmlOverflow = document.querySelector('html');
    
    for(var i = 0; mainButton.length > i; i++) {
        if(mainButton[i] !== null) {
            
            mainButton[i].addEventListener('click', function(){
                let getData = this.getAttribute('data-target');
                let popup = document.querySelector('.js-popup[data-target = ' + getData + ']');
                popup.classList.add('active');
                overlay.classList.add('active');
                htmlOverflow.classList.add('overflow');
            });
        }
    }
    
    document.addEventListener('click', function(e){
        let elem = e.target;
        
        if(elem.closest('.js-close')){
            let popupActive = document.querySelector('.js-popup.active');
            
            if(popupActive) {
                popupActive.classList.remove('active');
                overlay.classList.remove('active');
                htmlOverflow.classList.remove('overflow');
            }
        }
    });

    overlay.addEventListener('click', function(){
        let popupActive = document.querySelector('.js-popup.active');
        
        popupActive.classList.remove('active');
        overlay.classList.remove('active');
        htmlOverflow.classList.remove('overflow');
    });
    
    // //Popup
    
    // Check call back form 
    
    let callBackButton = document.querySelector('.js-button-call-back');
    
    
    callBackButton.addEventListener('click', function() {
        let thanksPopup = document.querySelector('.js-call-back-popup');
        let callBackform = this.closest('.js-call-back-form');
        let callbackEmail = callBackform.querySelector('.js-call-back-email');
        let callbackEmailValue = callbackEmail.value;
        let chekEmail = callbackEmailValue.match(/@/);
        
        if(chekEmail && callbackEmailValue != "") {
            callbackEmail.classList.remove('error');
            
            thanksPopup.classList.add('active');
            overlay.classList.add('active');
            htmlOverflow.classList.add('overflow');
            
        }else {
            callbackEmail.classList.add('error');
        }
    });
    
    // //Check call back form
    
    // Staff block
    
    let staffWrapper = document.querySelector('.js-staff');
    let staffButton = document.querySelector('.js-button-staff');
    let allSraffItemsLength = document.querySelectorAll('.our-staff__item').length;
    
    if(staffWrapper) {
        if(allSraffItemsLength > 9 ) {
            staffButton.classList.add('show');
        }
        
        staffButton.addEventListener('click', function(){
            staffWrapper.classList.toggle('active');
        });
    }
    
    // Staff block 
    
});