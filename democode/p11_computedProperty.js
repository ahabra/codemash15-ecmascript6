// Computed property names
var obj = {
	a: 1,
	['b' + 2*3]: 'hello'
}
console.log(obj)  // { a: 1, b6: "hello" }
