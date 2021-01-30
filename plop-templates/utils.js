exports.notEmpty = (name) => {
	return (v) => {
		if (!v || v.trim === '') {
			return `${name} 必须填写`
		}
		return true
	}
}
