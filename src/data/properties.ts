import image30 from '../assets/images/image30.png';
import image31 from '../assets/images/image31.png';
import image32 from '../assets/images/image32.png';
import image33 from '../assets/images/image33.png';
import image34 from '../assets/images/image34.png';
import image35 from '../assets/images/image35.png';
import image36 from '../assets/images/image36.png';
import image37 from '../assets/images/image37.png';
import image38 from '../assets/images/image38.png';
import image39 from '../assets/images/image39.png';
import image40 from '../assets/images/image40.png';
import image41 from '../assets/images/image41.png';

import listings1 from '../assets/images/listings1.png';
import listings3 from '../assets/images/listings3.png';
import listings4 from '../assets/images/listings4.png';
import listings5 from '../assets/images/listings5.png';
import listings6 from '../assets/images/listings6.png';
import listings7 from '../assets/images/listings7.png';

export type Property = {
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
};

export const properties: Property[] = [
  {
    id: 1,
    type: 'PENTHOUSE',
    status: 'FOR SELL',
    image: image30,
    location: 'PALM JUMEIRAH',
    title: 'The Royal Penthouse',
    price: 'AED 42,500,000',
    beds: 4,
    baths: 6,
    size: '5200 sqft',
  },
  {
    id: 2,
    type: 'VILLA',
    status: 'FOR SELL',
    image: image31,
    location: 'PALM JUMEIRAH',
    title: 'Frond G Signature Villa',
    price: 'AED 85,000,000',
    beds: 6,
    baths: 7,
    size: '9500 sqft',
  },
  {
    id: 3,
    type: 'VILLA',
    status: 'FOR SELL',
    image: image32,
    location: 'DUBAI HILLS',
    title: 'Golf Course Mansion',
    price: 'AED 32,000,000',
    beds: 7,
    baths: 8,
    size: '11000 sqft',
  },
  {
    id: 4,
    type: 'PENTHOUSE',
    status: 'FOR SELL',
    image: image33,
    location: 'PALM JUMEIRAH',
    title: 'The Royal Penthouse',
    price: 'AED 42,500,000',
    beds: 4,
    baths: 6,
    size: '5200 sqft',
  },
  {
    id: 5,
    type: 'VILLA',
    status: 'FOR SELL',
    image: image34,
    location: 'PALM JUMEIRAH',
    title: 'Frond G Signature Villa',
    price: 'AED 85,000,000',
    beds: 6,
    baths: 7,
    size: '9500 sqft',
  },
  {
    id: 6,
    type: 'VILLA',
    status: 'FOR SELL',
    image: image35,
    location: 'DUBAI HILLS',
    title: 'Golf Course Mansion',
    price: 'AED 32,000,000',
    beds: 7,
    baths: 8,
    size: '11000 sqft',
  },
  {
    id: 7,
    type: 'PENTHOUSE',
    status: 'FOR SELL',
    image: image36,
    location: 'PALM JUMEIRAH',
    title: 'The Royal Penthouse',
    price: 'AED 42,500,000',
    beds: 4,
    baths: 6,
    size: '5200 sqft',
  },
  {
    id: 8,
    type: 'VILLA',
    status: 'FOR RENT',
    image: image37,
    location: 'PALM JUMEIRAH',
    title: 'Frond G Signature Villa',
    price: 'AED 85,000,000',
    beds: 6,
    baths: 7,
    size: '9500 sqft',
  },
  {
    id: 9,
    type: 'VILLA',
    status: 'FOR RENT',
    image: image38,
    location: 'DUBAI HILLS',
    title: 'Golf Course Mansion',
    price: 'AED 32,000,000',
    beds: 7,
    baths: 8,
    size: '11000 sqft',
  },
  {
    id: 10,
    type: 'PENTHOUSE',
    status: 'FOR SELL',
    image: image39,
    location: 'PALM JUMEIRAH',
    title: 'The Royal Penthouse',
    price: 'AED 42,500,000',
    beds: 4,
    baths: 6,
    size: '5200 sqft',
  },
  {
    id: 11,
    type: 'VILLA',
    status: 'FOR RENT',
    image: image40,
    location: 'PALM JUMEIRAH',
    title: 'Frond G Signature Villa',
    price: 'AED 85,000,000',
    beds: 6,
    baths: 7,
    size: '9500 sqft',
  },
  {
    id: 12,
    type: 'VILLA',
    status: 'FOR RENT',
    image: image41,
    location: 'DUBAI HILLS',
    title: 'Golf Course Mansion',
    price: 'AED 32,000,000',
    beds: 7,
    baths: 8,
    size: '11000 sqft',
  },
];

export const featuredProperties = properties.slice(0, 6);
export const galleryProperties = properties.slice(6, 12);

export const offPlanProperties: Property[] = [
  {
    id: 101,
    type: 'PENTHOUSE',
    status: 'FOR SELL',
    image: listings1,
    location: 'PALM JUMEIRAH',
    title: 'The Royal Penthouse',
    price: 'AED 42,500,000',
    beds: 4,
    baths: 6,
    size: '5200 sqft',
  },
  {
    id: 102,
    type: 'VILLA',
    status: 'FOR SELL',
    image: listings3,
    location: 'PALM JUMEIRAH',
    title: 'Frond G Signature Villa',
    price: 'AED 85,000,000',
    beds: 6,
    baths: 7,
    size: '9500 sqft',
  },
  {
    id: 103,
    type: 'VILLA',
    status: 'FOR SELL',
    image: listings4,
    location: 'DUBAI HILLS',
    title: 'Golf Course Mansion',
    price: 'AED 32,000,000',
    beds: 7,
    baths: 8,
    size: '11000 sqft',
  },
  {
    id: 104,
    type: 'PENTHOUSE',
    status: 'FOR SELL',
    image: listings5,
    location: 'PALM JUMEIRAH',
    title: 'The Royal Penthouse',
    price: 'AED 42,500,000',
    beds: 4,
    baths: 6,
    size: '5200 sqft',
  },
  {
    id: 105,
    type: 'VILLA',
    status: 'FOR SELL',
    image: listings6,
    location: 'PALM JUMEIRAH',
    title: 'Frond G Signature Villa',
    price: 'AED 85,000,000',
    beds: 6,
    baths: 7,
    size: '9500 sqft',
  },
  {
    id: 106,
    type: 'VILLA',
    status: 'FOR SELL',
    image: listings7,
    location: 'DUBAI HILLS',
    title: 'Golf Course Mansion',
    price: 'AED 32,000,000',
    beds: 7,
    baths: 8,
    size: '11000 sqft',
  },
];

export const getPropertyById = (id: number): Property | undefined =>
  [...properties, ...offPlanProperties].find((p) => p.id === id);
