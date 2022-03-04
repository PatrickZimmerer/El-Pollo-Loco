class MovableObject {
    x = 100;
    y = 130;
    img;
    height = 200;
    width = 120;
    imageCache = {};
    currentImage = 0;
    speed = 0.04;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

    applyGravity(){
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }            
        }, 1000 / 25);
    }

    isAboveGround(){
        return this.y < 80;
    }
    
    loadImage(path){
        this.img = new Image();  // this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }
    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
        
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    drawFrame(ctx){
        if(this instanceof Character || this instanceof Enemy || this instanceof Endboss){
            ctx.beginPath();
            ctx.lineWidth = '4';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
    
    isColliding(movableObj) {
        return this.x + this.width > movableObj.x && this.y + this.height >
            movableObj.y && this.x < movableObj.x && this.y < movableObj.y
             + movableObj.height
    }

    playAnimation(images){
        let i = this.currentImage % images.length; // i = 0, 1, 2, ... 6, 0, 1, 2
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveLeft(){
        this.x -= this.speed;
         
    }
    
    moveRight(){
        this.x += this.speed;
    }

    jump(){
        this.speedY = 30;
        this.jumping_sound.play();
        if (this.y < 0) {
            this.speedY = 15;
        }
            if (this.y < -50) {
                this.speedY = 0;
            }
                       
    }
    
}