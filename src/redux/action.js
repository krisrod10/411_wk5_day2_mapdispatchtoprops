export const addCar = (car) => ({
    type: 'Add_Car',
    value: car
});

export const removeCar = (index) => ({
    type: 'Remove_Car',
    value: index
});