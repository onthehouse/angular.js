Index: angular.js
===================================================================
--- angular.js
+++ angular.js
@@ -2,9 +2,9 @@
  * @license AngularJS v1.2.26
  * (c) 2010-2014 Google, Inc. http://angularjs.org
  * License: MIT
  */
+(function(window, document, undefined) {
-(function(window, document, undefined) {'use strict';
 
 /**
  * @description
  *
@@ -22026,5 +22026,5 @@
   });
 
 })(window, document);
 
+!window.angular.$$csp() && window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
-!window.angular.$$csp() && window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
\ No newline at end of file
