let note = 0
let list = [
139,
262,
392,
523,
784,
932
]
basic.forever(function () {
    note = Math.trunc(Math.map(input.rotation(Rotation.Pitch), -180, 180, 0, 6))
    serial.writeLine("" + (note))
    while (input.buttonIsPressed(Button.A)) {
        music.play(music.tonePlayable(list[note], music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    }
})
