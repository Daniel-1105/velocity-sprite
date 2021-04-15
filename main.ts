controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(80, 60)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += 1
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    .............ccfff..............
    ............cddbbf..............
    ...........cddbbf...............
    ..........fccbbcf............ccc
    ....ffffffccccccff.........ccbbc
    ..ffbbbbbbbbbbbbbcfff.....cdbbc.
    ffbbbbbbbbbcbcbbbbcccff..cddbbf.
    fbcbbbbbffbbcbcbbbcccccfffdbbf..
    fbbb1111ff1bcbcbbbcccccccbbbcf..
    .fb11111111bbbbbbcccccccccbccf..
    ..fccc33cc11bbbbccccccccfffbbcf.
    ...fc131c111bbbcccccbdbc...fbbf.
    ....f33c111cbbbfdddddcc.....fbbf
    .....ff1111fbdbbfddcc........fff
    .......cccccfbdbbfc.............
    .............fffff..............
    `, SpriteKind.Player)
