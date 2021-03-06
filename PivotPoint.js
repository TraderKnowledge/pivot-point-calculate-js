
function PivotPoint (open, high, low, close) {
	this.open = open;
	this.high = high;
	this.low = low;
	this.close = close;
	
	this.resistance3 = -1;
	this.resistance2 = -1;
	this.resistance1 = -1;
	this.pivotPoint = -1;
	this.support1 = -1;
	this.support2 = -1;
	this.support3 = -1;
	
	//validate the parameters to be numbers
	if(isNaN(this.open)){
		this.open = -1;
	}
	
	if(isNaN(this.high)){
		this.high = -1;
	}
	
	if(isNaN(this.low)){
		this.low = -1;
	}
	
	if(isNaN(this.close)){
		this.close = -1;
	}
	
	//don't calculate the pivot points if the parameters did not validate
	if(this.open <= 0 || this.open <= 0 || this.open <= 0 || this.open <= 0) {
		//TODO: should probably throw an exception here
		return;
	}
	
	//calculate the pivot point
	this.pivotPoint =  (this.high + this.low + this.close) / 3;
	this.pivotPoint =  parseFloat(this.pivotPoint).toFixed(4);
	
	//calculate the resistance
	this.resistance1 = parseFloat((this.pivotPoint * 2) - this.low).toFixed(4);
	this.resistance2 = parseFloat(this.pivotPoint + (this.high - this.low)).toFixed(4);
	this.resistance3 = parseFloat(this.pivotPoint + (2*(this.high - this.low))).toFixed(4);

	//calculate the support
	this.support1 = parseFloat((this.pivotPoint * 2) - this.high).toFixed(4);
	this.support2 = parseFloat(this.pivotPoint - (this.high - this.low)).toFixed(4);
	this.support3 =  parseFloat(this.pivotPoint - (2*(this.high - this.low))).toFixed(4);
	
}