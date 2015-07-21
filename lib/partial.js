'use strict';

// MODULES //

var gamma = require( 'gamma' );


// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log;


// PARTIAL //

/**
* FUNCTION: partial( alpha, beta )
*	Partially applies shape parameter `alpha` and scale parameter `beta` and returns a function for evaluating the probability density function (PDF) for a Inverse Gamma distribution.
*
* @param {Number} alpha - shape parameter
* @param {Number} beta - scale parameter
* @returns {Function} PDF
*/
function partial( alpha, beta ) {
	var firstTerm = alpha * ln( beta ) - gamma.log( alpha );
	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Inverse Gamma distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {
		var lnl;
		if ( x <= 0 ) {
			return 0;
		}
		lnl = firstTerm - ( alpha + 1 ) * ln( x ) - beta / x;
		return exp( lnl );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
