test("Test Pivot Point", function() {
	
	var pivot = new PivotPoint(2, 4, 1, 3);
	
	equal(pivot.open, 2);
	equal(pivot.high, 4);
	equal(pivot.low, 1);
	equal(pivot.close, 3);
	
});

test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});