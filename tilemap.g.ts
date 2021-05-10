// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0c000800010101010101010101010101020202020202020202020202020202020202020202020202030203030203030203030203030203030203030203030203020202020202020202020202020202020202020202020202010101010101010101010101`, img`
. . . . . . . . . . . . 
2 . . . . . . . . . . . 
2 . . . . . . . . . . . 
2 . . . . . . . . . . . 
2 . . . . . . . . . . . 
2 . . . . . . . . . . . 
2 . . . . . . . . . . . 
. . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
            case "Conjunto":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000010000000000000000030303030303030203030303030303030204020402040202020402040204020403030303030303020303030303030303040204020402040204020402040204020303030303030302030303030303030302040204020402020204020402040204030303030303030203030303030303030402040204020402040204020402040203030303030303020303030303030303090502060707080206070707080209050509030303030302030303030303050905050505050505020505050505050505050909050509050205050905050509050505050905050502050505050905050503030303030303030303030303030303`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.castle.tileGrass2,sprites.builtin.forestTiles21,sprites.builtin.forestTiles22,sprites.builtin.forestTiles23,sprites.castle.tileGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "Hot Dog Restaurant":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "Houses":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
