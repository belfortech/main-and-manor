import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import article1 from '../../assets/images/article1.png'
import calendar from '../../assets/images/calendar.png'
import xcircle from '../../assets/images/XCircle.png'

interface JournalModalProps{
    isOpen:boolean
    onClose:() => void
}

const JournalModal: React.FC<JournalModalProps> = ({ isOpen, onClose}) =>{
    if (!isOpen) return null;

    return(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-warmSandstone hover:scale-110 transition-all duration-300 group"
                        >
                            <img src={xcircle} alt="close" className="w-6 h-6 group-hover:opacity-80"/>
                        </button>

                        {/* Hero Image */}
                        <div className="relative">
                            <img
                                src={article1}
                                alt="article"
                                className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-12">
                            {/* Meta */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-2 text-urbanTaupe">
                                    <img src={calendar} alt="calendar" className="w-5 h-5"/>
                                    <span className="text-sm font-lato">Oct 12, 2024</span>
                                </div>
                                <span className="w-1 h-1 rounded-full bg-warmSandstone"></span>
                                <span className="text-sm text-urbanTaupe font-montserrat tracking-wider uppercase">Market Insights</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-charcoalNoir mb-6 font-playfair leading-tight">
                                Where Dubai's Property Market Is Heading in 2025
                            </h1>

                            {/* Introduction */}
                            <p className="text-base md:text-lg text-deepManorSlate mb-8 font-lato leading-relaxed">
                                Dubai's real estate market has entered a new chapter—one defined by stability, long-term confidence,
                                and a shift toward quality-driven developments. As we move through 2025, the focus is no longer just on rapid growth.
                                It's on sustainable value, architectural refinement, and communities built for real life.
                            </p>

                            {/* Content Sections */}
                            <div className="space-y-8">
                                {/* Section 1 */}
                                <div>
                                    <h2 className="text-xl font-semibold text-charcoalNoir mb-3 font-playfair">
                                        1. Demand Remains Strong—But More Considered
                                    </h2>
                                    <p className="text-base text-deepManorSlate font-lato leading-relaxed">
                                        Over the last four years, Dubai saw record-breaking demand from global buyers.
                                        In 2025, that demand continues—but with a noticeable shift. Buyers are asking better questions,
                                        investors are choosing communities with long-term fundamentals,
                                        and end-users are prioritizing lifestyle, schools, and design over pure speculation.
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div>
                                    <h2 className="text-xl font-semibold text-charcoalNoir mb-3 font-playfair">
                                        2. End-User Communities Are Leading the Market
                                    </h2>
                                    <p className="text-base text-deepManorSlate font-lato leading-relaxed">
                                        Communities built around greenery, walkability, and modern amenities are
                                        outperforming high-rise clusters. Top performers include Dubai Hills (lifestyle, schools, parks), Arabian Ranches
                                        (mature suburban charm), and Sobha Hartland (quality construction).
                                        These areas offer emotional and functional value—not just ROI.
                                    </p>
                                </div>

                                {/* Section 3 */}
                                <div>
                                    <h2 className="text-xl font-semibold text-charcoalNoir mb-3 font-playfair">
                                        3. The Rise of Architecturally-Led Developments
                                    </h2>
                                    <p className="text-base text-deepManorSlate font-lato leading-relaxed">
                                        Design is becoming a decision-maker. Buyers are responding strongly to clean lines,
                                        high ceilings, functional layouts, and nature-integrated communities.
                                        Developers focusing on craftsmanship are seeing the most absorption.
                                    </p>
                                </div>

                                {/* Section 4 */}
                                <div>
                                    <h2 className="text-xl font-semibold text-charcoalNoir mb-3 font-playfair">
                                        4. Off-Plan Remains Attractive—But Buyers Are More Selective
                                    </h2>
                                    <p className="text-base text-deepManorSlate font-lato leading-relaxed">
                                        Off-plan demand continues, especially in waterfront projects and
                                        master-planned communities. However, buyers in 2025 want transparency:
                                        delivery timelines, quality assurance, and real value—not hype.
                                    </p>
                                </div>

                                {/* Section 5 */}
                                <div>
                                    <h2 className="text-xl font-semibold text-charcoalNoir mb-3 font-playfair">
                                        5. Rental Market Stays Competitive
                                    </h2>
                                    <p className="text-base text-deepManorSlate font-lato leading-relaxed">
                                        Demand for rentals remains extremely strong due to steady
                                        population growth and global relocations. Popular rental communities like Dubai Marina,
                                        Downtown, and JVC continue to offer attractive yields.
                                    </p>
                                </div>

                                {/* Conclusion */}
                                <div className="bg-manorIvory p-6 md:p-8 rounded-lg">
                                    <h2 className="text-xl font-semibold text-charcoalNoir mb-4 font-playfair">
                                        Conclusion
                                    </h2>
                                    <p className="text-base text-deepManorSlate font-lato leading-relaxed italic">
                                        The Dubai market of 2025 is sophisticated, confident, and design-driven. It rewards thoughtful decisions grounded
                                        in lifestyle and long-term value. At Main & Manor, we believe every home should fit your
                                        story—and understanding the market is the first step in writing it.
                                    </p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full border-t border-warmSandstone my-12"></div>

                            {/* CTA */}
                            <div className="text-center space-y-6">
                                <h3 className="text-2xl font-semibold text-charcoalNoir font-playfair">
                                    Have questions about this topic?
                                </h3>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-warmSandstone text-white rounded-full hover:bg-urbanTaupe transition font-montserrat font-semibold uppercase text-sm tracking-wider"
                                >
                                    Speak with an Advisor
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default JournalModal;
