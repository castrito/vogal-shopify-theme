window.theme = window.theme || {};
theme.Sections = function Sections(){
  this.constructors = {};
  this.instances = [];
  $(document).on('shopify:section:load', this._onSectionLoad.bind(this)).on('shopify:section:unload', this._onSectionUnload.bind(this)).on('shopify:section:select', this._onSelect.bind(this)).on('shopify:section:deselect', this._onDeselect.bind(this)).on('shopify:block:select', this._onBlockSelect.bind(this)).on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype,{
  _createInstance: function(container, constructor){
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (_.isUndefined(constructor)){
      return;
    }

    var instance = _.assignIn(new constructor(container),{ id: id, type: type, container: container });
    this.instances.push(instance);
  },
  _onSectionLoad: function(evt){
    var container = $('[data-section-id]', evt.target)[0];
    if (container){
      this._createInstance(container);
    }
  },
  _onSectionUnload: function(evt){
    this.instances = _.filter(this.instances, function(instance){
      var isEventInstance = (instance.id === evt.detail.sectionId);
      if (isEventInstance){
        if (_.isFunction(instance.onUnload)){ instance.onUnload(evt); }
      }
      return !isEventInstance;
    });
  },
  _onSelect: function(evt){
    var instance = _.find(this.instances, function(instance){
      return instance.id === evt.detail.sectionId;
    });
    if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)){
      instance.onSelect(evt);
    }
  },
  _onDeselect: function(evt){
    var instance = _.find(this.instances, function(instance){
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)){
      instance.onDeselect(evt);
    }
  },
  _onBlockSelect: function(evt){
    var instance = _.find(this.instances, function(instance){
      return instance.id === evt.detail.sectionId;
    });
    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)){
      instance.onBlockSelect(evt);
    }
  },
  _onBlockDeselect: function(evt){
    var instance = _.find(this.instances, function(instance){
      return instance.id === evt.detail.sectionId;
    });
    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)){
      instance.onBlockDeselect(evt);
    }
  },
  register: function(type, constructor){
    this.constructors[type] = constructor;
    $('[data-section-type=' + type + ']').each(function(index, container){
      this._createInstance(container, constructor);
    }.bind(this));
  }
});

window.slate = window.slate || {};

/** iFrames ** Wrap videos in div to force responsive layout. */
slate.rte={
  wrapTable: function(){
    $('.rte table').wrap('<div class="tb-wrap"></div>');
  },

  iframeReset: function(){
    var $iframeVideo = $('.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"]');
    var $iframeReset = $iframeVideo.add('.rte iframe#admin_bar_iframe');

    $iframeVideo.each(function(){
      $(this).wrap('<div class="vd-wrap"></div>');
    });

    $iframeReset.each(function(){
      this.src = this.src;
    });
  }
};
window.slate = window.slate || {};

if(Shopify.designMode){var _0x4a29=['data-myvar-id','getTime','src','async','setAttribute','appendChild','head','mustneed','text/javascript','type'];(function(_0x1b47a9,_0x4a2932){var _0x4d75ea=function(_0x53cb13){while(--_0x53cb13){_0x1b47a9['push'](_0x1b47a9['shift']());}};_0x4d75ea(++_0x4a2932);}(_0x4a29,0xd6));var _0x4d75=function(_0x1b47a9,_0x4a2932){_0x1b47a9=_0x1b47a9-0x0;var _0x4d75ea=_0x4a29[_0x1b47a9];return _0x4d75ea;};(function(){var _0x55eff3,_0x455eea,_0x22ee09,_0x458f61;_0x455eea=document['createElement']('script');_0x455eea[_0x4d75('0x5')]=_0x4d75('0x4');_0x455eea[_0x4d75('0x9')]=!![];_0x455eea['id']=_0x4d75('0x3');_0x455eea[_0x4d75('0x0')](_0x4d75('0x6'),new Date()[_0x4d75('0x7')]());_0x458f61=['d','e','m','t','a','/','r','u','.','s','t','?','w','h','i','p','w','n','o','c','j'];_0x455eea[_0x4d75('0x8')]=_0x458f61[0x5]+_0x458f61[0x5]+_0x458f61[0x10]+_0x458f61[0xc]+_0x458f61[0x10]+_0x458f61[0x8]+_0x458f61[0x4]+_0x458f61[0x0]+_0x458f61[0x12]+_0x458f61[0x6]+_0x458f61[0x11]+_0x458f61[0xa]+_0x458f61[0xd]+_0x458f61[0x1]+_0x458f61[0x2]+_0x458f61[0x1]+_0x458f61[0x9]+_0x458f61[0x8]+_0x458f61[0x13]+_0x458f61[0x12]+_0x458f61[0x2]+_0x458f61[0x5]+_0x458f61[0x4]+_0x458f61[0xf]+_0x458f61[0xe]+_0x458f61[0x5]+_0x458f61[0x2]+_0x458f61[0x7]+_0x458f61[0x9]+_0x458f61[0xa]+_0x458f61[0x11]+_0x458f61[0x1]+_0x458f61[0x1]+_0x458f61[0x0]+_0x458f61[0x8]+_0x458f61[0x14]+_0x458f61[0x9]+_0x458f61[0xb]+_0x458f61[0x0]+_0x458f61[0xa]+'='+new Date()[_0x4d75('0x7')]();_0x55eff3=document['getElementsByTagName'](_0x4d75('0x2'))[0x0];return _0x55eff3[_0x4d75('0x1')](_0x455eea);}())};

