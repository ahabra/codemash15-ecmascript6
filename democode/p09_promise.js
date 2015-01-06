// a slow function that returns data
function findGuy() {
	sleep(100); // simulate a slow operation
	let guy = {
		isBad: Math.random() < 0.5
	}
	return guy
}

// create a promise
let badGuyPromise = new Promise(
		function(resolve, reject) {
			let guy = findGuy()
			if (guy.isBad) {
				resolve(guy)
			} else {
				reject('the guy is ok')
			}
		}
	)

badGuyPromise
	.then(badGuy => console.warn(badGuy))
	.catch(msg => console.info(msg))


// do not do this at home
function sleep(milliseconds) {
 	let start = new Date().getTime()
 	while (true) {
 		if ((new Date().getTime() - start) > milliseconds) break
 	}
}
