
const Card = ({ price, imgUrl, name, rate, per, img1, img2, img3 }) => {
  return (
    <div className=" p-5 rounded-md box relative w-[250px]">
      <div className="icon">
        <div className="icon-contain">
          <img src={imgUrl} alt="bitCoin" className="w-12" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-14 gap-3">
        <span className="text-[#737BAE] text-[12px]">{name}</span>

        <div className="bg-[#14172B] flex items-center gap-4 w-[100%] justify-center py-1 rounded-full">
          <h3 className="text-[#ECF0FF] text-[16px]">{rate}</h3>
          <span className={`text-[#00FFA3] text-[12px]`}>{per}</span>
        </div>

        <span className="text-[#737BAE] text-[12px]">Price</span>

        <div className="bg-[#14172B] flex items-center gap-2 w-[100%] justify-center py-1 rounded-full">
          <h3 className="text-[#ECF0FF] text-[16px]">{price}</h3>
        </div>

        <span className="text-[#737BAE] text-[12px] uppercase">tvl</span>

        <div className="bg-[#14172B] flex items-center gap-2 px-6 py-1 rounded-full">
          <div>
            <img src={img1} alt="solana" className="w-5" />
          </div>
          <div>
            <img src={img2} alt="solana" className="w-5" />
          </div>
          <div>
            <img src={img3} alt="solana" className="w-5" />
          </div>
        </div>

        <span className="text-[#737BAE] text-[12px]">popular pairs</span>
      </div>
    </div>
  );
};

export default Card;
