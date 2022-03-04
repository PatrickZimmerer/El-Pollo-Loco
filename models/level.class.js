class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2100;
    level_bottom_y = 180;
    level_top_y = -165;

    constructor(enemies, clouds, backgroundObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}