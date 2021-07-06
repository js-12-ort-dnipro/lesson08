

    function loadImage(url){

        return new Promise((resolve, reject) => {
            
            let image = new Image();

            image.onload = () => resolve(image);

            image.src = url;

        });

    }


    (async function(){

        const CAR_URL = "./assets/images/car.png";
        const ROAD_URL = "./assets/images/road.jpg";

        let canvas = document.querySelector("canvas");

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        let context = document.querySelector("canvas").getContext("2d");

        let road_image = await loadImage(ROAD_URL);
        let car_image  = await loadImage(CAR_URL);
       
        context.drawImage(road_image, 0, 0, 1024, 400, 0, 0, 1024, 400);

        context.drawImage(car_image, 50, 50, 90, 140);
             
    })();
