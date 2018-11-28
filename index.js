'use strict';

/**
 * Converts an input string value to titlecase
 * @param {string} inputString
 * @return {string}
 */
module.exports = function(inputString) {
    if (typeof inputString === 'string'){
        return inputString.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    } else if ( typeof inputString === 'number') {
        return 'Incompatible input type';
    }else {
        return null;
    }
};