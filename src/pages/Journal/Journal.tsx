import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Preloader from '../../components/Preloader';
import JournalModal from '../../components/Modals/JournalModal'

import {fetchBlogs, fetchBlogCategories} from '../../services/api'

import arrowright from '../../assets/images/ArrowRight2.png'
import arrow from '../../assets/images/ArrowRight2.png'
import search from '../../assets/images/search.png'




export default function Journal(){
  const [blogs, setBlogs] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])

  const [selectedBlog, setSelectedBlog] = useState<any | null>(null)

  


  const [isModalOpen, setIsModalOpen] = useState(false)


  const openModal = (blog: any) => {
    setSelectedBlog(blog)
    setIsModalOpen(true)
  }
  
  const closeModal = () => {
    setSelectedBlog(null)
    setIsModalOpen(false)
  }


  const [activeTab, setActiveTab] = useState('all-stories');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    Promise.all([fetchBlogs(), fetchBlogCategories()])
      .then(([blogsData, categoriesData]) => {
        setBlogs(blogsData);
        setCategories(categoriesData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const latestBlogs = blogs.slice(0,3);

  const filteredBlogs =
  activeTab === 'all-stories'
  ? blogs
  : blogs.filter(
    (blog) => blog.category?.slug === activeTab
  );
  

  useEffect(() =>{
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading){
    return <Preloader/>
  }

  return(
    <>
      <Navbar/>

      {/* Hero Section */}
      <div className="relative bg-manorIvory pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-urbanTaupe font-montserrat font-semibold"
          >
            INSIGHTS & STORIES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-charcoalNoir font-playfair"
          >
            The Main & Manor Journal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-deepManorSlate/70 italic font-spectral max-w-2xl mx-auto"
          >
            "A curated collection of insights, guides, and stories shaped by design, lifestyle, and the evolving Dubai market."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-deepManorSlate font-lato max-w-3xl mx-auto leading-relaxed"
          >
            Real estate is more than numbers—it's architecture, community, and the way a home makes you feel.
            Our editorial brings you thoughtful perspectives on Dubai's neighborhoods, investment strategies, and design trends.
          </motion.p>
        </div>
      </div>

      <div className="w-full border-t border-warmSandstone"></div>

      {/* Category Tabs */}
      <div className="bg-white py-8 sticky top-20 z-40 border-b border-warmSandstone/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">

            {/* All Stories tab */}
  <motion.button
    onClick={() => setActiveTab("all-stories")}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-2 text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-full ${
      activeTab === "all-stories"
        ? "bg-warmSandstone text-white"
        : "bg-manorIvory text-urbanTaupe hover:bg-warmSandstone/20"
    } font-montserrat`}
  >
    All Stories
  </motion.button>

            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.slug)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-full ${
                  activeTab === category.slug
                    ? 'bg-warmSandstone text-white'
                    : 'bg-manorIvory text-urbanTaupe hover:bg-warmSandstone/20'
                } font-montserrat`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Stories Section */}
      <div className="bg-deepManorSlate py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-semibold text-white font-playfair">Featured Stories</h2>
            <button className="flex items-center gap-2 text-warmSandstone hover:text-white transition mt-4 md:mt-0 group font-lato">
              <span className="text-sm tracking-wider">Read All Articles</span>
              <motion.img
                src={arrowright}
                alt="arrow"
                className="w-6 h-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <motion.img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-warmSandstone/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-lato font-semibold">
                    {blog.category?.name}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl text-white font-semibold font-playfair group-hover:text-warmSandstone transition">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-white/70 font-lato leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <button
                    onClick={() => openModal(blog)}

                    className="flex items-center gap-2 text-warmSandstone hover:text-white transition group/btn"
                  >
                    <span className="text-sm uppercase tracking-wider font-montserrat">Read Story</span>
                    <motion.img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4"
                      whileHover={{ x: 3 }}
                    />
                  </button>
                  <div className="w-16 border-t border-warmSandstone mt-4"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Articles Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-charcoalNoir font-playfair mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Articles Column */}
            <div className="lg:col-span-2 space-y-8">
              {latestBlogs.slice(0, 2).map((blog) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs uppercase text-urbanTaupe font-montserrat tracking-wider">
                      {blog.category?.name}
                    </span>
                    
                    <span className="text-xs text-urbanTaupe font-lato">
                    {blog.created_at
                   ? new Date(blog.created_at).toLocaleDateString("en-US", {
                   year: "numeric",
                   month: "short",
                   day: "2-digit",
                  })
                : ""}

                   </span>
                  </div>

                  <h3 className="text-xl md:text-2xl text-charcoalNoir font-semibold font-playfair mb-3 group-hover:text-warmSandstone transition">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-deepManorSlate font-lato mb-4">
                    {blog.excerpt}
                  </p>
                  <button onClick={() => openModal(blog)}
                  className="flex items-center gap-2 text-warmSandstone hover:text-urbanTaupe transition">
                    <span className="text-sm uppercase tracking-wider font-montserrat">Read Story</span>
                    <motion.img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4"
                      whileHover={{ x: 3 }}
                    />
                  </button>
                  <div className="w-16 border-t border-warmSandstone mt-4"></div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <div className="bg-manorIvory p-4 rounded-lg">
                <div className="flex items-center gap-3 text-deepManorSlate">
                  <img src={search} alt="search" className="w-5 h-5 opacity-60"/>
                  <input
                    type="text"
                    placeholder="Search Journal..."
                    className="bg-transparent text-sm font-lato focus:outline-none w-full placeholder:text-deepManorSlate/60"
                  />
                </div>
              </div>

              {/* Most Popular */}
              <div className="bg-manorIvory p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-urbanTaupe uppercase tracking-wider mb-6 font-montserrat">
                  Most Popular
                </h3>
                <div className="space-y-6">
                  {blogs.map((blog, index) => (
                    <div key={index} className="border-b border-warmSandstone/30 pb-4 last:border-0">
                      <p className="text-xs text-urbanTaupe uppercase mb-2 font-montserrat tracking-wider">
                        {blog.category?.name}
                      </p>
                      <p onClick={() => openModal(blog)}
                      className="text-sm text-charcoalNoir font-lato hover:text-warmSandstone cursor-pointer transition">
                        {blog.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-warmSandstone p-6 rounded-lg text-center">
                <p className="text-lg italic text-white font-cormorant mb-2">
                  Buying in Dubai?
                </p>
                <p className="text-xs text-white/80 uppercase tracking-wider mb-4 font-montserrat">
                  GET EXPERT GUIDANCE
                </p>
                <button className="text-sm text-white hover:text-charcoalNoir transition font-montserrat font-semibold">
                  Contact Us →
                </button>
                <div className="w-16 border-t border-white/40 mx-auto mt-4"></div>
              </div>

              {/* Newsletter Card */}
              <div className="bg-deepManorSlate p-6 rounded-lg text-center">
                <p className="text-lg italic text-warmSandstone font-cormorant mb-2">
                  Stay Updated
                </p>
                <p className="text-xs text-white/80 uppercase tracking-wider mb-4 font-montserrat">
                  SUBSCRIBE TO OUR JOURNAL
                </p>
                <button className="text-sm text-warmSandstone hover:text-white transition font-montserrat font-semibold">
                  Subscribe →
                </button>
                <div className="w-16 border-t border-warmSandstone/40 mx-auto mt-4"></div>
              </div>
            </div>
          </div>

          {/* Additional Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {latestBlogs.slice(2).map((blog) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs uppercase text-urbanTaupe font-montserrat tracking-wider">
                    {blog.category?.name}
                  </span>
                  <span className="text-xs text-urbanTaupe font-lato">
                  {blog.created_at
               ? new Date(blog.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })
           : ""}

                     </span>
                </div>


                <h3 className="text-lg font-semibold text-charcoalNoir font-playfair mb-3 group-hover:text-warmSandstone transition">
                  {blog.title}
                </h3>
                <p className="text-sm text-deepManorSlate font-lato mb-4">
                  {blog.excerpt}
                </p>
                <button onClick={() => openModal(blog)}
                className="flex items-center gap-2 text-warmSandstone hover:text-urbanTaupe transition">
                  <span className="text-sm uppercase tracking-wider font-montserrat">Read Story</span>
                  <motion.img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4"
                    whileHover={{ x: 3 }}
                  />
                </button>
                <div className="w-16 border-t border-warmSandstone mt-4"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-manorIvory py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-charcoalNoir mb-4 font-playfair">
            Have questions about the market?
          </h2>
          <p className="text-lg text-deepManorSlate italic mb-8 font-spectral">
            "We're here to help with thoughtful, honest guidance."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-warmSandstone text-white rounded-full hover:bg-urbanTaupe transition font-montserrat font-semibold uppercase text-sm tracking-wider"
            >
              CONTACT US
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-charcoalNoir text-charcoalNoir rounded-full hover:bg-charcoalNoir hover:text-white transition font-montserrat font-semibold uppercase text-sm tracking-wider"
            >
              WHATSAPP
            </motion.button>
          </div>
        </div>
      </div>

      
{isModalOpen && selectedBlog && (
  <JournalModal
    isOpen={isModalOpen}
    onClose={closeModal}
    blog={selectedBlog}
  />
)}
      <Footer/>
    </>
  )
}
