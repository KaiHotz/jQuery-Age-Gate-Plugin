# jQuery Age Gate Plugin

 jQuery Age Gate v1.0.0

Very configuralable Aage verification "Age Gate or Age Checker" plugin. 
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

<!--  jQuery 1.9+  -->
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
 
<!-- Include js plugin -->
<script src="js/agegate.js"></script>
```


### 2. Call the plugin

Now call the Age Gate initializer function and your Age verification page is ready.
Since the cookie and localstorage verifiction for the Legal Age and the Remember Me is handeld on the client side,
It is important to call the initializer on the 'body' tag  in every single pages of your site.

```javascript
jQuery(document).ready(function($){

   $('body').ageGate();

});
```
> ### Note for local development:
> In Case you are working in an local enviroment, Make shure your site is running on an VIRTUAL HOST 
> so the redirection at the cookie and local storage detection, works correctly !!!
> Otherwise the Redirection for the Remeber me option or if you entered an age less than the Legal Age declared and come back to any of the internal pages of the site, will not work.

## Customizing

### 1. Options

All of the options below are available to customize Age Gate Plugin.

| Variable              | Default                                                               | Type   | Description                                     |
| --------------------- |:---------------------------------------------------------------------:|:------:| ------------------------------------------------|
| `leagal_age`          | 18                                                                    | int    | Minimum age to pass the age verification        |
| `required_fields_msg` | 'All Fields are mandatory'                                            | string | Error message for all requiered fields          |
| `underage_msg`        | 'You have to be over 18 to enter this site'                           | string | Error message if visitor i minor the minimum age|
| `underage_url`        | 'http://google.com',                                                  | string | Any URL for minors to be redirected             |
| `site_url`            | 'index.html'                                                          | string | Your site index page                            |
| `ageGate_url`         | 'agegate.html'                                                        | string | URL for the page where the Age Gate is shown    |
| `logo`                | 'images/logos/logo.png'                                               | string | URL for your Logo images                        |
| `bg_image`            | 'images/bg/bg_main.jpg',                                              | string | URL the Age Gate page background images         |
| `title`               | 'AGE GATE'                                                            | string | Title to be shown on the Age Gate pages         |
| `subtitle_1`          | 'You have to be over 18 to access this site'                          | string | First subtitle                                  |
| `subtitle_2`          | 'Please enter your Date of Birth'                                     | string | Second subtitle                                 |
| `formAction`          | ''                                                                    | string | Action for the form submition , optional        |
| `placeholderDay`      | 'DD'                                                                  | string | Placeholder for the Day field                   |
| `placeholderMonth`    | 'MM'                                                                  | string | Placeholder for the Month field                 |
| `placeholderYear`     | 'YYYY'                                                                | string | Placeholder for the Year field                  |
| `selectTitle`         | 'Select an Option'                                                    | string | Placeholder drop down selecter                  |
| `selectOptions`       | {'op1':'Option 1','op2':'Option 2','op3':'Option 3','op4':'Option 4'} | array  | Key=>Value vor the select options               |
| `checkBoxLabel`       | 'Remember me the next time'                                           | string | Lable for the remember me checkbox              |
| `submitBtnTxt`        | 'ENTER SITE'                                                          | string | Submit button text                              |
| `footerMsg`           | 'copyright © year brand name. all rights reserved'                    | string | Footer text                                     |


### 2. Defaults

Age Gate Plugin default settings

```javascript
$('body').ageGate({
      'leagal_age'            : 18,
      'required_fields_msg'   : 'All Fields are mandatory',
      'underage_msg'          : 'You have to be over 18 to enter this site', 
      'underage_url'          : 'http://google.com', 
      'site_url'              : 'index.html',
      'ageGate_url'           : 'agegate.html',
      'logo'                  : 'images/logos/logo.png', 
      'bg_image'              : 'images/bg/bg_main.jpg',
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
```

