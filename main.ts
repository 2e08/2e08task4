let x_value = 0
let value_y = 0
input.onButtonPressed(Button.A, function () {
    x_value = 0
    value_y = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x_value, value_y)
            basic.pause(200)
            basic.clearScreen()
            x_value += 1
        }
        value_y += 1
        x_value = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(x_value, 0)
        basic.pause(200)
        x_value += 1
    }
    if (x_value > 4) {
        x_value = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, value_y)
        basic.pause(200)
        value_y += 1
    }
    if (value_y > 4) {
        value_y = 0
    }
})
