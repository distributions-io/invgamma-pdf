'use strict';

// FUNCTIONS //


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

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Inverse Gamma distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
