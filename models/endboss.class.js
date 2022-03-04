class Endboss extends MovableObject {

    height = 410;
    width = 280;
    y = 50;
    x = 2000;
    speed = 0.1;
    IMAGES_WALKING = [
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
    ];


    constructor() {
        super().loadImage('./img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png');
        this.loadImages(this.IMAGES_WALKING); 
        this.animate();
    }

    animate() {
        setInterval( () => {
            this.moveLeft();
        }, 1000 / 60);
        
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 250);

    }

}