(function($){

    $.fn.ageGate = function(settings)
    {

        var that = this,
            config = {
                'leagal_age'            : 18,
                'required_fields_msg'   : 'All Fields are mandatory',
                'underage_msg'          : 'You have to be over 18 to enter this site',
                'underage_url'          : 'http://google.com',
                'site_url'              : 'index.html',
                'ageGate_url'           : 'agegate.html',
                'logo'                  : 'images/logos/logo.png',
                'title'                 : 'AGE GATE',
                'subtitle_1'            : 'You have to be over 18 to access this site',
                'subtitle_2'            : 'Please enter your Date of Birth',
                'formAction'            : '',
                'placeholderDay'        : 'DD',
                'placeholderMonth'      : 'MM',
                'placeholderYear'       : 'YYYY',
                'selectTitle'           : 'Select a Option',
                'selectOptions'         : {'op1':'Option 1','op2':'Option 2','op3':'Option 3','op4':'Option 4'},
                'checkBoxLabel'         : 'Remember me the next time',
                'submitBtnTxt'          : 'ENTER SITE',
                'footerMsg'             : 'copyright © year brand name. all rights reserved',
            };
        if (settings)
        {
            $.extend(config, settings);
        }
 
        // Build the container and html structure
        that.setHtml = function()
        {
            var structure   = '<div id="age_gate">';
                structure  += '<div id="age_gate_logo">';
                structure  += '<img src="'+config.logo+'" alt="Logo">';
                structure  += '</div>';
                structure  += '<div id="age_gate_container">';
                structure  += '<div id="age_gate_widget">';
                structure  += '<div id="age_checker_header_message">';
                structure  += '<h1>'+config.title+'</h1>';
                structure  += '<p>'+config.subtitle_1+'</p>';
                structure  += '<p>'+config.subtitle_2+'</p>';
                structure  += '</div>';
                structure  += '<div id="age_gate_error_message"> </div>';
                structure  += '<form id="age_gate_form" action="'+config.formAction+'" method="post">';
                structure  += '<div class="form-item form-type-textfield form-item-day">';
                structure  += '<input pattern="[0-9]*" tabindex="1" placeholder="'+config.placeholderDay+'" id="age_gate_day" name="day" value="" size="2" maxlength="2" class="required numeric" type="number">';
                structure  += '</div>';
                structure  += '<div class="form-item form-type-textfield form-item-month">';
                structure  += '<input pattern="[0-9]*" tabindex="2" placeholder="'+config.placeholderMonth+'" id="age_gate_month" name="month" value="" size="2" maxlength="2" class="required numeric" type="number">';
                structure  += '</div>';
                structure  += '<div class="form-item form-type-textfield form-item-year">';
                structure  += '<input pattern="[0-9]*" tabindex="3" placeholder="'+config.placeholderYear+'" id="age_gate_year" name="year" value="" size="4" maxlength="4" class="required numeric" type="number">';
                structure  += '</div>';
                structure  += '<div class="form-item form-type-select form-item-country">';
                structure  += '<select class="form-select required" tabindex="4" name="list_of_options">';
                structure  += '<option value="">'+config.selectTitle+'</option>';
                structure  += '</select>';
                structure  += '</div>';
                structure  += '<div class="form-item form-type-checkbox form-item-remember-me">';
                structure  += '<input id="age_checker_remember_me" class="form-checkbox" name="remember_me" value="1"  type="checkbox">';  
                structure  += '<label tabindex="5" class="option" for="age_checker_remember_me">'+config.checkBoxLabel+'</label>';
                structure  += '</div>';
                structure  += '<input type="submit" tabindex="6"  value="'+config.submitBtnTxt+'">';
                structure  += '</form>';
                structure  += '</div>';
                structure  += '</div>';
                structure  += '<div id="age_gate_footer">';
                structure  += '<p>'+config.footerMsg+'</p>';
                structure  += '</div></div>';

            return structure;
        }

        //SetCookie
        that.setCookie = function(cname, cvalue, exdays) 
        {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = 'expires='+d.toUTCString();
            document.cookie = cname + '=' + cvalue + '; ' + expires;
        }

        //Get Cookie
        that.getCookie =function(cname) 
        {
            var name = cname + '=';
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        //underage 
        that.illegalAge = function()
        {
            if(that.hasClass('page-age-gate'))
            {
                
                $('#age_gate_error_message').html('<p>'+config.underage_msg+'</p>');

                $('form#age_gate_form').remove();

                error = true;
            }

            setCookie('age_gate','underage', 2);

            setTimeout(function(){
                window.location.href = config.underage_url;
            }, 1000);

            return;
        }

        //Set Local Storage for Remeber me Checked or Unchecked option
        that.remeberMe = function()
        {

            var checked = $('#age_checker_remember_me').is(':checked');

            if(checked) {
            
               localStorage.setItem('remember_me','1');
            
            } else {
            
               localStorage.setItem('remember_me','0');
            
            }
        }

        //Enable autotab
        that.autoTab = function(el)
        {

            if(el.attr('maxlength') == undefined)
            {
                maxlength = el.data('placeholder-maxlength');
            }
            else
            {
                maxlength = el.attr('maxlength');
            }   

            if(el.val().length == maxlength)
            {
                tabindex = parseInt(el.attr('tabindex'))+1;

                $('[tabindex=' + tabindex + ']').focus();
            }

        }
        //Age Calculation
        that.AgeCheck = function(day, month, year)
        {
        
            dob   = new Date(year+'-'+month+'-'+day),
            
            today = new Date(),
            
            age   = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));

            return age;
        }

        that.setSelectOptions = function()
        {
            $.each( config.selectOptions, function( key, value ) {
                $('#age_gate_form select').append('<option value="'+key+'">'+value+'</option>');
            });
        }

        //Chek remember me 
        that.checkRememberMe = function()
        {
            if(localStorage.getItem('remember_me') && localStorage.getItem('remember_me')==='1')
            {
                window.location.href = config.site_url;
            }  
        }

        //Form reset
        that.formReset = function()
        {
            $('#age_gate_form')[0].reset();
        }

        //mobile Keyboard
        that.mobileKeyboard = function()
        {
            if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))
            {
                $('#age_gate_form .numeric').each(function(index, el) {
                    $(this).replaceWith($(this).clone().attr('type', 'tel'));
                });
            }
        }

        //Placeholder reset
        that.placeholderReset = function()
        {
            $('#age_gate_form .numeric').each(function(index, el) 
            {           
                //data placeholder
                $(this).data('placeholder', $(this).attr('placeholder'));

                //show and hide placeholder
                placeholder = $(this).attr('placeholder');

                $(this).focus(function(event) { 
                    $(this).val('').attr('placeholder', ''); 
                });

                $(this).blur(function(event) { 
                    $(this).attr('placeholder', $(this).data('placeholder')); 
                });

            });
        }

        //Validation accept only numbers
        that.numeriValidation = function()
        {
          $(document).on('keyup','#age_gate_form .numeric', function() 
            {
                var numericheck = $.isNumeric($(this).val());

                var val = $(this).val();
                
                if(!numericheck) { 
                    $(this).val(''); 
                }
            });  
        }

        //Date Validations
        that.dateValidations = function()
        {
            //Day date Validation limit day no more than 31
            $(document).on('keyup','#age_gate_day', function() 
            {
                if($(this).val() > 31){ 
                    $(this).val('').focus(); 
                    return false; 
                }
                
                that.autoTab($(this));
            });

            //Mont date validation limit month no more than 12
            $(document).on('keyup','#age_gate_month', function() 
            {
                if($(this).val() > 12) { 
                    $(this).val('').focus();  
                    return false; 
                }

                that.autoTab($(this));
            });

            //Year validation limit year no more than current
            $(document).on('keyup','#age_gate_year', function() 
            {
                var current = new Date().getFullYear();

                if($(this).val() > current) { 
                    $(this).val('').focus(); 
                    return false; 
                }

                that.autoTab($(this));
            });

            $(document).on('blur','#age_gate_year', function() 
            {
                if($(this).attr('maxlength') == undefined)
                {
                    maxlength = $(this).data('placeholder-maxlength');
                }
                else
                {
                    maxlength = $(this).attr('maxlength');
                }   

                if($(this).val().length != maxlength)
                {
                    $(this).val('').focus(); 
                }
            });     
        }

        //Submit function
        that.ageGateSubmit = function()
        {
            $('#age_gate_form input[type="submit"]').focus().click( function(event) {
                event.preventDefault();

                //Required Fields Validation
                $('.required').each(function(index, el) {

                    if($(this).val() == "" || $(this).val() == $(this).attr('placeholder')){

                        $(this).css({
                            'background-color':'#FF9F9F', 
                            'color':'#CC3333'
                        });
                        
                        $('#age_gate_error_message').html('<p>'+config.required_fields_msg+'</p>')
                        
                        error = true;
                    }
                    else{

                        $(this).css({
                            'background-color':'#B8F5B1',
                            'color':'#000'
                        });
                        
                        error = false;
                    }
                });

                //Leagal Age Validation
                var age = that.AgeCheck($('#age_gate_day').val(), $('#age_gate_day').val(), $('#age_gate_year').val());
                                
                if(age<config.leagal_age){
                     
                    that.illegalAge();
                }

                //Redirect if all is OK
                if(error==false){

                    that.setCookie('age_gate','legal',0);

                    that.remeberMe();
                    
                    window.location.href = config.site_url;
                }

            });
        }

        that.storageCookyReset = function()
        {
            localStorage.removeItem('remember_me');
            that.setCookie('age_gate',null);
        }

        that.checkAgeOk = function()
        {
            if(that.getCookie('age_gate') && that.getCookie('age_gate') === 'underage'){

                if(localStorage.getItem('remember_me')){
                    localStorage.removeItem('remember_me');
                }
                
                that.illegalAge();

                return;
            }
        }

        that.getDomain = function()
        {
            return $(location).attr('hostname');
        }

        that.buildAgegate = function()
        {
            that.addClass('page-age-gate').prepend(that.setHtml());
            that.setSelectOptions();
            that.formReset();
            that.checkAgeOk();
            that.checkRememberMe();                    
            that.mobileKeyboard();                   
            that.placeholderReset();
            that.numeriValidation();
            that.dateValidations();                    
            that.ageGateSubmit();
        }

        that.init = function()
        {
            if(window.location == 'http://'+that.getDomain()+'/'+config.ageGate_url)
            {
                if(that.getCookie('age_gate') != '' && 
                   that.getCookie('age_gate') != 'null' && 
                   that.getCookie('age_gate') != 'underage')
                {
                   window.location = 'http://'+that.getDomain();
                }
                else
                {
                    that.buildAgegate();  
                }                   
            }
            else if(that.getCookie('age_gate') === '' || that.getCookie('age_gate') == 'null')
            {
               window.location = 'http://'+that.getDomain()+'/'+config.ageGate_url;
            }
        }

        that.init();

        return that;
    };
})(jQuery);


