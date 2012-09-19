
var select = require('..');

describe('select(arr, fn)', function(){
  it('should return values when truthy', function(){
    var arr = [1,5,10,20,25];
    arr = select(arr, function(n){ return n > 10 });
    arr.should.eql([20, 25]);
  })
})