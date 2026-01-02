export default function WhyChoose() {
  const reasons = [
    {
      title: 'Architectural eye',
      copy:
        'We see what others overlook natural light, flow, ceiling height, materials, proportions, and long-term value.',
    },
    {
      title: 'Boutique service',
      copy:
        "You'll never feel rushed, pushed, or treated like a number. Every client receives tailored guidance and genuine care.",
    },
    {
      title: 'Dubai + International Expertise',
      copy:
        'From waterfront living to master-planned communities, we have deep insights and a global perspective.',
    },
    {
      title: 'Transparent, honest advice',
      copy: 'Your best interest comes first. Always.',
    },
  ];

  return (
    <div className="mt-14 text-sand">
      <div className="flex items-center flex-col gap-2 justify-center">
        <h3 className="text-[24px] font-semibold font-montserrat tracking-wider uppercase">Why choose us</h3>
        <div className="text-lg font-semibold">
          <span className="text-sand italic">Why Clients Choose  &nbsp;</span>
          <span className="text-warmSandstone font-playfair">Main & Manor</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 mb-6">
        {reasons.map((reason) => (
          <div key={reason.title} className="glass-panel bg-white/5 p-5 flex flex-col gap-3">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-warmSandstone to-transparent opacity-70"></div>
            <h3 className="text-base md:text-lg text-sand font-semibold">{reason.title}</h3>
            <span className="text-sm md:text-base text-sand/70">{reason.copy}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
