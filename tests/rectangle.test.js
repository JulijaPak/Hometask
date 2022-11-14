const { getRectanglePerimeter, getRectangleArea, getRectangleInfo } = require('../js/rectangle.js')


test('should calculate perimetr of rectangle', () => {
    const perimeter = getRectanglePerimeter(5, 5);
    expect(perimeter).toBe(20);
});

test('should calculate area of rectangle', () => {
    const area = getRectangleArea(5, 5);
    expect(area).toBe(25);
})

test('should console.log info about rectangle perimetr and area', () => {
    jest.spyOn(console, 'log');
    expect(console.log.mock.calls.length).toBe(0);
    getRectangleInfo(5, 5);
    expect(console.log.mock.calls.length).toBe(1);
    expect(console.log.mock.calls[0][0]).toBe("The perimeter of a rectangle is 20 and the area is 25");
    jest.clearAllMocks();
})