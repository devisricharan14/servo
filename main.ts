basic.forever(function () {
    maqueen.servoRun(maqueen.Servos.S1, 50)
    basic.pause(500)
    maqueen.servoRun(maqueen.Servos.S1, 40)
    basic.pause(500)
    maqueen.servoRun(maqueen.Servos.S1, 5)
    basic.pause(500)
    maqueen.servoRun(maqueen.Servos.S1, 100)
    basic.pause(500)
})
