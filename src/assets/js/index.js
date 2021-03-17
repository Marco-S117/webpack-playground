import _ from 'lodash'
import '../css/style.css'
import Logo from '../images/webpack-logo.png'
import DataXML from '../data/data.xml'
import DataCSV from '../data/data.csv'
import DataTOML from '../data/data.toml'
import DataYAML from '../data/data.yaml'
import DataJSON5 from '../data/data.json5'

function background() {
	const BG = document.createElement('div')

	BG.classList.add('background')

	return BG	
}

function main() {
	const MAIN = document.createElement('main')
	const IMAGE_LOGO = new Image()

	// Lodash, now imported by this script
	MAIN.innerHTML = _.join(['Hello', 'webpack'], ' ')

	IMAGE_LOGO.src = Logo
	MAIN.appendChild(IMAGE_LOGO)

	return MAIN
}

document.body.appendChild(background())
document.body.appendChild(main())

console.log('DataXML\n', DataXML)
console.log('DataCSV\n', DataCSV)
console.log('DataTOML\n', DataTOML)
console.log('DataYAML\n', DataYAML)
console.log('DataJSON5\n', DataJSON5)