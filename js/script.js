jQuery(function ($) {
    $(document).ready(function () {
        if($.fn.owlCarousel){
            var $owl = $('.owl-carousel').owlCarousel({
                items: 1,
                margin: 0,
                loop: false,
                center: true,
                stagePadding: 0,
                nav: false,
                lazyLoad: true,
                autoHeight : false,
                dots: false,
                // animateOut: 'fadeOut',
                // animateIn: 'fadeIn',
                // slideSpeed: 3000,
                // paginationSpeed: 3000,
                // mouseDrag: false,
                // touchDrag: false,
                // pullDrag: false,
                // freeDrag: false,
            });
        }
       
        var owl = $('.owl-carousel');
        $('.question-wrap input[type=radio]').change(function(e){
            var thisEl = this;
            setTimeout(function(){ pickTheAnswer(thisEl); }, 600);
        });
        $('.question-wrap input[type=checkbox]').change(function(e){
            var thisEl = this;
            $(thisEl).parents('.question-wrap').addClass('choosen');
            $(thisEl).parents('.question-wrap').find('.btn-next').fadeIn(300);
            $(thisEl).parents('.owl-item').next().find('.question-wrap').removeClass('hidden');
        });
        $('.question-wrap').on('input', 'textarea', function(e){
            var thisEl = this;
            $(thisEl).parents('.question-wrap').addClass('choosen');
            $(thisEl).parents('.question-wrap').find('.btn-next').fadeIn(300);
            $(thisEl).parents('.owl-item').next().find('.question-wrap').removeClass('hidden')
        });
        $('.btn-next').click(function(e){
            pickTheAnswer(this);
        });
        function pickTheAnswer(thisEl){
            $(thisEl).parents('.question-wrap').addClass('choosen');
            let index = parseInt($(thisEl).parents('.question-wrap').attr('data-index')) + 1;
            let mainValue = parseInt($('.main-question').find('input:checked').attr('data-value'));
            if(mainValue){
                if(mainValue !== 3 && mainValue !== 4){
                    if(index > 0 && index < 8 ){
                        owl.find('.owl-item:nth-child(10)').find('.question-wrap').removeClass('hidden')
                        $('.owl-carousel').trigger('to.owl.carousel', [8, 300 ,true])
                    }
                }
            }
            if($(thisEl).attr('data-hideNext')){
                $('.owl-carousel').trigger('to.owl.carousel', [index, 300 ,true])
                owl.find('.owl-item:nth-child(' + ++index + ')').find('.question-wrap').removeClass('hidden')
            } else {
                owl.trigger('next.owl.carousel');
                owl.find('.owl-item:nth-child(' + index + ')').find('.question-wrap').removeClass('hidden')
            }
        }


        $('.question-wrap').on('change', 'input[type=radio]', function(e){
            let inputs = $(this).parents('.question-wrap').find('input');
            let checked = $(this).parents('.question-wrap').find('input:checked');
            if(checked.attr('data-hideNext')){
                $(this).parents('.owl-item').next().find('.question-wrap').addClass('hidden');
            } else {
                for (let i = 0; i < inputs.length; i++) {
                    if($(inputs[i]).attr('data-hideNext')){
                        if($(inputs[i]).is(':checked')){
                            $(this).parents('.owl-item').next().find('.question-wrap').addClass('hidden');
                        }
                        else {
                            if($(this).attr('data-hideNext') !== $(inputs[i]).attr('data-hidden')){
                                $(this).parents('.owl-item').next().find('.question-wrap').removeClass('hidden');
                            }
                        }
                    }
                }
            }
            $owl.trigger('refresh.owl.carousel');
        });


        owl.on('dragged.owl.carousel', function(event) {
            let currentItem = event.item.index;
            let mainValue = parseInt($('.main-question').find('input:checked').attr('data-value'));
            let prevItem = currentItem - 1;
            let prevOwl = event.relatedTarget['_items'][prevItem];
            let stopScrooling = false;
            if(mainValue){
                if(mainValue !== 3 && mainValue !== 4){
                    if(currentItem > 0 && currentItem < 9){
                        if(event.relatedTarget['_drag']['direction'] === 'left'){
                            owl.trigger('to.owl.carousel', [9, 0]);
                            stopScrooling = true;
                        }
                        if(event.relatedTarget['_drag']['direction'] === 'right'){
                            owl.trigger('to.owl.carousel', [0, 0]);
                            stopScrooling = true;
                        }
                    }
                }
            }
            if(!stopScrooling){
                if(event.relatedTarget['_drag']['direction'] === 'left'){
                    let prevItem = currentItem - 1;
                    let prevOwl = event.relatedTarget['_items'][prevItem];
                    if($(prevOwl).find('.choosen').length === 0){
                        owl.trigger('to.owl.carousel', [prevItem, 300]);
                    }
                    else {
                        let currentOwl = owl.find('.owl-item:nth-child(' + ++currentItem + ')');
                        let nextItem = currentItem + 1;
                        if($(currentOwl).find('.question-wrap').hasClass('hidden')){
                            owl.trigger('to.owl.carousel', [nextItem, 300]);
                        }
                    }
                }
                if(event.relatedTarget['_drag']['direction'] === 'right'){
                    let nextItem = currentItem - 1;
                    let prevItem = currentItem + 1;
                    let currentOwl = owl.find('.owl-item:nth-child(' + ++currentItem + ')');
                    if($(currentOwl).find('.question-wrap').hasClass('hidden')){
                        owl.trigger('to.owl.carousel', [nextItem, 300]);
                    }
                }
            }
            console.log($('.owl-item.active').find('.question-wrap').hasClass('hidden'));
            if($('.owl-item.active').find('.question-wrap').hasClass('hidden')){
                owl.trigger('to.owl.carousel', [currentItem, 300]);
            }
        });
        owl.on('translated.owl.carousel', function(event) {
            let currentItem = event.relatedTarget['_current'];
            let sum =  event.item.count;
            progresLine( sum, currentItem);
        });
        function progresLine(sum, currentItem){
            width = (100 / sum)*currentItem + '%';
            $('.progress-line').css('width', width);
        }
        $('.show-hiden').change(function(e){
            if($(this).is(':checked')){
                $($(this).attr('data-hidden')).fadeIn(300);
            } else {
                $($(this).attr('data-hidden')).fadeOut(300);
            }
        });

        $('.range-container').on('touchstart mousedown', function(e) {
            // Prevent carousel swipe
            e.stopPropagation();
        })

        
        $("textarea").each(function () {
            this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
        }).on("input", function () {
            this.style.height = "auto";
            this.style.height = (this.scrollHeight) + "px";
        });

        $('.contact-list').on('change', 'input', function(e){
            if($(this).parents('.owl-carousel').length === 0){
                $(this).parents('.contact-list').find('.btn-next').html('Надіслати');
            } else {
                $(this).parents('.question-wrap').find('.btn-next').html('Надіслати');
            }
        });
        $('.contact-list').on('change', 'textarea', function(e){
            if($(this).parents('.owl-carousel').length === 0){
                $(this).parents('.contact-list').find('.btn-next').html('Надіслати');
            } else {
                $(this).parents('.question-wrap').find('.btn-next').html('Надіслати');
            }
        })

    });
});