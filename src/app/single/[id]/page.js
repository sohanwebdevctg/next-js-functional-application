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
    <div className='px-5 sm:px-4 md:px-4 lg:px-0'>
      {/* content section start */}
      <div className='container mx-auto  h-full w-full py-10 px-3 sm:px-5 md:px-4 lg:px-10 xl:px-12'>
        {/* item section start */}
        <div className="sm:flex sm:justify-between sm:items-center">
          {/* image section start */}
          <div className="w-full sm:w-[50%]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia commodi magnam animi, debitis sapiente maxime iusto provident excepturi dolores impedit hic at quasi repellendus temporibus consequatur perspiciatis illo minima accusantium id sint dolore. Ea molestias aut deleniti a nulla saepe animi. Excepturi quam quibusdam atque saepe molestias illo quae unde ipsum assumenda fugit? Suscipit, cupiditate impedit ducimus quidem dolor aspernatur repudiandae voluptates assumenda sit. Dicta laboriosam ad a autem architecto voluptates nemo voluptatem, incidunt ratione quod quo cumque atque deleniti aliquam culpa, impedit minus magni perferendis officiis molestiae voluptatum. At cumque repellat tempora accusantium nihil illum incidunt, expedita dolore sapiente nesciunt exercitationem nulla rem neque pariatur obcaecati molestiae iste harum tempore provident quis! Earum inventore officia, accusamus, distinctio enim aut itaque quasi perferendis, necessitatibus non provident sint laudantium porro ea numquam maxime dolor quae? Laborum commodi a ad eum esse neque dolore iure expedita minima iusto porro aut quasi, numquam eligendi quis corrupti. Incidunt vitae atque ipsam natus exercitationem veritatis adipisci dolorem tempora unde ex hic suscipit itaque, eos ad aliquam, doloremque accusamus laborum asperiores! Deleniti dolores, beatae ullam nesciunt aut recusandae cumque soluta magni fuga ducimus, quam quidem neque sunt vitae sed quos quisquam temporibus corporis voluptates praesentium.</p>
          </div>
          {/* image section end */}
          {/* details section start */}
          <div className="w-full sm:w-[50%] bg-[#F5F5F5]">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia commodi magnam animi, debitis sapiente maxime iusto provident excepturi dolores impedit hic at quasi repellendus temporibus consequatur perspiciatis illo minima accusantium id sint dolore. Ea molestias aut deleniti a nulla saepe animi. Excepturi quam quibusdam atque saepe molestias illo quae unde ipsum assumenda fugit? Suscipit, cupiditate impedit ducimus quidem dolor aspernatur repudiandae voluptates assumenda sit. Dicta laboriosam ad a autem architecto voluptates nemo voluptatem, incidunt ratione quod quo cumque atque deleniti aliquam culpa, impedit minus magni perferendis officiis molestiae voluptatum. At cumque repellat tempora accusantium nihil illum incidunt, expedita dolore sapiente nesciunt exercitationem nulla rem neque pariatur obcaecati molestiae iste harum tempore provident quis! Earum inventore officia, accusamus, distinctio enim aut itaque quasi perferendis, necessitatibus non provident sint laudantium porro ea numquam maxime dolor quae? Laborum commodi a ad eum esse neque dolore iure expedita minima iusto porro aut quasi, numquam eligendi quis corrupti. Incidunt vitae atque ipsam natus exercitationem veritatis adipisci dolorem tempora unde ex hic suscipit itaque, eos ad aliquam, doloremque accusamus laborum asperiores! Deleniti dolores, beatae ullam nesciunt aut recusandae cumque soluta magni fuga ducimus, quam quidem neque sunt vitae sed quos quisquam temporibus corporis voluptates praesentium.</p>
          </div>
          {/* details section end */}
        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default SingleProductPage;