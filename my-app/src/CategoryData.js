import Computers from  './images/computers.jpg';
import Games from './images/videogame.jpg';
import Phones from './images/phone.jpg';
import Tvs from './images/tvs.jpg';
import Headphones from './images/headphones.jpg';
import Clothes from './images/clothes.jpg';
import Shoes from './images/shoes.jpg';
import Toys from './images/toys.jpg';



//an array will contain the data for our thumbnails
class CategoryData {

    static items = [
            {
                id: "Computers",
                image: Computers,
                title : "Computers",
                article: "Find brand new or used computers here"
            },
            {
                id: "Games",
                image: Games,
                title : "Games",
                article: "100's of games here search through"
            },
            {
                id: "Phones",
                image: Phones,
                title : "Phones",
                article: "From the oldest to the newest phones we can hook you up"
            },
            {
                id: "Tvs",
                image: Tvs,
                title : "Tv's",
                article: "From flat screen to curved tv's its here"
            },
            {
                id: "Headphones",
                image: Headphones,
                title : "Headphones",
                article: "From Beats to Bose we got them all"
            },
            {
                id: "Clothes",
                image: Clothes,
                title : "Clothes",
                article: "Gucci or primark we got it all"
            },
            {
                id: "Shoes",
                image: Shoes,
                title : "Shoes",
                article: "Adidas, Nike and many more"
            },
            {
                id: "Toys",
                image: Toys,
                title : "Toys",
                article: "Toys for the children here"
            }
        ];
}
export default CategoryData;