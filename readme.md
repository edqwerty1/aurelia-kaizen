#Aurelia Kaizen

##Getting started

###Install jspm
`$ npm install jspm -g`

###Install jspm packages
`$ jspm install`

###Install npm packages
`$ npm install`

`$ npm install http-server -g`

###Update config.js
After a jspm install the following lines in the config.js:  
    `"github:*": "jspm_packages/github/*",`  
    `"npm:*": "jspm_packages/npm/*"`  
    
will need changing to:  
    `"github:*": "../jspm_packages/github/*",`  
    `"npm:*": "../jspm_packages/npm/*"`  
 

###Run
`$ gulp