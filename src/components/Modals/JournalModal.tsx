import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import article1 from '../../assets/images/article1.png'
import calendar from '../../assets/images/calendar.png'
import xcircle from '../../assets/images/XCircle.png'

interface JournalModalProps{
    isOpen:boolean
    onClose:() => void
    blog:any
}


const JournalModal: React.FC<JournalModalProps> = ({ isOpen, onClose, blog}) =>{
   
    if (!isOpen || !blog) return null;


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
                                src={blog.image}
                                alt={blog.title}
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
                                    <span className="text-sm font-lato">{blog.created_at
                               ? new Date(blog.created_at).toLocaleDateString("en-US", {
                               year: "numeric",
                               month: "short",
                               day: "2-digit",
                             })
                           : ""}
                         </span>
                                </div>
                                <span className="w-1 h-1 rounded-full bg-warmSandstone"></span>
                                <span className="text-sm text-urbanTaupe font-montserrat tracking-wider uppercase">{blog.category?.name}</span>

                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-charcoalNoir mb-6 font-playfair leading-tight">
                            {blog.title} 
                            </h1>

                            {/* Introduction */}
                            <p className="text-base md:text-lg text-deepManorSlate mb-8 font-lato leading-relaxed">
                            {blog.content}
                            </p>

                            {/* Content Sections */}
                            <div className="space-y-8">
                                {/* Section 1 */}
                                {blog.sections?.map((section:any, index:number) =>(
                                    <div key={index}>
                                        <h2 className="text-xl font-semibold text-charcoalNoir mb-3 font-playfair">
                                        {index + 1}. {section.title}
                                    </h2>
                                    <p className="text-base text-deepManorSlate font-lato leading-relaxed">
                                        {section.content}
                                    </p>
                                    </div>
                                ))}
                               
                                

                                {/* Conclusion */}
                                {blog.conclusion && (
                                    <div className="bg-manorIvory p-6 md:p-8 rounded-lg">
                                    <h2 className="text-xl font-semibold text-charcoalNoir mb-4 font-playfair">
                                        Conclusion
                                    </h2>

                                    <p className="text-base text-deepManorSlate font-lato leading-relaxed italic">
                                        {blog.conclusion}
                                    </p>
                                    </div>
                                )}
                                
                                
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
