options( digits = 16 )
library( jsonlite )
library( pscl )

alpha = 1
beta = 1
x = 1:25
y = densigamma( x, alpha,beta )

cat( y, sep = ",\n" )

data = list(
	alpha = alpha,
beta = beta,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
