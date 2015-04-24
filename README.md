# Support browser
This script disables the operation of the site on the browsers mentioned in your script

Support languages

    English
    supportBrowser({language: 'en'});

    Ukrainian
    supportBrowser({language: 'ua'});

    Russian
    supportBrowser({language: 'ru'});

Short names of browsers

    Opera Browser: opera
    Google Chrome: chrome
    Safari Browser: safari
    Mozilla Firefox: firefox
    Internet Explorer: msie
    Trident: trident 

How to use

    <body>
    ...
    <script type="text/javascript" src="js/support-browser.js"></script>
    <script type="text/javascript">
     supportBrowser({
      language: 'ru',
      browsers: [
       {
        browser: 'firefox',
        version: 4
       }
      ]
     });
    </script>
    </body>
