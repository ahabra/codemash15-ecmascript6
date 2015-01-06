var idHandler = {
	get: function(target, propName) {
		if (propName in target) return target[propName];
		if (propName === 'id') {
			target[propName] = 'id_' + (this._id++)
			return target[propName]
		}
		return undefined;
	},
	_id: 1
}

var user = {
	name: 'cat'
}

user = new Proxy(user, idHandler)

console.log(user.name)
console.log(user.id)
console.log(user.age)

