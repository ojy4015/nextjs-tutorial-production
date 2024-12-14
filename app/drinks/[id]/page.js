import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import drinkImg from './drink.jpg';
// console.log('drinkImg : ', drinkImg);
import Image from 'next/image';
const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch a drink...');
  }
  return res.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  // console.log('data :  ', data);

  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      {/* for remote image */}
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
      />
      {/* for local static image */}
      {/* <Image src={drinkImg} className="w-48 h-48 rounded-lg" alt="drink" /> */}
      {/* <img src={drinkImg.src} /> */}
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};
export default SingleDrinkPage;

// const SingleDrinkPage = async ({ params }) => {
//   return <div>SingleDrinkPage</div>;
// };
// export default SingleDrinkPage;
