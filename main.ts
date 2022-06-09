controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mateorit = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 . 2 2 . 2 2 . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Nave, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mateorit.destroy()
    otherSprite.destroy(effects.confetti, 500)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
})
let mateorit: Sprite = null
let Nave: Sprite = null
game.splash("Benvingut", "Apreta A per començar i B per disparar")
effects.starField.startScreenEffect()
Nave = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Nave.setPosition(76, 110)
controller.moveSprite(Nave, 100, 100)
Nave.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    mateorit = sprites.createProjectileFromSide(img`
        ................................
        ................................
        ..........bbbbbbbbbbbb..........
        .......bbb331111333333bbb.......
        .....cbb3331111113333333bbb.....
        ....cb33333311113333333111db....
        ...cb3111133333333333311111db...
        ..cbb1111113333333333311111ddc..
        .cbbd1111113333333333331111ddbc.
        cbbbdd11111333333111333311ddbbbc
        cbbbdddd1133333311111333bbbbbbbc
        ccbbbddddbbb33331111dbbbbbbbbbcc
        .ccbbbbbbbbbbbbbbdddbbbbbbbbbcc.
        ..cccbbbbbbbbbbbbbbbbbbbbbbccc..
        .....cccccccccccccccccccccc.....
        ..........bbbdddd11dbb..........
        `, 0, 50)
    mateorit.x += randint(0, scene.screenWidth())
    mateorit.setKind(SpriteKind.Enemy)
})
