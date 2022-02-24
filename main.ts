input.onButtonPressed(Button.A, function () {
    numbers_of_balls += 1
    basic.showNumber(numbers_of_balls)
})
input.onButtonPressed(Button.B, function () {
    number_of_pitches += 1
    basic.showNumber(number_of_pitches)
})
let number_of_pitches = 0
let numbers_of_balls = 0
basic.showNumber(0)
numbers_of_balls = 0
number_of_pitches += 0
basic.forever(function () {
    if (numbers_of_balls == 4) {
        numbers_of_balls = 0
    }
    if (number_of_pitches == 3) {
        number_of_pitches = 0
    }
})
