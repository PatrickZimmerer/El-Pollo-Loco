class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }

    checkCollisions(){
        setInterval(() => {
            this.level.enemies.forEach( (enemy) => {
                if(this.character.isColliding(enemy) ){
                    console.log('collision with', enemy)
                }
            });
        }, 1000);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds); 
        this.addObjectsToMap(this.level.enemies);
          
        this.addToMap(this.character);       

        this.ctx.translate(-this.camera_x, 0);
        let self = this;

        requestAnimationFrame(function() {
            self.draw();
        });
        }

        addObjectsToMap(objects){
            objects.forEach(object => {
                this.addToMap(object);
            });
        }

        addToMap(movableObj) {
            if(movableObj.otherDirection) {
                this.ctx.save();
                this.ctx.translate(movableObj.width, 0);
                this.ctx.scale(-1, 1 );
                movableObj.x = movableObj.x * -1;
            }
            movableObj.draw(this.ctx);
            movableObj.drawFrame(this.ctx);


            if (movableObj.otherDirection) {
                this.ctx.restore();
                movableObj.x = movableObj.x * -1;
            }
            
        }
    }