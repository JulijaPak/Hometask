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
    const info = getRectangleInfo(5, 5);
    expect(info).toBe('The perimeter of a rectangle is 20 and the area is 25');
})