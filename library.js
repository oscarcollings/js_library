// The Object.beget method creates a new object which uses an old object
// as its prototype

if (typeof Object.beget !== 'function') {
	Object.beget = function(o) {
		var F = function() {};
		F.prototype = o;
		return new F();
	};
}

// The is_array function does exactly what you think it does

var is_array = function(value) {
	return value &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		typeof value.splice === 'function' &&
		!(value.propertyIsEnumerable('length'));
};

// The Array.dim method initializes an array of length dimension with the
// given initial value

Array.dim = function (dimension, initial) {
	var a = [], i;
	for (i = 0; i < dimension; i += 1) {
		a[i] = initial;
	}
	return a;
}

// The Array.matrix method initializes an m x n matrix with the given
// initial value

Array.matrix = function (m, n, initial) {
	var a, i, j, mat = [];
	for (i = 0; i < m; i += 1) {
		a = [];
		for (j = 0; j < n; j += 1) {
			a[j] = 0;
		}
		mat[i] = a;
	}
	return mat;
}

// Augments the Function prototype with a method method which adds a method
// only if it is known to be missing.

Function.prototype.method = function(name, func) {
	if (!this.prototype[name]) {
		this.prototype[name] = func;
	}
};
