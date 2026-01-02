import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import backgroundImage from '../../assets/images/image62.png';
import phonecall from '../../assets/images/PhoneCall2.png';
import whatsapplogo from '../../assets/images/whatsapp.png';

export default function FindNexthome() {
  return (
    <div
      className="relative mt-10 h-[450px] py-16 bg-cover bg-center bg-fixed rounded-[32px] overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      <div className="relative flex flex-col gap-6 items-center justify-center md:py-16 text-center text-sand">
        <h3 className="text-[24px] font-montserrat font-semibold">Let's Find Your Next Home</h3>
        <span className="text-sm text-sand/90">
          "Whether you're buying, selling, or investing, we're here to guide <br />
          you with clarity, confidence, and care."
        </span>
      </div>

      <div className="relative flex items-center justify-center gap-4 mt-4">
        <Button
          variant="primary"
          size="md"
          className="backdrop-blur-md border border-warmSandstone/30 flex items-center gap-2"
        >
          <img src={phonecall} alt="call" className="w-4 h-4" />
          CONTACT US
        </Button>
        <motion.button
          className="px-5 py-2 text-sand border rounded-full border-sand/60 hover:bg-sand hover:text-charcoal flex items-center gap-2 transition"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <img src={whatsapplogo} alt="whatsapp" className="w-4 h-4" />
          WHATSAPP
        </motion.button>
      </div>
    </div>
  );
}
