class Character extends MovableObject {

    height = 360;
    width = 160;
    y = 80;
    x = 0;
    speed = 5;
    IMAGES_IDLE = [
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png'
    ]
    IMAGES_WALKING = [
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    IMAGES_JUMPING = [
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'
    ]
    world;
    walking_sound = new Audio('./audio/walking-sound.mp3');
    jumping_sound = new Audio('./audio/jump.mp3')

    constructor(){
        super().loadImage('./img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }

    animate() {
        
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
                this.otherDirection = false;
                this.moveRight();  
                this.walking_sound.play(); 
            }
            
            if (this.world.keyboard.LEFT && this.x > -1000){
               this.otherDirection = true;
               this.moveLeft();
               this.walking_sound.play();
                
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround() 
                || this.world.keyboard.UP && !this.isAboveGround()){
                this.jump();    
            }

            this.world.camera_x = -this.x + 80;
        }, 1000/60);

        setInterval(() => {

            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
                this.jumping_sound.play();
                this.speedY -= this.acceleration;
            }else { 
                this.playAnimation(this.IMAGES_IDLE)
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
                
             }
        }, 100);
        
    }
    
}