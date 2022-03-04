class Enemy extends MovableObject {
    
    height = 100;
    width = 80;
    y = 330;
    IMAGES_WALKING = [
        './img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        './img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        './img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];


    constructor() {
        super().loadImage('./img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png');  
        this.x = 400 + Math.random() * 2500; // Zahl zw 200 und 700
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.2 + Math.random() * 0.4;
        this.animate();
        
    }

    animate() {
        setInterval( () => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 450);
        
    }


}
    

