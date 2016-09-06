var expect = require('chai').expect,
    walk = require('../walk');

describe('Walk tests', function () {
  var files = walk(__dirname);
  it('Should read all files from given dir, including subdirs', function () {
    expect(files).to.include('/home/stefano/repo/walk/test/mock_folder/mock_file_1');
    expect(files).to.include('/home/stefano/repo/walk/test/mock_folder/mock_file_2');
    expect(files).to.include('/home/stefano/repo/walk/test/mock_folder/mock_file_3');
    expect(files).to.include('/home/stefano/repo/walk/test/mock_folder/mock_file_4');
    expect(files).to.include('/home/stefano/repo/walk/test/mock_folder/mock_folder_below/mock_file_1');
    expect(files).to.include('/home/stefano/repo/walk/test/mock_folder/mock_folder_below/mock_file_2');
  });
});
