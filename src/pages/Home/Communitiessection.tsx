import React,{useState, useEffect} from 'react';
import { fetchCommunities } from '../../services/api';
import community1 from '../../assets/images/community1.png';
import community2 from '../../assets/images/community2.png';
import community3 from '../../assets/images/community3.png';
import community4 from '../../assets/images/community4.png';
import community5 from '../../assets/images/community5.png';

export default function Communitiessection() {
  {/*
  const communities = [
    { image: community1, name: 'Dubai Hills' },
    { image: community2, name: 'Sobha Hartland' },
    { image: community3, name: 'Arabian Ranches' },
    { image: community4, name: 'Downtown Dubai' },
    { image: community5, name: 'Dubai Hills' },
  ];
  */}

  const [communities, setCommunities] = useState<any[]>([]);

  useEffect(()=>{
    fetchCommunities().then(setCommunities);
  }, []);
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
      {communities.map((community) => (
        <div
          key={community.name}
          className="relative w-full h-full overflow-hidden group rounded-2xl border border-white/10 shadow-glow"
        >
          <img
            src={community.image}
            alt={community.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
          <h3 className="absolute bottom-4 left-4 text-sand uppercase font-bold text-[14px] tracking-[0.12em] z-10">
            {community.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