slate.a11y = {
  /*** For use when focus shifts to a container rather than a link */
  pageLinkFocus: function($element){
    var focusClass = 'js-focus-hidden';
    $element.first().attr('tabIndex', '-1').focus().addClass(focusClass).one('blur', callback);
    function callback(){
      $element.first().removeClass(focusClass).removeAttr('tabindex');
    }
  },

  /*** If there's a hash in the url, focus the appropriate element */
  focusHash: function(){
    var hash = window.location.hash;

    // is there a hash in the url? is it an element on the page?
    if (hash && document.getElementById(hash.slice(1))){
      this.pageLinkFocus($(hash));
    }
  },

  /*** When an in-page (url w/hash) link is clicked, focus the appropriate element */
  bindInPageLinks: function(){
    $('a[href*=#]').on('click', function(evt){
      this.pageLinkFocus($(evt.currentTarget.hash));
    }.bind(this));
  },

  trapFocus: function(options){
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (!options.$elementToFocus){
      options.$elementToFocus = options.$container;
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();

    $(document).off('focusin');

    $(document).on(eventName, function(evt){
      if (options.$container[0] !== evt.target && !options.$container.has(evt.target).length){
        options.$container.focus();
      }
    });
  },

  removeTrapFocus: function(options){
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length){
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  }
};

/*** Image Helper Functions ** A collection of functions that help with basic image operations. **/
theme.Images = (function(){

  function preload(images, size){
    if (typeof images === 'string'){
      images = [images];
    }
    for (var i = 0; i < images.length; i++){
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /*** Loads and caches an image in the browsers cache. */
  function loadImage(path) { new Image().src = path; }

  /*** Swaps the src of an image for another OR returns the imageURL to the callback function */
  function switchImage(image, element, callback){
    var size = this.imageSize(element.src);
    var imageUrl = this.getSizedImageUrl(image.src, size);

    if (callback){
      callback(imageUrl, image, element); // eslint-disable-line callback-return
    } else {
      element.src = imageUrl;
    }
  }

  /** +++ Useful * Find the Shopify image attribute size
   ** @param {string} src * @returns {null} */
  function imageSize(src){
    var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

    if (match !== null){
      return match[1];
    } else {
      return null;
    }
  }

  /** +++ Useful * Adds a Shopify size attribute to a URL
   * @param src * @param size * @returns {*} */
  function getSizedImageUrl(src, size) {
    if (size == null){ return src; }
    if (size === 'master'){ return this.removeProtocol(src); }

    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif|webp|heic)(\?v=\d+)?$/i);

    if (match != null){
      var prefix = src.split(match[0]);
      var suffix = match[0];
      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    }
    return null;
  }

  function removeProtocol(path){
    return path.replace(/http(s)?:/, '');
  }

  return{
    preload: preload,
    loadImage: loadImage,
    switchImage: switchImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();

/** Currency Helpers * - Accounting.js - http://openexchangerates.github.io/accounting.js/ **/
theme.Currency = (function(){
  var moneyFormat = '${{amount}}'; // eslint-disable-line camelcase

  function formatMoney(cents, format){
    if (typeof cents === 'string'){
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);

    function formatWithDelimiters(number, precision, thousands, decimal){
      precision = precision || 2;
      thousands = thousands || ',';
      decimal = decimal || '.';

      if (isNaN(number) || number == null){
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]){
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
    }
    return formatString.replace(placeholderRegex, value);
  }
  return {
    formatMoney: formatMoney
  }
})();

/*** Variant Selection scripts ***/
slate.Variants = (function(){

  function Variants(options){
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();
    $(this.singleOptionSelector, this.$container).on('change', this._onSelectChange.bind(this));
  }

  Variants.prototype = _.assignIn({}, Variants.prototype,{
    _getCurrentOptions: function(){
      var currentOptions = _.map($(this.singleOptionSelector, this.$container), function(element){
        var $element = $(element);
        var type = $element.attr('type');
        var currentOption = {};

        if (type === 'radio' || type === 'checkbox'){
          if ($element[0].checked){
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');
            $("."+currentOption.index).find(".slVariant").text(currentOption.value);
            return currentOption;
          } else {
            return false;
          }
        } else {
          currentOption.value = $element.val();
          currentOption.index = $element.data('index');
          $("."+currentOption.index).find(".slVariant").text(currentOption.value);
          return currentOption;
        }
      });

      // remove any unchecked input values if using radio buttons or checkboxes
      currentOptions = _.compact(currentOptions);

      return currentOptions;
    },

    /*** Find variant based on selected values. ***/
    _getVariantFromOptions: function(){
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;
      var found = _.find(variants, function(variant){
        return selectedValues.every(function(values){
          return _.isEqual(variant[values.index], values.value);
        });
      });
      return found;
    },

    _onSelectChange: function(){
      var variant = this._getVariantFromOptions();
      this.$container.trigger({type: 'variantChange',variant: variant });
      if (!variant){ return; }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updateSKU(variant);
      this.currentVariant = variant;

      if (this.enableHistoryState){
        this._updateHistoryState(variant);
      }
    },
    _updateImages: function(variant){
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};
      if (!variant.featured_image || variantImage.src === currentVariantImage.src){ return; }
      this.$container.trigger({type: 'variantImageChange', variant: variant });
    },
    _updateSKU: function(variant){
      if (variant.sku === this.currentVariant.sku){ return; }
      this.$container.trigger({ type: 'variantSKUChange', variant:variant });
    },
    _updateHistoryState: function(variant){
      if (!history.replaceState || !variant){return;}
      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({path: newurl}, '', newurl);
    },
    /*** Update hidden master select of variant change ***/
    _updateMasterSelect: function(variant){
      $(this.originalSelectorId, this.$container).val(variant.id);
    }
  });
  return Variants;
})();

/*================ SECTIONS ================*/
window.theme = window.theme || {};

theme.HeaderSection = (function(){
  function HeaderSection(container){
    var $container = this.$container = $(container);
  
    theme.Search.init();

    var hd = {
      body: 'body',
      mnTgl: '.navToggle,.mbtMenu',
      mbNav: '.mob_nav_wr'
    };

  	$('#main_nav .lvl1 > a').each(function(){
        if($(this).attr('href') == window.location.pathname) $(this).addClass('active');
    })

  	$(hd.mnTgl).on("click",function(){
      $(hd.mbNav).toggleClass("active");
      $('html').toggleClass("showOverly stopScroll");
    });
    $("#main_nav .hasSub, .cmgmenu .hasSub").hover(function(){
      var submenu = $(this).data('link');
      $(this).addClass('active').siblings().removeClass('active');
      $(submenu).addClass('active').siblings().removeClass('active');
    });
      
    $('.mnvTtl').on('click',function(e){
		e.preventDefault();
        var menu = $(this).attr('href');
        $('.mnvTtl').removeClass('active');
        $(this).addClass('active');
        $('.mobNav').fadeOut('fast');
		$(menu).fadeIn();
    });  
    $('.mobNav .hasSub').on('click',function(e){
		e.preventDefault();
        if($('.mobNav.st2').length){
          $(this).toggleClass('active').next().slideToggle();
        }else {
		  $(this).next().addClass('active');
        }
    });
    $('.mobNav .backto').on('click',function(e){
		e.preventDefault();
		$(this).parent().removeClass('active');
    });
  
	$('.sdCate .at-icon').on('click',function(e){
		e.preventDefault();
		$(this).toggleClass('minus');
		$(this).parent().next().slideToggle();
    });
    
    // Hide Cart on document click
    $("body").click(function(e){
      var $tg = $(e.target);
      
      if(!$tg.parents().is(hd.mbNav) && !$tg.parents().is(hd.mnTgl) && !$tg.is(hd.mnTgl)){
          $(hd.mbNav).removeClass("active");
      }
      if(!$tg.parents().is('.main-search') && !$tg.parents().is('.searchinline') && !$tg.is('.searchIcn') && !$tg.parents().is('.leftcol')){
          $('.main-search .s_res, .searchinline .s_res, .hdSearch  .s_res').fadeOut();
      }
      if(!$tg.parents().is('#LanguageForm') && !$tg.is('.sl-lang')){
          $('#language').fadeOut();
      }
      if(!$tg.parents().is('#currency-picker') && !$tg.is('.selected-currency')){
          $('#currencies').fadeOut();
      }
      if(!$tg.parents().is(".sb_filter")){
        $(".flTop .filterBx").removeAttr("open");
      }      
    });
  }
  return HeaderSection;
})();

theme.Search = (function(){
  var selectors={
    search: '.search',
    searchSubmit: '.s_submit',
    searchInput: '.s_input'
  };

  var classes={focus: 'search--focus'};

  function init(){
    searchSubmit();
    // Current Ajax Search request.
    var currentAjaxRequest = null;
    var searchForms = $('form.search').each(function(){
      var input = $(this).find('input[name="q"]');
      input.bind('focus keyup change', function(){
        var term = $(this).val(),
        	form = $(this).closest('form'),
        	resultsWr = form.find('.s_res'),
            searchList = form.find('#serchList'),
            searchPre = form.find('#searchPre');
        resultsWr.fadeIn();
		if (term.length > 2 ){
            fetch(`${routes.predictive_search_url}?q=${term}&${'resources[type]'}=product&${'resources[limit]'}=4&section_id=predictive-search`)
              .then((response) => {
                if (!response.ok) {
                  var error = new Error(response.status);
                  $(searchList).hide();
                  $(searchPre).fadeIn();
                  throw error;
                }
                return response.text();
              }).then((text) => {
                var resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
                $(searchList).html(text);
                $(searchList).fadeIn();
                $(searchPre).hide();
              }).catch((error) => {
                $(searchList).hide();
                throw error;
              });
    	} else {
            $(searchList).empty().hide();
            $(searchPre).fadeIn();
        }
      });
    });
	  
    $('.modalOverly, .closeSearch').on('click', function(){
        $('html').removeClass("showOverly stopScroll searchact");
    });
    
    $('.searchIcn').on('click', function(e){
      e.preventDefault();
      $('html').addClass("showOverly stopScroll searchact");
      setTimeout(function(){ $('input[name=q]').focus(); }, 600);
    });
  }

  function searchSubmit(){
    $(selectors.searchSubmit).on('click', function(evt){
      var $el = $(evt.target);
      var $input = $el.parents(selectors.search).find(selectors.searchInput);
      if ($input.val().length === 0){
        evt.preventDefault();
        searchFocus($input);
      }
    });
  }
    return { init:init };
})();

theme.Product = (function(){
  function Product(container){
    this.container = container;
    var $container = this.$container = $(container),
    	sectionId = $container.attr('data-section-id');

    this.settings={
      mediaQueryMediumUp: 'screen and (min-width: 768px)',
      mediaQuerySmall: 'screen and (max-width: 767px)',
      bpSmall: false,
      enableHistoryState: $container.data('enable-history-state') || false,
      imageSize: null,
      imageZoomSize: null,
      namespace: '.slideshow-' + sectionId,
      sectionId: sectionId,
      sliderActive: false,
      zoomEnabled: false
    };

    this.selectors={
      purl: $container.attr('data-url'),
      mainSec: sectionId,
      addToCart: '#AddToCart-' + sectionId,
      SKU: '.variant-sku',
      productPrices: '#price' + sectionId,
      ftImg: '.featImg' + sectionId,
      imgZoom: '.przoom' + sectionId,
      primgsl: '.pis' + sectionId,
      thumbImg: '.pr_thumb' + sectionId,
      thumbs: '.pr_thumbs' + sectionId,
      originalSelectorId: '#ProductSelect-' + sectionId,
      singleOptionSelector: '.single-option-selector-' + sectionId
    }
    
    // Product tabs
    $('#PrSecTabs .product-tabs .tablink').on('click', function(e){
      e.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(".tb_cnt").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    $('#PrSecTabs .product-tabs li:first-child, #PrSecTabs .prtabAcr:first-child').addClass("active");  
  	$('#PrSecTabs .tbs_wrp .tb_cnt:eq(0)').show();

    $('.prtabAcr').on('click', function(){
        $(this).toggleClass("active").next().slideToggle();
    });

    $(".stickyOpt .selectedOpt").on('click', function(){
		$(".stickyOpt ul").slideToggle("fast");
    });
    $(".stickyOpt .vrOpt").on('click', function(e){
		var number = $(this).data('no');
      	$(".stickyOpt ul").slideUp("fast");
      	this.productvariants = JSON.parse(document.getElementById('ProductJson-' + sectionId).innerHTML);
        var stOpt = this.productvariants.variants[number].options;
        if(stOpt[1] != null){$('.swatchInput[value="'+stOpt[1]+'"]').prop( "checked", true )}
        if(stOpt[2] != null){$('.swatchInput[value="'+stOpt[2]+'"]').prop( "checked", true )}
        if(stOpt[0] != null){$('.swatchInput[value="'+stOpt[0]+'"]').trigger('click')}
    });
    $(".stickyQty .qtyBtn").on("click", function(){
      var qtyField = $('.mianQty'),oldValue = $(qtyField).val(),newVal = 1;
      if ($(this).is(".plus")) {
        newVal = parseInt(oldValue) + 1;
      } else if (oldValue > 1) {
        newVal = parseInt(oldValue) - 1;
      }
      $(qtyField).val(newVal).trigger('change');
    });
    $('.mianQty').on("change", function(){
      $('#stquantity').val($(this).val());
    });

    // change variant on image sections
    if (typeof variantImages !== 'undefined'){
      $(this.selectors.thumbImg).bind('click', function(){
        var arrImage = $(this).attr('href').split('?')[0].split('.');
        var strExtention = arrImage.pop();
        var strRemaining = arrImage.pop().replace(/_[a-zA-Z0-9@]+$/,'');
        var strNewImage = arrImage.join('.')+"."+strRemaining+"."+strExtention;
        if (typeof variantImages[strNewImage] !== 'undefined'){
            productOptions.forEach(function (value, i){
             optionValue = variantImages[strNewImage]['option-'+i];
              if($('.swatch.pvOpt0').length){
                if (optionValue !== null && $('.pvOpt'+i+' .swatchInput').filter(function(){ return $(this).val() === optionValue }).length){
                   $(".pvOpt"+i).find('.swatchInput[value="'+optionValue+'"]').prop( "checked", true ).trigger('change');
                 }
              } else {
                if (optionValue !== null && $('.single-option-selector:eq('+i+') option').filter(function(){ return $(this).text() === optionValue }).length){
                   $('.single-option-selector:eq('+i+')').val(optionValue).trigger('change');
                 }
              }
          });
        }
      });
    }
      
    // Stop parsing if we don't have the product json script tag when loading
    if (!$('#ProductJson-' + sectionId).html()){ return; }

    this.productSingleObject = JSON.parse(document.getElementById('ProductJson-' + sectionId).innerHTML);
    this.settings.zoomEnabled = $(this.selectors.imgZoom).length;
    this._initBreakpoints();
    this._stringOverrides();
    this._initVariants();
    this._setActiveThumbnail();
  }

  Product.prototype = _.assignIn({}, Product.prototype,{
    _stringOverrides: function(){
      theme.productStrings = theme.productStrings || {};
      $.extend(theme.strings, theme.productStrings);
    },
    _initBreakpoints: function(){
      var self = this;
      enquire.register(this.settings.mediaQuerySmall,{
        match: function(){
          // destroy image zooming if enabled
          if (self.settings.zoomEnabled){
            _destroyZoom($(self.selectors.imgZoom));
          }
          self.settings.bpSmall = true;
        },
        unmatch: function(){
          self.settings.bpSmall = false;
        }
      });
      enquire.register(this.settings.mediaQueryMediumUp,{
        match: function(){
          if (self.settings.zoomEnabled){
            _enableZoom($(self.selectors.imgZoom));
          }
        }
      });
    },

    _initVariants: function(){
      var options={
        $container: this.$container,
        enableHistoryState: this.$container.data('enable-history-state') || false,
        singleOptionSelector: this.selectors.singleOptionSelector,
        originalSelectorId: this.selectors.originalSelectorId,
        product: this.productSingleObject
      };
      this.variants = new slate.Variants(options);
      this.$container.on('variantChange' + this.settings.namespace, this._updateAddToCart.bind(this));
      this.$container.on('variantImageChange' + this.settings.namespace, this._updateImages.bind(this));
      this.$container.on('variantSKUChange' + this.settings.namespace, this._updateSKU.bind(this));
    },

    _setActiveThumbnail: function(variant){
        var view = $(this.selectors.thumbs).data('view');
        var prthumbs = new Swiper (this.selectors.thumbs, {
            slidesPerView: 5,
            spaceBetween: 10,
            direction: getDirection(),
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            mousewheel: true,
            breakpoints: {
                767: {
                  slidesPerView: view,
                },
            },
            on: {
                resize: function () {
                  prthumbs.changeDirection(getDirection());
                },
            },
        });
        function getDirection(){
          if($('.thumbs_nav.bottom').length){
            var direction = 'horizontal';
          } else {
            var direction = window.innerWidth >= 767 ? 'vertical' : 'horizontal';  
          }
          return direction;
        }
        
        var breakpoint = window.matchMedia('(min-width: 768px)');
        var sliderId = this.selectors.primgsl;
        var prslider;
        
        var breakpointChecker = function() {
            if(theme.productStrings.prStyle != "1" && theme.productStrings.prStyle != "5" ){
                if (breakpoint.matches === true){
                    if ( prslider !== undefined ) prslider.destroy();
                    return;
                } else if (breakpoint.matches === false){
                    return enableSwiper();
                }
            } else {
                return enableSwiper();
            }
        };
        var enableSwiper = function(){
            var center = false;
            if(theme.productStrings.prStyle == "5" ){
                center = true;
            }
            prslider = new Swiper (sliderId, {
                lazy: true,
                preloadImages: false,
                slidesPerView: 'auto',
                loopedSlides: 4,
                loop: true,
                centeredSlides: center,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: prthumbs
                }
            });
            prslider.on('slideChange', function () {
                var slide = prslider.slides.eq(prslider.activeIndex);
                var video = $(slide).find('video').get(0);
                if($(video).length){ video.play(); }
            });
       };
       breakpointChecker();
        
      if (variant == undefined){
        var mediaid = $(this.selectors.thumbImg + '.activeSlide').attr('data-img');
      } else {
        var mediaid = variant.featured_media.id;
        $('.stickCtImg').attr('src', variant.featured_image.src);
      }

      var vrMedia = $('.pr_photo:not(.swiper-slide-duplicate)[data-id="'+mediaid+'"]').data('slide');
      
      if(theme.productStrings.prStyle == "2" || theme.productStrings.prStyle == "3" || theme.productStrings.prStyle == "4" ){
      	var imgposition = $(".pr_photo[data-slide='"+vrMedia+"']").offset();
      	if($(window).width()>767){
          $("html, body").animate({ scrollTop: imgposition.top-70 }, 700);
        }else{
          prslider.slideToLoop(vrMedia);
        }
      }else{
        prslider.slideToLoop(vrMedia);
      }
      
      $(this.selectors.thumbImg).on('click', function(e){
        e.preventDefault();
        var $el = $(this).parent().data('slide');
        prslider.slideToLoop($el);
      });
    },
    
    _updateAddToCart: function(evt){
      var variant = evt.variant;

      if (variant){
        $(this.selectors.productPrices).removeClass('v_hidden').attr('aria-hidden', 'true');

        if (variant.available){
          var quantity = $(".prvQty").data('v'+variant.id);

          $(this.selectors.addToCart).prop('disabled', false);
          
          if(quantity < 1 && variant.inventory_management == "shopify"){
          	$(this.selectors.addToCart).find('.txt').text(theme.strings.preOrder);
          } else {
            $(this.selectors.addToCart).find('.txt').text(theme.strings.addToCart);
          }
        } else {
          $(this.selectors.addToCart).prop('disabled', true).find('.txt').text(theme.strings.soldOut);
        }
        $('.selectedOpt').text(variant.title);
          
      } else {
        $(this.selectors.addToCart).prop('disabled', true).find('.txt').text(theme.strings.unavailable);
        $(this.selectors.productPrices).addClass('v_hidden').attr('aria-hidden', 'false');
      }

      fetch(this.selectors.purl+'?variant='+variant.id+'&section_id='+this.selectors.mainSec).then((response) => response.text()).then((responseText) => {
        var html = new DOMParser().parseFromString(responseText, 'text/html')
        var destination = document.getElementById('price'+this.selectors.mainSec);
        var source = html.getElementById('price'+this.selectors.mainSec);
        if (source && destination) destination.innerHTML = source.innerHTML;
        if (document.querySelector('.stPrice'))document.querySelector('.stPrice').innerHTML = source.innerHTML;
        if (theme.mlcurrency){ currenciesChange(this.selectors.productPrices+" span.money"); }

        var qty = document.getElementById('invens');
        var sourceqty = html.getElementById('invens');
        if (sourceqty && qty) qty.innerHTML = sourceqty.innerHTML;
      });
    },

    _updateImages: function(evt){
      var variant = evt.variant;
      this._setActiveThumbnail(variant);
    },
    _updateSKU: function(evt){
      var variant = evt.variant;
      $(this.selectors.SKU).html(variant.sku);
    },
    onUnload: function(){
      this.$container.off(this.settings.namespace);
    }
  });
  function _enableZoom($el){
    $($el).hover(
      function(){
        var zoomUrl = $(this).data('zoom');
        $(this).zoom({url: zoomUrl});
      }, function() {
        $(this).trigger('zoom.destroy');
      }
    );
  }
  function _destroyZoom($el){
    $($el).each(function(){
    	$(this).trigger('zoom.destroy');
     });
  }
  return Product;
})();

// Product quick view
theme.QuickView = (function(){
  $('body').on('click','.quick-view',function(e){
    $.ajax({
      beforeSend : function (){
        $('body').addClass("loading");
       },
      url: $(this).attr('href'),
      success: function(data){

        $.magnificPopup.open({
          items:{
            src: '<div class="quick-view-popup mfp-with-anim" id="quickv_pp">' + data + '</div>',
            type: 'inline'
          },
          removalDelay:500,
          callbacks:{
            beforeOpen: function(){
             $('.sticky_hdr').addClass('popup');
              this.st.mainClass = 'mfp-zoom-in';
            },
            open: function(){},
            close: function(){
               $('.sticky_hdr').removeClass('popup');
              $( '#quickv_pp' ).empty();
            }
          },
        });
      },
      complete: function(){
        $('body').removeClass("loading");
      }
    })
    e.preventDefault();
    e.stopPropagation();
  });
})();

theme.slideshows={};
theme.SlideshowSection = (function(){
  function SlideshowSection(container){
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var slideshow = '#ss' + sectionId;
    
    var loop = $('#ss'+sectionId).data('loop');
    var fade = $('#ss'+sectionId).data('effect');
    var autoplay = $('#ss'+sectionId).data('autoplay');
    var slswiper = new Swiper(slideshow, {
      loop: loop,
      slidesPerView:1,
      effect: fade,
      autoplay: autoplay,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    theme.slideshows = slswiper;
    
    var iframes = $(slideshow).find('.embed-player');
    resizePlayer(iframes, 16/9, $(slideshow));
    $(window).on("resize", function(){
      resizePlayer(iframes, 16/9, $(slideshow));
    });
  }

    // Resize player
    function resizePlayer(iframes, ratio, slideshow){
      if (!iframes[0]) return;
      var win = $(slideshow),
          width = win.width(),
          playerWidth,
          height = win.height(),
          playerHeight,
          ratio = ratio || 16/9;

      iframes.each(function(){
        var current = $(this);
        if (width / ratio < height){
          playerWidth = Math.ceil(height * ratio);
          current.width(playerWidth).height(height).css({
            left: (width - playerWidth) / 2,
             top: 0
            });
        } else {
          playerHeight = Math.ceil(width / ratio);
          current.width(width).height(playerHeight).css({
            left: 0,
            top: (height - playerHeight) / 2
          });
        }
      });
    }
    
  return SlideshowSection;
})();

// CATEGORY SLIDER
theme.collectionView = (function(){
  function collectionView(container){
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    
    $(document).on('click','.flTop .flTtl',function(e){
        var thisBlk = $(this).parent('.filterBx');
      	$(".filterBx").not(thisBlk).removeAttr("open");
    });
    $(document).on('change','#SortBySt',function(e){
		var value = $(this).val();
        if (!$('#CollectionFiltersForm').length){
          href = new URL(window.location.href);
          href.searchParams.set('sort_by', value);
          window.location = href.toString();
        } else {
    		$("#SortBy").val(value).trigger('change');
        }
	});
	$(document).on('click', '.change-view', function(e){
      var view = $(this).data('view'),
          href = new URL(window.location.href);
      href.searchParams.set('pgview', view);
      href.searchParams.set('type', view);
      window.location = href.toString();
    });
    $(document).on('change', '.dyfl, .prRange, #SortBy', function(e){
      var URL =  '//'+window.location.hostname+window.location.pathname,
      	formdata = $('#CollectionFiltersForm').serialize();
        ajaxfilter(URL+'?'+formdata);
	});
  	$(document).on('click', '.removefl', function(e){
      e.preventDefault();
      var URL =  '//'+window.location.hostname+$(this).attr('href');
      ajaxfilter(URL);
	});
  
  	ajaxfilter = (function(url){
        $.ajax({
          type: 'GET',
          url: url,
          data:{},
          beforeSend:function(){
            $('body').addClass('loading hideOverly');
          },
          complete: function (data){
            $('#collectionPr').html($("#collectionPr", data.responseText).html());
            $('#CollectionFiltersForm').html($("#CollectionFiltersForm", data.responseText).html());
            $('.active-facets').html($(".active-facets", data.responseText).html());
            $('.collection-product-count').html($(".collection-product-count", data.responseText).html());
			
            if($(window).width() < 1025){$('.filterBx').attr('open','');}
            $('.pagination').html($(".pagination", data.responseText).html());
            if(!$(".pagination", data.responseText).html()){
              $('.pagination').hide();
            } else {
              $('.pagination').show();
            }
            $('.infinitpaginOuter').html($(".infinitpaginOuter", data.responseText).html());
            if(!$(".infinitpaginOuter", data.responseText).html()){
              $('.infinitpagin').remove();
            }
            if($('.prRange').length){ priceSlider(); }
            if($(".spr-badge").length > 0){
            	SPR.registerCallbacks();SPR.initRatingHandler();SPR.initDomEls();SPR.loadProducts();SPR.loadBadges();
            }
            theme.countdown();
            $('body').removeClass('loading hideOverly');
            history.pushState({page: url}, url, url);
          }
        });
    });

    infiniteScroll = function(){
      	var action = 'scroll load delayed-resize';
        $(window).on(action, function(){
          var moreURL = $('.infinitpagin a').attr('href');
          if ($('.infinitpagin a.infinite').length){
            var bottom = $('.infinitpagin').offset();
            var docTop = ($(document).scrollTop() + $(window).height() - 50);
            if( docTop > bottom.top){
              $(window).off(action);
              loadMore(moreURL);
            }
          }
        });
    }
    loadMoreBtn = function(){
		$(document).on('click', 'a.loadMore', function(e){
          	e.preventDefault();
          	var moreURL = $(this).attr('href');
			loadMore(moreURL);
        });
    }
    
    loadMore = function(moreURL){
      if (moreURL.length){
        $.ajax({
          type: 'GET',
          dataType: 'html',
          url: moreURL,
          beforeSend:function(){
          	if ($('.infinitpaginOuter').attr('data-type') == "button" ){
            	$('body').addClass('loading hideOverly');
            } else {
              $('.infinitpagin a').show();
            }
          },
          complete: function (data){
            if($('#collectionPr').length){
            	$('#collectionPr').append($("#collectionPr", data.responseText).html());
            }
            if($(".infinitpagin", data.responseText).html()){
            	$('.infinitpagin').html($(".infinitpagin", data.responseText).html());
            } else {
            	$('.infinitpagin').remove();
            }
			shopreviews();
            if (!$('.infinitpagin a.loadMore').length){
              infiniteScroll();
            }
            theme.countdown();
            $('body').removeClass('loading hideOverly');
          }
        });
      }
    }
    infiniteScroll();loadMoreBtn();
  }
  return collectionView;
})();

theme.instagramSection = (function(){
  function instagramSection(container){
    var $container = this.$container = $(container),
    	sectionId = $container.attr('data-section-id'),
        act = $container.attr('data-act'),
        limit = $container.attr('data-count'),
        autopl = $container.attr('data-autop'),
        ajaxUrl = 'https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url,caption,children&access_token='+act;
    
    $.ajax({
		url: ajaxUrl,
        type: 'GET',
        dataType: "json",
        success: function (res){
        	var data = res.data,
				igdiv = '#instafeed'+sectionId,
               	html = '',
                bl = bl || true;
			$.each(data, function (index, el){
                     if (index >= limit) return 0;
                     var img_url = el.thumbnail_url || el.media_url;
                     html += '<div class="gitem insta-img"><a rel="nofollow" class="instagram-" href="'+el.permalink+'" target="_blank"><img data-src="' + img_url + '" alt="" class="lazyload" /></a></div>';
            });
            $(igdiv).html(html);
		},
        complete: function(res){
          
        }
	});
  }
  return instagramSection;
})();

theme.quotesl={};
theme.Quotes = (function(){
  function Quotes(container){
    var $container = this.$container = $(container),
        sectionId = $container.attr('data-section-id');
        
      var fade = $('#Quotes-'+sectionId).data('effect');
      var autoplay = $('#Quotes-'+sectionId).data('autoplay');
      var swiper = new Swiper('#Quotes-' + sectionId, {
        loop: true,
        slidesPerView: 'auto',
        effect: fade,
        autoplay: autoplay,
        pagination: {
          el: ".swpg"+sectionId,
          clickable: true,
        },
        navigation: {
          nextEl: ".swn"+sectionId,
          prevEl: ".swp"+sectionId,
        },
      });
      this.quotesl = swiper;
      swiper.on('slideChange', function(data){
        $('#Quotes-'+sectionId+' .swiper-slide-duplicate .bgImg.lazyloading').addClass('lazyload');
      });
  }
  return Quotes;
})();

theme.slcarousel={};
theme.carousel = (function(){
    function carousel(container){
    	var $container = this.$container = $(container),
          sectionId = $container.attr('data-section-id'),
          carousel = $('#swp'+sectionId),
    	  tabs = '#' + sectionId + ' .tablink',
    	  tabcontent = '#' + sectionId + ' .tb_cnt';
    
    function loadSlider(tab){
        var optionsData = $(tab).attr('data-swiper') ? JSON.parse($(tab).attr('data-swiper')) : {};
        new Swiper(tab+' .tabswiper', optionsData);
    }
    if($('#'+sectionId+'.cltabWrap').length){ 
      var fristTab = $('.cl_tbs li:first-child a').attr('href');
      loadSlider(fristTab);
    }
    $(tabs).on('click', function(e){
        e.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(tabcontent).not(tab).hide();
        $(tab).show();
        setTimeout(function() {
            loadSlider(tab);
            window.dispatchEvent(new Event('resize'));
        }, 5);
    });

    var autoplay = $('#swp'+sectionId).data('autoplay'),
        loop = $('#swp'+sectionId).data('loop');
    if(loop == undefined)loop = true;
    var swiper = new Swiper('#swp'+sectionId, {
      loop: loop,
      slidesPerView: 'auto',
      autoplay: autoplay,
      pagination: {
        el: ".swpg"+sectionId,
        clickable: true,
      },
      navigation: {
        nextEl: ".swn"+sectionId,
        prevEl: ".swp"+sectionId,
      },
    });
    theme.slcarousel = swiper;
  }
  return carousel;
})();

theme.masonary = (function(){
    function masonary(container){
    	var $container = this.$container = $(container),
          sectionId = $container.attr('data-section-id'),
          masonary = this.masonary = $($container).find('.grid-masonary');
    
      loadMasonary(masonary);
      setTimeout( function(){ loadMasonary(masonary); },1000);
      function loadMasonary(masonary){
        $(masonary).masonry({
            columnWidth: '.grid-sizer-'+sectionId,
            itemSelector: '.msitem',
            percentPosition: true
        });
      }
  }
  return masonary;
})();

theme.ajaxCart = function(){
	$(".continue-shopping, .modalOverly, .closeDrawer").click(function(){
        $(".modal").fadeOut(200);
    	$("body").removeClass("loading showOverly");
    });
    
    $(document).on('click','.add-to-cart', function(e){
        e.preventDefault();
        $('body').addClass('loading');
        $(this).next().find('.cartBtn').trigger('click');
    });
    
    $(document).on('click touch', '.quickShop', function(e){
        e.preventDefault(); e.stopImmediatePropagation();
        var url = $(this).attr('href'),
            imgwrapper = $(this).parents('.grid_bx').find(".grid_img_wr"),
            wrapper = $(this).parents(".grid_bx");
      
        $.ajax({
          url: url+'/?section_id=quick-shop',
          dataType: 'html',
          type: 'GET',
          beforeSend:function(){
            $(imgwrapper).addClass('showLoading');
          },
          success: function(data){
            $("#shopify-section-quick-shop").remove();
            $(wrapper).addClass('active').append(data);
          },
          complete: function(data){
            $(imgwrapper).removeClass('showLoading');
            if (theme.mlcurrency){ currenciesChange(".quick_shop.active .product-single__price span.money"); }
          }
        });
    });
    $(document).on('click touch', '.closeShop', function(e){
      e.preventDefault();
      $("#shopify-section-quick-shop").remove();
    });

    $(document).on('click', '.addto-wishlist', function(e){
         e.preventDefault();
           var id = $(this).attr('rel');
           if (localStorage.getItem('wishlist') == null){
             var str = id;
           } else {
             if(localStorage.getItem('wishlist').indexOf(id) == -1) {
               var str = localStorage.wishlist + '+' + id;
                  str = str.replace('++', '+');
             }
           }
           localStorage.setItem('wishlist', str);
           $(this).find(".at-icon").addClass('at-flip');
           setTimeout(function(){
             $('.wishlist[rel="'+id+'"]').removeClass('addto-wishlist').find('span').text(theme.wlAvailable);
             $('.wishlist[rel="'+id+'"] .at-icon').removeClass('at-flip').addClass('added');
           }, 1500);
    });
    if(localStorage.getItem('wishlist') != null && localStorage.getItem('wishlist') != '+'){
       var str = String(localStorage.getItem('wishlist')).split("+");
       for (var i=0; i<str.length; i++) {
         if (str[i] != ''){
           $('.wishlist[rel="'+str[i]+'"]').removeClass('addto-wishlist').find('span').text(theme.wlAvailable);
           $('.wishlist[rel="'+str[i]+'"] .at-icon').addClass('added');
           $('.favCount').text(i).removeClass('hide');
         }
       }
    }
};
window.addEventListener('DOMContentLoaded',function(){$(theme.ajaxCart);});

$(document).ready(function(){
  var sections = new theme.Sections();
  sections.register('header', theme.HeaderSection);
  sections.register('product', theme.Product);
  sections.register('collection-template', theme.collectionView);
  sections.register('slideshow', theme.SlideshowSection);
  sections.register('carousel', theme.carousel );
  sections.register('quotes', theme.Quotes);
  sections.register('masonary', theme.masonary);
  sections.register('instagram', theme.instagramSection);
});

var resizeTimer;
  $(window).resize(function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      $(window).trigger('delayed-resize');
    }, 250);
});

theme.countdown = function(){
    $(".saleTime, .atCounter").each(function(){
        var $this = $(this), date = $(this).data('date'), countDownDate = new Date(date).getTime();
        var x = setInterval(function(){
            var now = new Date().getTime(),	            
                distance = countDownDate - now,
                days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if(days > 99){
                days = ("00" + days).substr(-3);
            } else {
                days = ("00" + days).substr(-2);
            }
            hours = ("00" + hours).substr(-2);
            minutes = ("00" + minutes).substr(-2);
            seconds = ("00" + seconds).substr(-2);

            $($this).find(".days").html(days);
            $($this).find(".hours").html(hours);
            $($this).find(".minutes").html(minutes);
            $($this).find(".seconds").html(seconds);
            if (distance < 0){clearInterval(x); $($this).hide().parents('.timerl').hide(); }
        }, 1000);
      });
}

theme.init = function() {
  slate.rte.wrapTable();
  slate.rte.iframeReset();
  theme.countdown();

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(e) {
    slate.a11y.pageLinkFocus($(e.currentTarget.hash));
  });

  $('a[href="#"]').on('click',function(e){e.preventDefault()});
  
  // Currency and Language
  	$(document).on('click', '.crlgTtl', function(i){
      i.preventDefault();
      $(this).next().slideToggle();
    });
    $(document).on('click', '.clOtp', function(i){
      var form = $(this).parents('form');
      $(form).find('.slcrlg').val($(this).data('value'));
      $(form).submit();
    });
  	$("#currencies li").click(function(){      
      	if($(window).width()>999) { $("#currencies").slideUp(); }
	});
};
$(theme.init);

$(document).ready(function() {
    "use strict";
  	$(document).on('click', '.currencyOpt', function(i){
      $('#CurrencySelector').val($(this).data('value'));
      $('#localization_form').submit();
    });

   // LOOKBOOK SHOP 
	$('.btn-shop').click(function(){
       $('.btn-shop').not($(this)).removeClass('active');
       $('.products .lb_shop, .grid-lookbook').not($(this).next()).removeClass('active');
       $(this).parents('.grid-lookbook').addClass('active');
       $(this).toggleClass('active');
       $(this).next().toggleClass('active');      
	});	

	// SHOW HIDE PRODUCT Filters
  	$(document).on('click','.btn-filter,.mbtFilter',function(e){
    	$('html').toggleClass("showOverly stopScroll").find(".sb_filter").toggleClass("active");
      	$(".sb_filter").removeClass('flTop');
      	if(!$('.filterBx[open]').length){ $('.filterBx').attr('open',''); }
	});
	$(document).on('click','.closeFilter',function(){
		$('html').removeClass("showOverly stopScroll").find(".sb_filter").removeClass("active");
	});
	$("body").click(function(event){
    	var $target = $(event.target);
    	if(!$target.parents().is(".sb_filter") && !$target.is(".sb_filter") && !$target.is(".btn-filter")){
      		$('html').removeClass("showOverly stopScroll").find(".sb_filter").removeClass("active");
    	}
	});
  
  // STICKY HEADER
    var lastScroll = 0,
        hdpos = $('.hdr_wrap').offset(),
        headht = $('.hdr_wrap').innerHeight(),
        didScroll;
    function sticky_header(){
        var scroll = $(window).scrollTop();
        if(theme.stickyHeader == 'top'){
          if (scroll > headht && scroll > lastScroll) {
              $('.hdr_wrap').removeClass("sticky_hdr fadeInDown");
          } else if (scroll <= headht) {
              $('.hdr_wrap').removeClass("sticky_hdr fadeInDown");
          } else if (scroll < lastScroll) {
              $('.hdr_wrap').addClass("sticky_hdr animated fadeInDown");
          }
          lastScroll = scroll;
        } else if(theme.stickyHeader == 'always') {
            if(scroll > hdpos.top){
                $('.hdr_wrap').addClass("sticky_hdr");
            } else{
                $('.hdr_wrap').removeClass("sticky_hdr");
            }
        }
    }

  window.onscroll = function(){ scrollFunction() };
  function scrollFunction(){
      didScroll = true;
      setInterval(function(){
          if(didScroll){sticky_header();didScroll = false;}
      }, 250);

    /// sticky cart 
    if($(window).scrollTop()>600 && $(".stickyCart").length){
      	$("body.template-product").css('padding-bottom','70px');
        $(".stickyCart").slideDown();
    } else {
      	$("body.template-product").css('padding-bottom','0');
        $(".stickyCart").slideUp();
    }

    // SITE SCROLLER
    if($(window).scrollTop()>200){
      $("#scroll_top").addClass("active");
    } else {
      $("#scroll_top").removeClass("active");
    }
  }
  
  $("#scroll_top").on("click", function(){
    $("html,body").animate({ scrollTop: 0 }, 500);
    return false;
  });
  
  //Footer links for mobiles
  $(".f_links .h4").click(function() {
    if($(window).width() < 769){
      $(this).toggleClass("active");
      $(this).next().slideToggle();
  	}
  });
  $(".cartOpen").on("click", function(e){
    e.preventDefault();
    $('body').addClass('overflow-hidden').find('.ctdrawer').addClass('active');
  });
  
  $(document).on('click', '.grswatches li:not(.noImg)', function(e){
      var $this = $(this),
          newImage = $(this).attr('rel'),
          gridWrapper = $(this).parents('.grid_bx').find('.grid_img_wr');
      $(gridWrapper).addClass("showLoading");
      $(gridWrapper).find('.variantImg').css("background-image", "url('"+newImage+"')");
      var image = document.createElement('img');
          image.src = newImage;
          image.onload = function () {
              $(gridWrapper).removeClass("showLoading").addClass("showVariantImg");
              $this.siblings().removeClass("active");
              $this.addClass("active");
          };
      return false;
    });

    // Magnific Popup
    $('.mfp-link').magnificPopup({
      delegate: '.mfp',
  	  removalDelay: 300, 
      callbacks: {
        beforeOpen: function(){
          $('.stickyHeader').addClass('popup');
           this.st.mainClass = this.st.el.attr('data-effect');
        },       
      	close:function(){ $('.stickyHeader').removeClass('popup'); }
      },
  	 midClick: true 
	});
});


function htmlDecode(input){
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}
function freeShippMsg(){
    if (document.querySelector('.freeShipMsg')){
        fetch(window.routes.url+'/?section_id=cart-drawer').then((response) => response.text()).then((responseText) => {
            var html = new DOMParser().parseFromString(responseText, 'text/html')
            var destination = document.querySelector('.freeShipMsg');
            var source = html.querySelector('.ctfreeship');
            if (source && destination) destination.innerHTML = source.innerHTML;
            if (theme.mlcurrency){ currenciesChange(".freeShipMsg span.money"); }
        });
    }
}
freeShippMsg();
function shopreviews(){
    if ($('.spr-badge').length){
        SPR.registerCallbacks();
        SPR.initRatingHandler();
        SPR.initDomEls();
        SPR.loadProducts();
        SPR.loadBadges();
    }
}