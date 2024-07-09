document.addEventListener('DOMContentLoaded', function() {
    var intervalId = setInterval(function() {
      var voProductOptionSelect = document.querySelector('select[name="properties[Select service wanted]"]');
      if (voProductOptionSelect) {
        voProductOptionSelect.addEventListener('change', function() {
          
          if('Bind Only' === this.value){
            $('.f-aic.f-jcsb').addClass('bind-only-hidden');
            $('.pr_btn.product-form__submit').addClass('bind-only-hidden');
            $('.fl.orderMsg').addClass('bind-only-hidden');
            $('.freeShipMsg').addClass('bind-only-hidden');
            $('.shippingMsg').addClass('bind-only-hidden');
          }
        });
        clearInterval(intervalId); // Dejar de intentar una vez que el select es encontrado
      }
    }, 1000); // Intenta cada segundo
  });
  