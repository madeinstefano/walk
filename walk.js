const { readdirSync, statSync } = require('fs');
const { join } = require( 'path' );

const walk = dir => {
  const results = [];
  const list = readdirSync( dir );
  for ( const file of list ) {
    const filePath = join( dir, '/', file );
    const stat = statSync( filePath );
    if (stat && stat.isDirectory() ) {
      results.push( ... walk( filePath ) );
    } else {
      results.push( filePath );
    }
  }
  console.log( results )
  return results;
}

module.exports = walk;
