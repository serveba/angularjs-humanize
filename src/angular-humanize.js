(function( angular ) {
  'use strict';

  angular.module('angular-humanize', []).
    filter('humanizeFilesize', function () {
      return function ( input ) {
        if ( isNaN(input) ) { return input; }
        return Humanize.fileSize(input);
      };
    }).
    filter('humanizeOrdinal', function () {
      return function ( input ) {
        if ( isNaN(input) ) { return input; }
        return Humanize.ordinal(input);
      };
    }).
    filter('humanizeInt', function () {
      return function ( input ) {
        if ( isNaN(parseInt(input, 10))) { return input; }
        return Humanize.formatNumber(parseInt(input,10), 0);
      };
    }).
    filter('humanizeNaturalDay', function () {
      return function ( input ) {
        if ( isNaN(input) ) { return input; }
        return Humanize.naturalDay(input);
      };
    })

}( angular ));
