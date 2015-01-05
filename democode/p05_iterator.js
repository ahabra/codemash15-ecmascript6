// step1: have an object
let odds = {}

// step2: define a property with key Symbol.iterator which has a function value
odds[Symbol.iterator] = function() {
	const max=10
	let odd = -1
	// step3: the function returns an object
	return {
		// step4: the object has a function next
		next: function() {
			odd += 2
			if (odd > max) {
				return {done:true} // terminate the iterator
			}
			return {done:false, value:odd} // next value
		}
	}
}

// notice that odds are lazily evaluated

for (odd of odds) {
	console.log(odd)
}
