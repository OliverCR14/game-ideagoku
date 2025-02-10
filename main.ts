function doSomething () {
    tiles.setCurrentTilemap(tilemap`level2`)
}
let Goku = sprites.create(assets.image`goku`, SpriteKind.Player)
controller.moveSprite(Goku, 100, 100)
let goku_battle_form = sprites.create(assets.image`goku battle form`, SpriteKind.Player)
