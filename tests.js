test("Test Parameters", function() {
	
	var o = 2;
	var h = 4;
	var l = 1;
	var c = 3;
	
	var pivot = new PivotPoint(o, h, l, c);
	
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

test("Test Pivot Points", function() {
	
	var o = 2;
	var h = 4;
	var l = 1;
	var c = 3;
	
	var pivot = new PivotPoint(o, h, l, c);
	
	equal(pivot.resistance3, 8.6667);
	equal(pivot.resistance2, 5.6667);
	equal(pivot.resistance1, 4.3334);
	equal(pivot.pivotPoint, 2.6667);
	equal(pivot.support1, 1.3334);
	equal(pivot.support2, -0.3333);
	equal(pivot.support3, -3.3333);
	
});
