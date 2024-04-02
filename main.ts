input.onPinPressed(TouchPin.P2, function () {
    potato = 2
    rope += 0.5
})
input.onPinPressed(TouchPin.P1, function () {
    potato = 1
    rope += -0.5
})
function updateDisplay () {
    rope = 2
    led.plot(Math.round(rope), 2)
    if (rope < 0) {
        basic.showString("A")
    } else if (rope > 4) {
        basic.showString("B")
    }
    basic.clearScreen()
}
let rope = 0
let potato = 0
let game_started = false
updateDisplay()
basic.clearScreen()
basic.showIcon(IconNames.Heart)
while (!(game_started)) {
    if (input.pinIsPressed(TouchPin.P1) || input.pinIsPressed(TouchPin.P2)) {
        game_started = true
    }
}
basic.pause(3000)
basic.clearScreen()
let timer = randint(10, 20)
while (timer > 0) {
    basic.showIcon(IconNames.Yes)
    if (potato == 1) {
        basic.showString("B")
    } else if (potato == 2) {
        basic.showString("A")
    }
    timer += -1
}
basic.showIcon(IconNames.No)
if (potato == 1) {
    basic.showString("A wins!")
} else if (potato == 2) {
    basic.showString("B wins!")
}
music.rest(music.beat(BeatFraction.Breve))
basic.clearScreen()
