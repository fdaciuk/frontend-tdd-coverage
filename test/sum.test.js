;(function( should, sum, undefined ) {
  'use strict';

  describe( '#SUM', function() {
    it( 'Should sum two numbers', function() {
      sum( 1, 2 ).should.be.equal( 3 );
    });
  });
})( chai.should(), window.sum );