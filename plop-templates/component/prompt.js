const { notEmpty } = require('../utils.js')
module.exports =
	// (plop) => {
	// plop.setGenerator('new',
	{
		description: 'html转换pdf',
		prompts: [
			{
				type: 'url',
				name: 'url',
				message: '请输入需要转换的URL',
				validate: notEmpty('需要转换的URL'),
			},
			{
				type: 'pdfName',
				name: 'pdfName',
				message: '请选择转换后pdf名字',
				choices: notEmpty('转换后pdf名字'),
			},
		],
		actions: (data) => {
			console.log(data)
			let { pdfName } = data
			const actions = [
				{
					type: 'add',
					templateFile: 'plop-templates/component/pdf.hbs',
					path: `src/${pdfName}.js`,
					data: {
						...data,
					},
					skipIfExists: true,
				},
			]

			return actions
		},
	}
// 	})
// }
