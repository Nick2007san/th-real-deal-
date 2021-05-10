@namespace
class SpriteKind:
    Flash = SpriteKind.create()
Don_Toño: Sprite = None
tiles.set_tilemap(tilemap("""
    Conjunto
"""))
Rocky = sprites.create(assets.image("""
    Rocky
"""), SpriteKind.player)
scene.camera_follow_sprite(Rocky)
tiles.place_on_random_tile(Rocky, assets.tile("""
    Hot Dog Restaurant
"""))
tiles.place_on_random_tile(Don_Toño, assets.tile("""
    Hot Dog Restaurant
"""))
controller.move_sprite(Don_Toño, 100, 100)
controller.move_sprite(Rocky)
Don_Toño = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Hot_dog = sprites.create(assets.image("""
    Hot Dog
"""), SpriteKind.food)
Hot_dog = sprites.create(assets.image("""
    Hot Dog
"""), SpriteKind.food)
Hot_dog = sprites.create(assets.image("""
    Hot Dog
"""), SpriteKind.food)
Hot_dog = sprites.create(assets.image("""
    Hot Dog
"""), SpriteKind.food)
Hot_dog = sprites.create(assets.image("""
    Hot Dog
"""), SpriteKind.food)