'use strict';

// MODULES //

var gamma = require( 'gamma' );


// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log;


// PDF //

/**
* FUNCTION: pdf( x, alpha, beta )
*	Evaluates the probability density function (PDF) for a Inverse Gamma distribution with shape parameter `alpha` and scale parameter `beta` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} alpha - shape parameter
* @param {Number} beta - scale parameter
* @returns {Number} evaluated PDF
*/
function pdf( x, alpha, beta ) {
	if ( x <= 0 ) {
		return 0;
	}
	var lnl;
	lnl = alpha * ln( beta ) - ( alpha + 1 ) * ln( x ) - gamma.log( alpha ) - beta / x;
	return exp( lnl );
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
