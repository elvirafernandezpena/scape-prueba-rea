basic.forever(function () {
    basic.showString("ORDEA OS SONS")
    basic.clearScreen()
    basic.showIcon(IconNames.EighthNote)
    basic.clearScreen()
    music.play(music.stringPlayable("C E G C5 G E C - ", 77), music.PlaybackMode.UntilDone)
})
