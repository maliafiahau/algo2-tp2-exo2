function compte_score () {
	
}
input.onButtonPressed(Button.A, function () {
    if (posX != 0) {
        led.unplot(posX, direction)
        posX += -1
        led.plot(posX, direction)
    }
})
input.onButtonPressed(Button.B, function () {
    if (posX != 4) {
        led.unplot(posX, direction)
        posX += 1
        led.plot(posX, direction)
    }
})
let y = 0
let x = 0
let direction = 0
let posX = 0
posX = 0
direction = 4
led.plot(posX, direction)
basic.forever(function () {
    x = randint(0, 4)
    y = 0
    led.plot(x, y)
    basic.pause(500)
    while (y < 4) {
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
        basic.pause(500)
        led.unplot(x, y)
    }
})
