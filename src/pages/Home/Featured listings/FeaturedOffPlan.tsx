import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { fetchOffPlanProperties } from "../../../services/api";


import phonecall from '../../../assets/images/PhoneCall2.png';
import whatsapplogo from '../../../assets/images/Whatsapp.png';
import envelope from '../../../assets/images/Envelope.png';

import Button from '../../../components/ui/Button';
import { offPlanProperties } from '../../../data/properties';

const statusStyles: Record<string, string> = {
  'FOR SELL': 'bg-warmSandstone text-charcoalNoir',
  'FOR RENT': 'bg-urbanTaupe text-white',
};

export default function FeaturedOffPlan() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const navigate = useNavigate();


  const [OffPlanListings, setOffPlanListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchOffPlanProperties()
      .then((data) => {
        setOffPlanListings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return <p className="text-white">Loading offplan listings...</p>;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {OffPlanListings.map((listing) => (
        <motion.div
          key={listing.id}
          className="bg-white rounded-2xl shadow-lg border border-onyx/5 overflow-hidden"
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <div className="relative">
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute top-3 left-3 bg-white/70 px-3 py-1 rounded-full text-xs tracking-[0.15em] text-onyx">
              {listing.type}
            </div>
            <div
              className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[listing.status]}`}
            >
              {listing.status}
            </div>
            <button
              onClick={() => setOpenMenu(openMenu === listing.id ? null : listing.id)}
              className="absolute bottom-3 right-3 h-9 w-9 rounded-full bg-white/80 border border-onyx/10 flex items-center justify-center text-onyx hover:text-urbanTaupe"
            >
              <span className="text-lg">⋯</span>
            </button>

            <AnimatePresence>
              {openMenu === listing.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-14 right-3 w-36 bg-ebony/95 border border-white/10 rounded-xl shadow-glow p-3 flex flex-col gap-3 text-sand"
                >
                  <button className="flex items-center gap-2 text-sm hover:text-warmSandstone transition">
                    <img src={envelope} alt="email" className="w-4 h-4" />
                    Email
                  </button>
                  <button className="flex items-center gap-2 text-sm hover:text-warmSandstone transition">
                    <img src={phonecall} alt="phonecall" className="w-4 h-4" />
                    Call
                  </button>
                  <button className="flex items-center gap-2 text-sm hover:text-warmSandstone transition">
                    <img src={whatsapplogo} alt="whatsapp logo" className="w-4 h-4" />
                    WhatsApp
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-5 space-y-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs tracking-[0.18em] uppercase">
                <p className="text-onyx/60">{listing.location}</p>
                <p className="text-onyx">{listing.price}</p>
              </div>
              <h3 className="text-lg font-semibold font-montserrat text-onyx">{listing.title}</h3>
            </div>

            <div className="flex items-center gap-4 text-sm text-onyx/60">
              <span>{listing.beds} Beds</span>
              <span>{listing.baths} Baths</span>
              <span>{listing.size}</span>
            </div>

            <Button
              variant="outline"
              className="w-full text-onyx border-onyx/40 hover:bg-onyx hover:text-sand"
              onClick={() => navigate(`/listings/viewproperty/${listing.id}`)}
            >
              VIEW PROPERTY
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
