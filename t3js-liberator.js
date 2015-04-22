window.$ = window.$ || function(element) {
	this.el = element;

	this.on = function(type, eventHandler){
		this.el.addEventListener(type, eventHandler);
		return this;
	}

	this.off = function(type, eventHandler){
		this.el.removeEventListener(type, eventHandler);
		return this;
	}

	return this;
}

