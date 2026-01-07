import {useState, useEffect} from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { fetchPropertyById } from '../../services/api';
import { fetchAllProperties } from '../../services/api';


import location from '../../assets/images/location.png'
import bed from '../../assets/images/Bed.png'
import shareIcon from '../../assets/images/share.png'
import saveIcon from '../../assets/images/Save.png'
import phonecall from '../../assets/images/PhoneCall2.png'
import whatsapplogo from '../../assets/images/Whatsapp.png'
import envelope from '../../assets/images/Envelope.png'


interface PropertyItem {
  id: number;
  type: string;
  status: string;
  image: string;
  location: string;
  title: string;
  price: string;
  beds: number;
  baths: number;
  size: string;
}

export default function Viewproperty(){


  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState<PropertyItem | null>(null);
  const [suggestedProperties, setSuggestedProperties] = useState<PropertyItem[]>([]);
  const [openMenu2, setOpenMenu2] = useState<number | null>(null);



  useEffect(() => {
    if (!id) return;
  
    Promise.all([
      fetchPropertyById(Number(id)),
      fetchAllProperties()
    ])
      .then(([propertyData, allProperties]) => {
        setProperty(propertyData);
  
        const suggestions = allProperties
          .filter((p: PropertyItem) => p.id !== Number(id))
          .slice(0, 6);
  
        setSuggestedProperties(suggestions);
        setLoading(false);
      })
      .catch(() => {
        setProperty(null);
        setLoading(false);
      });
  }, [id]);
  

  

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="mt-40 text-center">
          <h2 className="text-xl font-semibold font-playfair text-charcoalNoir">Property not found</h2>
        </div>
        <Footer />
      </>
    );
  }



    return(
        <>
        <Navbar/>
        <div className="relative w-full h-[300px] md:h-[450px] mt-20">

  {/* Image section */}
  <img
    src={property.image}
    alt={property.title}
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/30"></div>

  {/* Back button */}
  <button
    onClick={() => navigate("/listings")}
    className="absolute top-3 left-2 px-3 py-1 text-white bg-white/30 backdrop-blur-md z-20 rounded font-inter"
  >
    Back
  </button>

  {/* content on top of the image */}
  <div className="absolute bottom-4 left-3 z-20">
    <div className="flex flex-col gap-2">

      <button className="px-3 py-1 text-charcoalNoir bg-white rounded w-fit text-sm md:text-base font-lato font-semibold">
        {property.status}
      </button>

      <h3 className="text-white font-semibold text-[14px] md:text-[20px] font-playfair">
        {property.title}
      </h3>

      <div className="flex items-center gap-2">
        <img src={location} alt="location" className="w-6 h-6 md:w-8 md:h-8" />
        <h3 className="text-white text-[13px] md:text-[18px] font-lato">
          {property.location}
        </h3>
      </div>

    </div>
  </div>

</div>


        <div className="bg-manorIvory p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {/* ===== bedrooms section ====*/}
                        <div className="flex flex-row items-center gap-3">
                        <img src={bed} alt="bed" className="w-5 h-5"/>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[12px] text-urbanTaupe font-lato">Bedrooms</h3>
                            <h3 className="text-[12px] font-semibold text-charcoalNoir font-montserrat">{property.beds}</h3>
                            </div>
                        </div>
{/* ===== bathrooms secion === */}
                        <div className="flex flex-row items-center gap-3">
                        <img src={bed} alt="bed" className="w-5 h-5"/>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[12px] text-urbanTaupe font-lato">Bathrooms</h3>
                            <h3 className="text-[12px] font-semibold text-charcoalNoir font-montserrat">{property.baths}</h3>
                            </div>
                        </div>
{/* ========= area section =======*/}
                        <div className="flex flex-row items-center gap-3">
                        <label>
                            <input type="checkbox"/>
                            </label>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-[12px] text-urbanTaupe font-lato">Area</h3>
                            <div className="flex items-center gap-1">
  <span className="text-[12px] font-semibold text-charcoalNoir font-montserrat">{property.size}</span>
</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full border-t border-warmSandstone mt-8"></div>

                    {/* ========= about this property =========*/}
                    <div className="mt-8">
                    <h3 className="text-[12px] md:text-[18px] text-charcoalNoir font-semibold font-playfair">About this Property</h3>
                    <p className="mt-5 text-[12px] md:text-[14px] text-charcoalNoir font-cormorant italic">"Custom-built Mediterranean masterpiece."</p>

                    <p className="mt-5 text-[12px] md:text-[14px] text-deepManorSlate font-lato">Experience the epitome of luxury living in Palm Jumeirah. This exceptional villa offers unrivaled design and comfort.
                     Perfectly positioned to offer both privacy and connectivity, every detail has
                     been curated for the discerning resident.</p>
                    <p className="mt-5 text-[12px] md:text-[14px] text-deepManorSlate font-lato">Featuring spacious living areas, floor-to-ceiling windows
                        that flood the space with natural light,
                        and premium finishes throughout. The property flows seamlessly from indoor
                        to outdoor spaces, perfect for entertaining or quiet relaxation.</p>

                    </div>

                    {/* === property features scetion === */}
                    <div className="mt-8">
                        <h3 className="text-[12px] md:text-[14px] text-urbanTaupe uppercase font-lato font-semibold">Property Features</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 list-none mt-6">

    <li className="flex items-center gap-2">
  <span className="text-urbanTaupe">✦</span>
  <span className="font-normal text-[14px] font-lato text-charcoalNoir"> Grand Entrance Hall</span>
</li>

<li className="flex items-center gap-2">
  <span className="text-urbanTaupe">✦</span>
  <span className="font-normal text-[14px] font-lato text-charcoalNoir">Private Terrace</span>
</li>

<li className="flex items-center gap-2">
  <span className="text-urbanTaupe">✦</span>
  <span className="font-normal text-[14px] font-lato text-charcoalNoir">Walk-in Wardrobes</span>
</li>

<li className="flex items-center gap-2">
  <span className="text-urbanTaupe">✦</span>
  <span className="font-normal text-[14px] font-lato text-charcoalNoir">Dedicated Parking</span>
</li>

<li className="flex items-center gap-2">
  <span className="text-urbanTaupe">✦</span>
  <span className="font-normal text-[14px] font-lato text-charcoalNoir">Designer Kitchen</span>
</li>



<li className="flex items-center gap-2">
<span className="text-urbanTaupe">✦</span>
<span className="font-normal text-[14px] font-lato text-charcoalNoir">Smart Home System</span>
</li>

<li className="flex items-center gap-2">
<span className="text-urbanTaupe">✦</span>
<span className="font-normal text-[14px] font-lato text-charcoalNoir">Premium Views</span>
</li>

<li className="flex items-center gap-2">
<span className="text-urbanTaupe">✦</span>
<span className="font-normal text-[14px] font-lato text-charcoalNoir">Concierge Service</span>
</li>
</ul>
                    </div>
                </div>
                <div className="bg-white p-3">
                  <div className="flex flex-col gap-4">
                <h3 className="text-[12px] uppercase font-lato text-urbanTaupe">selling price</h3>
                <h3 className="text-[12px] md:text-[16px] text-black font-bold font-playfair">{property.price}</h3>
                <div className="flex flex-row space-x-6 items-center">
                  <div className="border rounded  flex items-center gap-2">
                  <button
                  className="px-5 py-2 text-[12px] md:text-[14px] text-gray-500 hover:opacity-70 font-inter">
                     <img src={shareIcon} alt="share" className="w-5 h-5"/>

                    SHARE</button>
                  </div>

                  <div className="border rounded flex items-center gap-2">
                  <button
                  className="px-5 py-2 text-[12px] md:text-[14px] text-gray-500 hover:opacity-70 font-inter">
                     <img src={saveIcon} alt="save" className="w-5 h-5"/>

                    SAVE</button>
                  </div>
                </div>
                </div>
                <div className="w-full border-t border-gray-400 mt-5"></div>
                <div className="mt-5">
              <h3 className="text-[12px] md:text-[16px] font-bold text-gray-500 font-playfair">Interested?</h3>


{/* form section */}
<div className="mt-4 flex flex-col gap-6">
  <form>
  <input
  type="text"
  required
  placeholder="FULL NAME"
  className="w-full border-b border-gray-400 focus:outline-none py-3 text-[8px] md:text-[14px] font-lato"
  />

<input
  type="text"
  required
  placeholder="Email Address"
  className="w-full border-b border-gray-400 focus:outline-none py-3 text-[8px] md:text-[14px] font-lato"
  />

<input
  type="number"
  required
  placeholder="Phone Number"
  className="w-full border-b border-gray-400 focus:outline-none py-3 text-[8px] md:text-[14px] font-lato"
  />

<input
  type="text"
  required
  placeholder="I am Interested in this Property..."
  className="w-full border-b border-gray-400 focus:outline-none py-3 text-[8px] md:text-[14px] font-lato"
  />

{/* === buttons section === */}
<div className="mt-4">
                <div className="flex flex-row items-center justify-between">
                  <button className="px-5 py-2 border rounded text-white text-[12px] bg-charcoalNoir uppercase hover:opacity-80 font-montserrat">Request Viewing</button>
                  <button className="px-5 py-2 border rounded text-[12px] uppercase  text-charcoalNoir border-charcoalNoir hover:opacity-80 font-montserrat">WhatsApp</button>

                </div>
              </div>
              </form>
              </div>

            </div>
            </div>
            </div>



            </div>

     {/* === you may also like section === */}
<div className="bg-white p-4 mt-10">
  <h3 className="text-[12px] md:text-[14px] text-black uppercase font-semibold font-playfair">You May Also Like</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

    {suggestedProperties.map((suggProp) => (

  <div
    key={suggProp.id}
    className="mt-2 transition-transform duration-200 hover:translate-y-2"
  >
    <div className="relative">
      <img src={suggProp.image} alt={suggProp.title} className="w-full h-64 object-cover"/>

      <span className="absolute top-2 left-2 bg-white/10 backdrop-blur-md text-white text-xs px-2 py-1 rounded font-lato">
        {suggProp.type}
      </span>

      <span className="absolute top-2 right-2 bg-manorIvory text-charcoalNoir text-xs px-2 py-1 rounded font-lato">
        {suggProp.status}
      </span>
    </div>

    <div className="flex flex-col space-y-2 mt-5">
      <div className="flex flex-row justify-between">
        <h3 className="text-sm text-urbanTaupe font-lato">
          {suggProp.location}
        </h3>

        <div className="relative">
          <button
            onClick={() => setOpenMenu2(openMenu2 === suggProp.id ? null : suggProp.id)}
            className="text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
            </svg>
          </button>

          {openMenu2 === suggProp.id && (
            <div className="absolute right-0 top-5 w-20 bg-warmSandstone rounded-lg shadow-lg border z-50">
              <button className="flex flex-col items-center w-full px-3 py-1 text-xs text-charcoalNoir font-lato">
                <img src={envelope} className="w-4 h-4" />
                Email
              </button>
              <button className="flex flex-col items-center w-full px-4 py-2 text-sm text-black font-lato">
                <img src={phonecall} className="w-4 h-4" />
                Call
              </button>
              <button className="flex flex-col items-center w-full px-4 py-2 text-xs text-black font-lato">
                <img src={whatsapplogo} className="w-4 h-4" />
                WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>

      <span className="text-sm font-semibold text-black font-playfair">{suggProp.title}</span>
      <span className="text-sm text-black opacity-80 font-lato">{suggProp.price}</span>
    </div>

    <div className="flex flex-row justify-between items-center mt-3">
      <span className="text-sm text-black opacity-50 font-lato">{suggProp.beds} Beds</span>
      <span className="text-sm text-black opacity-50 font-lato">{suggProp.baths} Baths</span>
      <span className="text-sm text-black opacity-50 font-lato">{suggProp.size}</span>
    </div>

    <div className="mt-3">
      <button
        onClick={() => navigate(`/listings/viewproperty/${suggProp.id}`)}
        className="px-5 py-2 w-full text-charcoalNoir opacity-70 text-sm border rounded border-charcoalNoir border-opacity-50 hover:opacity-100 font-montserrat">
        VIEW PROPERTY
      </button>
    </div>
  </div>
))}

</div>
</div>

        <Footer/>
        </>
    )
}
