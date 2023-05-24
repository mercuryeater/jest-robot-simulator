const { createRobot } = require('./robot.js');

describe('Robot', () => {
	test('The robot advances 1 North', () => {
		// Arrange
		const expected = { coordinates: [ 0, 1 ], orientation: 'North' }
		//Act
		const result = createRobot([0,0], "North").advance();
		//Assert
		expect(result).toEqual(expected)
	});

	test('We get the position of the robot', () => {
		const expected = { coordinates: [ 1,3 ], orientation: 'North' }
		const result = createRobot([1,3], "North").getPosition();
		expect(result).toEqual(expected)
	})

	test('We move the robot with the innstructions', () => {
		const expected = { coordinates: [9, 4], orientation: "West"}
		const result = createRobot([7, 3],"North").getPosition();
		expect(result).toEqual(expected)
	})
});