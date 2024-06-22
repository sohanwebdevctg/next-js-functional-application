import image1 from '../../../../public/productcard/bed/image1.png';
import image2 from '../../../../public/productcard/bed/image2.png';
import image3 from '../../../../public/productcard/bed/image3.png';
import image4 from '../../../../public/productcard/bed/image4.png';
import image5 from '../../../../public/productcard/bed/image5.png';

//singleProduct items
const singleProduct = [
  {
    id:1,
    image : image1,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  },
  {
    id:2,
    image : image2,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  },
  {
    id:3,
    image : image5,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  },
  {
    id:4,
    image : image3,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  },
  {
    id:5,
    image : image4,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  },
  {
    id:6,
    image : image5,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  },
  {
    id:7,
    image : image3,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  },
  {
    id:8,
    image : image2,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  },
  {
    id:9,
    image : image1,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  },
  {
    id:10,
    image : image4,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  },
  {
    id:11,
    image : image5,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  },
  {
    id:12,
    image : image1,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  },
  {
    id:13,
    image : image2,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  }
]

const SingleProductPage = ({params}) => {
  
  const singleItem = singleProduct.filter((data) => data.id == params.id)
  console.log(singleItem)



  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

export default SingleProductPage;