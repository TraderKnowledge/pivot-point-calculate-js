test("Test Pivot Point", function() {
	
	var pivot = new PivotPoint(2, 4, 1, 3);
	
	equal(pivot.open, 2);
	equal(pivot.high, 4);
	equal(pivot.low, 1);
	equal(pivot.close, 3);
	
});

test("Not numbers", function() {
	var pivot = new PivotPoint('a', 'b', 'c', 'd');
	
	equal(pivot.open, -1);
	equal(pivot.high, -1);
	equal(pivot.low, -1);
	equal(pivot.close, -1);
	
	equal(pivot.resistance3, -1);
	equal(pivot.resistance2, -1);
	equal(pivot.resistance1, -1);
	equal(pivot.pivotPoint, -1);
	equal(pivot.support1, -1);
	equal(pivot.support2, -1);
	equal(pivot.support3, -1);
	
});

