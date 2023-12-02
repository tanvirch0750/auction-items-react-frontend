/* eslint-disable react/no-unescaped-entities */
function DetailSection() {
  return (
    <div className=" bg-gray-900 p-2">
      <h2 className="text-center capitalize text-emerald-500">
        Product Details
      </h2>
      <div className="card w-full bg-gray-900 shadow-xl mt-4">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="mt-4 px-2">
          <h2 className="card-title text-emerald-600">
            Neymar's Signed Jersey
          </h2>
          <p className="mt-6">
            <span>Category:</span>
            <span className=" inline-block pl-2 text-gray-400">Shoe</span>
          </p>
          <p className="mt-6">
            <span>Auction Date:</span>
            <span className=" inline-block pl-2 text-gray-400">
              19 December, 2020
            </span>
          </p>
          <p>
            <span>Auction Time:</span>
            <span className=" inline-block pl-2 text-gray-400">19.00</span>
          </p>
          <p>
            <span>Initial Bidding Price:</span>
            <span className=" inline-block pl-2 font-bold text-orange-600">
              10000
            </span>
          </p>
          <div className="card-actions flex justify-between mt-6">
            <p>
              Description:{' '}
              <span className=" text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                maiores. Autem error ducimus amet quo? Magni ullam iusto
                incidunt. Recusandae error rem minus ex natus maxime ratione.
                Alias saepe dolorem sit laudantium voluptatem aut nobis
                consectetur, fugiat amet asperiores exercitationem architecto
                eius assumenda facilis dolore. Obcaecati repudiandae dolorum
                ullam numquam. Nisi voluptates deserunt unde tempore maiores
                sint voluptatibus quod vitae, voluptate eius nobis molestias
                dicta minima libero quibusdam, in sed rem! Fuga, sint velit ex
                dolores suscipit doloremque adipisci animi illo quis debitis
                dolore deserunt, facere labore aspernatur odio ea pariatur!
                Dolore unde veritatis assumenda asperiores obcaecati est,
                deserunt dicta?{' '}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
