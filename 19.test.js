const {default: TestRunner} = require('jest-runner')
const concat = require('./19')

test('return "abcd"',() =>{
    expect(concat('ab','cd')).toBe('abcd')
})
//run below in terminal
//npm run test