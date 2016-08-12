# jQuery Age Gate Plugin

 jQuery Age Gate v1.0.0

Very configuralable Aage verification "Age Gate or agegate" plugin. 
Required by some content providers for mature content.
Uses Cookies and localstorage.
[Age Gate](https://github.com/SpecialKcl/jQuery-Age-Gate-Plugin)

 by Kai Hotz AKA [SpecialKcl](https://github.com/SpecialKcl) 

## How to Use:

### 1. Load jQuery and include Age Gate Plugin plugin files

To use Age Gate Plugin, you’ll need to make sure both the Age Gate Plugin and jQuery 1.7 or higher scripts are included.

```htnml
<!-- Important Age Gate Plugin stylesheet -->
<link rel="stylesheet" href="css/agegate.css">

<!--  jQuery 1.7+  -->
<script src="jquery-1.9.1.min.js"></script>
 
<!-- Include js plugin -->
<script src="js/agegate.js"></script>
```


### 2. Call the plugin

Now call the Age Gate initializer function and your Age verification page is ready.
Since the cookie and localstorage verifiction for the Legal Age and the Remember Me is handeld on the client side,
I is important to call the initializer on the <body> tag  in all the pages for your site.

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