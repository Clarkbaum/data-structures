describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  var thisIsATest = function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  };

  it('should add values to a set', thisIsATest);

  it('should increment the value when adding more items in set', function(){
    set.add('Joe');
    set.add('Joe');
    expect(set._storage['Joe'] === 2).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should decrement the value if there are more than one item in set', function(){
    set.add('Bob');
    set.add('Bob');
    set.remove('Bob');
    expect(set._storage['Bob']).to.equal(1);
  });

  it('should be capable of handling inputs of all types', function(){
    set.add('Joey');
    set.add([1,2,3,5]);
    set.add(true);
    set.add({'key1':4});
    set.add(5);
    expect(set.contains('Joey')).to.be.true
    expect(set.contains([1,2,3,5])).to.be.true //should we make the contains input a string?
    expect(set.contains(true)).to.be.true
    expect(set.contains({'key1':4})).to.be.true
    expect(set.contains(5)).to.be.true
  });

  it('should be capable of incrementing the counter of non string values',function(){
    set.add('Joey');
    set.add([1,2,3,5]);
    set.add(true);
    set.add(true);
    set.add([1,2,3,5]);
    expect(set._storage[String([1,2,3,5])][1]).to.equal(2); //assuming as of now storage item look up is [any value][array index]
    expect(set._storage[String(true)][1]).to.equal(2);
    expect(set._storage['Joey'][1]).to.equal(1);

  });

});
