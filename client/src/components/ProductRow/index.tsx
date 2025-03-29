import MastiSense1 from '../../images/MastiSense1.jpg'
import MastiSense2 from '../../images/MastiSense2.png'

const ProductRow = ({
  productName
}: any) => {

  if (productName === "mastisense") {
    return <div className="grid grid-cols-[40vw_1fr_40vw] overflow-hidden">
      <div className="relative z-[-1]">
        <img
          src={MastiSense1}
          alt="ms1"
          className="appear w-full z-[-2] h-full object-cover"
        />
      </div>
      <div className="relative z-[1] skew-x-[-21deg] w-[180%] left-[-40%] bg-blue-800">
        <div className='skew-x-[21deg] flex justify-center items-center h-full'>
          <div className="product-title text-6xl font-kanit font-bold tracking-wider text-white ">
            <div>MastiSense<sup className="text-xs top-[-30px]">TM</sup></div>
          </div>
        </div>
      </div>
      <div className="relative z-[-1]">
        <img
          src={MastiSense2}
          alt="ms2"
          className="appear w-full z-[-2] h-full object-cover"
        />
      </div>
    </div>
  }

  return <></>
}

export default ProductRow;