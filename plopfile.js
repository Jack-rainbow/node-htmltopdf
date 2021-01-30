const componentGenerator = require('./plop-templates/component/prompt')
const { setRouteAction } = require('./plop-templates/utils')

module.exports = (plop) => {
	// 增加一种 action

	plop.setGenerator('component', componentGenerator)
}
