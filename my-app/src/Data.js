import Macbook from './images/Macbook.jpg';
import IphoneX from './images/IphoneX.jpeg';
import BlackOps from './images/BlackOps.png';
import Bose from './images/bose.jpg';
import Yeezy from './images/yeezy.jpg';
import Vans from './images/vans.jpg';
import Curved from './images/curved.jpg';
import Car from './images/car.jpg';


//an array will contain the data for our thumbnails
class Data {

    static items = [
            {
                id: "Computer",
                image: Macbook,
                title : "Macbook Air",
                article: "Macbook Air 2013 model 13 inch"
            },
            {
                id: "Phones",
                image: IphoneX,
                title : "IphoneX",
                article: "Iphone X brand new in the box"
            },
            {
                id: "Games",
                image: BlackOps,
                title : "Black Ops 3",
                article: "Finished the game need some money"
            },
            {
                id: "Headphones",
                image: Bose,
                title : "Bose Headphones",
                article: "Used Bose noise cancelling headphones"
            },
            {
                id: "Shoes",
                image: Yeezy,
                title : "Yeezy Offwhite",
                article: "Yeezy Offwhite collab for resale"
            },
            {
                id: "Clothes",
                image: Vans,
                title : "Vans Hoodie",
                article: "Vans x Peanut Limited Edition Hoodie"
            },
            {
                id: "Tvs",
                image: Curved,
                title : "Curved Tv",
                article: "50Inch Curved Ultra HD TV"
            },
            {
                id: "Toys",
                image: Car,
                title : "Toy car",
                article: "Used toy car my child out grew toys"
            }
        ];
}
export default Data;