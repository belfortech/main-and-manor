import offmarketIcon from '../../assets/images/off market.png'
import key3 from '../../assets/images/Key3.png'

export default function Offmarket(){
    return(
        <div className="bg-[#6D6E79] p-4 py-14 md:py-28 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3 space-y-6">
                <h3 className="w-fit text-[8px] md:text-[16px] text-white p-2 uppercase border rounded" >private collection</h3>
            <h3 className="text-[12px] md:text-[22px] font-semibold text-white">Off-Market Opportunities</h3>
            <p className="text-[10px] md:text-[12px] text-[#F4EFEA]">"Access exclusive villas, townhomes, and luxury residences not available online. 
                Offered <br/> privately through our client network."</p>

                <p className="text-[10px] md:text-[12px] text-[#F4EFEA] mt-2">Some properties never reach the public market.
                     We make them accessible through verified <br/> buyers and trusted relationships.</p>

                     <div className="mt-4">
                <button className="px-5 py-2 text-[#4D4B47] bg-white border rounded hover:opacity-80 uppercase">Request Access to Off-Market Listings</button>
            </div>
            </div>

<div className="w-fit relative flex items-center">
            <img src={offmarketIcon} alt="off market" className=" max-w-full h-auto object-contain"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="border rounded-full bg-[#4D4B47] border-[#4D4B47] p-2">
                <img src={key3} alt="key3" className="w-5 h-5"/>
                </div>
    <h3 className="text-white font-semibold text-lg">Private Estate</h3>
    <h3 className="text-white font-semibold text-[12px]">Emirates Hills</h3>
  </div>
            </div>
            
            </div>
        </div>
    )
}
