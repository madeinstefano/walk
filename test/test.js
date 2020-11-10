const expect = require( 'chai' ).expect;
const walk = require( '../walk' );

describe( 'Walk tests', () => {
  const path = __dirname;
  const files = walk( __dirname );

  it( 'Should read all files from given dir, including subdirs', () => {
    expect( files ).to.include( `${path}/test.js` );
    expect( files ).to.include( `${path}/folder/mock_file_1` );
    expect( files ).to.include( `${path}/folder/mock_file_2` );
    expect( files ).to.include( `${path}/folder/mock_file_3` );
    expect( files ).to.include( `${path}/folder/mock_file_4` );
    expect( files ).to.include( `${path}/folder/nested_folder/mock_file_1` );
    expect( files ).to.include( `${path}/folder/nested_folder/mock_file_2` );
  } );
} );
