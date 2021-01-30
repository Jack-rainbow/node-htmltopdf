const fs = require('fs')
const path = require('path')
var process = require('child_process')

// 目录
let dirs = './src'

const getAllFile = function (dir) {
	let res = []
	function traverse(dir) {
		fs.readdirSync(dir).forEach((file) => {
			const pathname = path.join(dir, file)
			if (fs.statSync(pathname).isDirectory()) {
				traverse(pathname)
			} else {
				res.push(pathname)
			}
		})
	}
	traverse(dir)
	return res
}

let list = getAllFile(dirs)
if (!list.length) return

list.forEach((v) => {
	process.exec(`node ${v}`)
})
