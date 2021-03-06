/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Check whether an element is a finite number
	isFiniteNumber = require( 'validate.io-finite' ),

	// Check whether an element is `NaN`
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	partial = require( './../lib/partial.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'partial pdf', function tests() {

	var	validationData = require( './fixtures/partial.json' ),
		data = validationData.data,
		expected = validationData.expected.map( function( d ) {
			return d === 'Inf' ? Infinity : d;
		}),
		alpha = validationData.alpha,
		beta = validationData.beta;

	it( 'should export a function', function test() {
		expect( partial ).to.be.a( 'function' );
	});

	it( 'should partially apply the Inverse Gamma pdf for given parameter values', function test() {
		var pdf;
		pdf = partial( alpha, beta );
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should return a function which evaluates the probability density function', function test() {
		var pdf, actual;
		pdf = partial(  alpha, beta );
		for ( var i = 0; i < data.length; i++ ) {
			actual = pdf( data[ i ] );
			if ( isFiniteNumber( actual ) && isFiniteNumber( expected[ i ] ) ) {
				assert.closeTo( actual, expected[ i ] , 1e-14 );
			}
		}
	});

	it( 'should return `0` if provided a non-positive number', function test() {
		var pdf = partial(  alpha, beta );
		 assert.isTrue( pdf( 0, alpha, beta ) === 0 );
		 assert.isTrue( pdf( -2, alpha, beta ) === 0 );
	});

	it( 'should return `NaN` if provided `NaN` as input', function test() {
		var pdf = partial(  alpha, beta );
		assert.isTrue( isnan( pdf( NaN ) ) );
	});

});
