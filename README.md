# jQuery Age Gate Plugin

 jQuery Age Gate v1.0.0

Very configuralable Aage verification "Age Gate or agegate" plugin. 
Required by some content providers for mature content.
Uses Cookies and localstorage.
[Age Gate](https://github.com/SpecialKcl/jQuery-Age-Gate-Plugin)

 by Kai Hotz AKA [SpecialKcl](https://github.com/SpecialKcl) 

## Useage

```javascript
jQuery(document).ready(function($)
{
   $('body').ageGate({
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
   });
});
```