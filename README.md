# jQuery Age Gate Plugin

 jQuery Age Gate v1.0.0

Very configuralable Aage verification "Age Gate or agegate" plugin. 
Required by some content providers for mature content.
Uses Cookies and localstorage.
[Age Gate](https://github.com/SpecialKcl/jQuery-Age-Gate-Plugin)

 by Kai Hotz AKA [SpecialKcl](https://github.com/SpecialKcl) 

## How to Use:

### 1. Load jQuery and include Age Gate Plugin plugin files

To use Age Gate Plugin, you’ll need to make sure both the Age Gate Plugin and jQuery 1.9 or higher scripts are included.

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
It is important to call the initializer on the 'body' tag  in every single pages of your site.

```javascript
jQuery(document).ready(function($)
{
   $('body').ageGate({
       'leagal_age'            : 18, //minimum age to pass the age verification
       'required_fields_msg'   : 'All Fields are mandatory', //Error message for all requiered fields
       'underage_msg'          : 'You have to be over 18 to enter this site', //Error message if visitor i minor the minimum age
       'underage_url'          : 'http://google.com', //Any URL for minors to be redirected
       'site_url'              : 'index.html', //Your site index page
       'ageGate_url'           : 'agegate.html', //URL for the page where the Age Gate is shown
       'logo'                  : 'images/logos/logo.png', //URL for your Logo image
       'title'                 : 'AGE GATE', //Title to be shown on the Age Gate page
       'subtitle_1'            : 'You have to be over 18 to access this site', // First subtitle
       'subtitle_2'            : 'Please enter your Date of Birth', //Second Subtitle
       'formAction'            : '', //Action for the form submition , optional
       'placeholderDay'        : 'DD', //Placeholder for the Day field
       'placeholderMonth'      : 'MM', //Placeholder for the Month field
       'placeholderYear'       : 'YYYY', //Placeholder for the Year field
       'selectTitle'           : 'Select a Option', //Placeholder drop down select option
       'selectOptions'         : {'op1':'Option 1','op2':'Option 2','op3':'Option 3','op4':'Option 4'}, //Key,Value vor the select options
       'checkBoxLabel'         : 'Remember me the next time', // Lable for the remember me checkbox
       'submitBtnTxt'          : 'ENTER SITE', //SUbmit button text
       'footerMsg'             : 'copyright © year brand name. all rights reserved', //Footer text
   });
});
```