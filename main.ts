namespace SpriteKind {
    export const Flash = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (otherSprite == Hot_Dog_1) {
        tiles.placeOnRandomTile(Hot_Dog_1, assets.tile`Hot Dog Restaurant`)
    }
    if (otherSprite == Hot_Dog_2) {
        tiles.placeOnRandomTile(Hot_Dog_2, assets.tile`Hot Dog Restaurant`)
    }
    if (otherSprite == Hot_Dog_3) {
        tiles.placeOnRandomTile(Hot_Dog_3, assets.tile`Hot Dog Restaurant`)
    }
    if (otherSprite == Hot_Dog_4) {
        tiles.placeOnRandomTile(Hot_Dog_4, assets.tile`Hot Dog Restaurant`)
    }
    if (otherSprite == Hot_Dog_5) {
        tiles.placeOnRandomTile(Hot_Dog_5, assets.tile`Hot Dog Restaurant`)
    }
    info.changeScoreBy(1)
    if (info.score() == 5) {
        game.over(true)
        music.jumpUp.play()
    }
})
let Hot_Dog_5: Sprite = null
let Hot_Dog_4: Sprite = null
let Hot_Dog_3: Sprite = null
let Hot_Dog_2: Sprite = null
let Hot_Dog_1: Sprite = null
let Don_Toño: Sprite = null
tiles.setTilemap(tilemap`Conjunto`)
let Rocky = sprites.create(assets.image`Rocky`, SpriteKind.Player)
scene.cameraFollowSprite(Rocky)
tiles.placeOnRandomTile(Rocky, assets.tile`Hot Dog Restaurant`)
tiles.placeOnRandomTile(Don_Toño, assets.tile`Hot Dog Restaurant`)
controller.moveSprite(Don_Toño, 100, 100)
controller.moveSprite(Rocky)
Don_Toño = sprites.create(img`
    . . . . 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 4 1 1 1 1 1 1 1 
    1 1 1 4 4 4 1 1 1 1 1 1 
    1 1 1 f 4 4 4 1 f 1 1 1 
    1 4 1 4 f 4 4 f 4 1 4 1 
    1 4 4 f 2 4 4 f 2 4 4 1 
    f e 4 d d d d d d 4 e 1 
    . f e d d f f d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Enemy)
Hot_Dog_1 = sprites.create(assets.image`Hot Dog`, SpriteKind.Food)
tiles.placeOnRandomTile(Hot_Dog_1, assets.tile`myTile8`)
Hot_Dog_2 = sprites.create(assets.image`Hot Dog`, SpriteKind.Food)
tiles.placeOnRandomTile(Hot_Dog_2, assets.tile`myTile3`)
Hot_Dog_3 = sprites.create(assets.image`Hot Dog`, SpriteKind.Food)
tiles.placeOnRandomTile(Hot_Dog_3, assets.tile`myTile2`)
Hot_Dog_4 = sprites.create(assets.image`Hot Dog`, SpriteKind.Food)
tiles.placeOnRandomTile(Hot_Dog_4, assets.tile`myTile3`)
Hot_Dog_5 = sprites.create(assets.image`Hot Dog`, SpriteKind.Food)
tiles.placeOnRandomTile(Hot_Dog_5, assets.tile`myTile2`)
info.startCountdown(30)
let Score = 0
