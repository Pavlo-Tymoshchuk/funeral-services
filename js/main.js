window.addEventListener("load", function(event) {
    // mainSLider
    
    
    let allButtonsWrapper = document.querySelectorAll('.js-arrow');
    
    allButtonsWrapper.forEach(itemWrapper => {
        let wrapper = itemWrapper.closest('.slider');
        let allButtons = wrapper.querySelectorAll('.js-button-slider');
        let allItems = wrapper.querySelectorAll('.js-item-slider');
    
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
                
                wrapper.querySelector(`.js-item-slider[data-index="${dataIndex}"]`).classList.add('show');
            });
        });
    
    });
    
    // /Main SLider
    
    // Set height price block 
    let priceBlockWrapper = document.querySelector('.price-block__slider');
    let priceListHeight = document.querySelector('.price-block__list--slider').offsetHeight;
    
    priceBlockWrapper.style.height = priceListHeight + "px";
});