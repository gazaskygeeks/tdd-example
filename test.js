QUnit.test("Function `change` should exist", function(t) {
  t.ok(window.change,'it exists');
});

QUnit.test("Function `change` should return an array", function (t) {
  t.ok(Array.isArray(change()) === true, 'it\'s an array');
});

QUnit.test("when insert 10 to pay 1, should return 9", function (t) {
  var total = change(10,1).reduce(function(acc,elm){
    return acc + elm;
  },0);
  t.ok(total === 9,'returns 9');
});

QUnit.test("when inserting 10 to pay 1, should return an array of lenght 3", function(t) {
  t.equal(change(10,1).length,3,'it\'s 3');
});

QUnit.test("when inserting 5 to pay 2, should return [2,1]", function(t) {
  t.deepEqual(change(5,2),[2,1],'return array [2,1]');
});