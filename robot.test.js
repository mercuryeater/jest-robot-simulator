const { createRobot } = require('./robot.js');

describe('getPosition function tests', () => {
	test('We get the position of the robot', () => {
		const expected = { coordinates: [ 1,3 ], orientation: 'North' }
		const result = createRobot([1,3], "North").getPosition();
		expect(result).toEqual(expected)
	})
});

describe('advance function tests', () => {
	test('The robot advances 1 North', () => {
		// Arrange
		const expected = { coordinates: [ 0, 1 ], orientation: 'North' }
		//Act
		const result = createRobot([0,0], 'North').advance();
		//Assert
		expect(result).toEqual(expected)
	});

	test('An error should appear when surpassing the limit', () => {
		const expected = "No more space to move"
		const result = createRobot([0,10], 'North').advance();
		expect(result).toMatch(expected)
	})
})

describe('instructions function tests', () => {
	test('Should be able to advance and rotate right in all directions', () => {
		const expected = {coordinates: [0,0], orientation: 'North'}
		const result = createRobot([0,0], 'North').instructions('ARARARAR');
		expect(result).toEqual(expected)
	})

	test('Should be able to rotate left in all directions', () => {
		const expected = {coordinates: [0,0], orientation: 'North'}
		const result = createRobot([0,0], 'North').instructions('LLLL');
		expect(result).toEqual(expected)
	})

	test('We move the robot with the innstructions in the challenge', () => {
		const expected = { coordinates: [9, 4], orientation: "West"}
		const result = createRobot([7, 3],"North").instructions("RAALAL");
		expect(result).toEqual(expected)
	})

	test('Should throw an error when something different to R, L or A is encountered', () => {
		const expected = "Only known instructions are supported"
		const result = createRobot([0,0], "North").instructions("ASDFG");
		expect(result).toMatch(expected)
	})
})