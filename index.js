const chalk = require('chalk')
var moment = require('moment')
const its = 'it is '

var day = moment().format('lll')
var day2 = moment().format('DDDo')
var day3 = moment().format('s ss')
var day4 = moment().isDST()
var day5 = moment().isLeapYear()

console.log(its + chalk.blue(day))
console.log(its + ' the ' + chalk.magenta(day2) + ' day of the year')
console.log(its + '' + chalk.cyan(day3) + ' seconds into the day')

if (day4 === true) {
	console.log('It ' + chalk.green('is') + ' During Daylight Savings Time')
} else {
	console.log('It ' + chalk.red('is not') + ' Daylight Savings Time...BRRR!')
}

//console.log(its + chalk.green(day4) + ' that it is currently daylight savings time')

if (day5 === true) {
	console.log('It ' + chalk.red('is') + ' a leap year.')
} else {
	console.log('It ' + chalk.red('is not') + ' a leap year.')
}
