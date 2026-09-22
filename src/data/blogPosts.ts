export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  updatedDate: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Evolution of Toyota Raize in the Sri Lankan Market',
    excerpt: 'As a compact SUV that perfectly balances urban maneuverability with a commanding road presence, the Raize has become a favorite among local drivers.',
    category: 'Market Trends',
    date: '12 October 2025',
    updatedDate: 'Last updated 12 October 2025',
    readTime: '5 min read',
    image: '/service-1.png',
    author: {
      name: 'John Doe',
      role: 'Automotive Market Analyst',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    content: [
      "The Toyota Raize has taken the Sri Lankan automotive market by storm since its introduction. As a compact SUV that perfectly balances urban maneuverability with a commanding road presence, it's no surprise that it has become a favorite among local drivers.",
      "In this article, we explore the key factors behind its success, including its impressive fuel efficiency, advanced safety features, and the reliability that comes with the Toyota badge. We also look at how its popularity has affected the resale market in Colombo and beyond.",
      "Whether you're a first-time buyer or looking to upgrade, understanding the Raize's journey in Sri Lanka is essential for any modern motorist.",
      "Under the hood, the 1.0-liter turbocharged 3-cylinder engine delivers punchy acceleration suitable for city navigation while maintaining outstanding mileage ratings of 18-22 km/L under mixed driving conditions.",
      "Furthermore, Japanese auction grades for the Raize remain remarkably high, with Grade 4.5 and Grade 5 models readily sourced directly from USS and CAA auctions with verified mileage.",
    ],
  },
  {
    id: '2',
    title: 'Why Japanese Domestic Market (JDM) Cars Are Unbeatable',
    excerpt: 'Explore why JDM engineering, strict Shaken vehicle inspections, and meticulous maintenance make Japanese cars the most reliable on earth.',
    category: 'JDM Classics',
    date: '28 September 2025',
    updatedDate: 'Last updated 28 September 2025',
    readTime: '6 min read',
    image: '/service-2.png',
    author: {
      name: 'Kenji Takahashi',
      role: 'Japanese Vehicle Specialist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    },
    content: [
      "Japanese Domestic Market (JDM) vehicles have earned a cult following worldwide, not just for their performance pedigrees, but for their unrivaled build quality and stringent maintenance regimens.",
      "In Japan, the Shaken (mandatory biennial inspection) imposes rigorous technical standards on emissions, rust, braking efficiency, and mechanical integrity. Owners frequently maintain detailed service books at certified dealerships.",
      "As a result, importing a vehicle directly from Japanese auctions guarantees you obtain a car that has lived on smooth tarmac roads with genuine mileage and transparent grade reports.",
    ],
  },
  {
    id: '3',
    title: 'Import Guide: Bringing Your Dream Car from Tokyo to Colombo',
    excerpt: 'A comprehensive step-by-step walkthrough detailing auction bidding, customs duty clearance, port clearance, and registration.',
    category: 'Import Guide',
    date: '15 September 2025',
    updatedDate: 'Last updated 15 September 2025',
    readTime: '8 min read',
    image: '/hero-bg.jpg',
    author: {
      name: 'Rasitha B.',
      role: 'Head of Export Logistics',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    },
    content: [
      "Importing a vehicle directly from Japan can save significant costs while allowing you to choose the exact specification, color, and options you desire.",
      "From Tokyo to Colombo, the process involves selecting a target vehicle at Japanese auto auctions (such as USS Tokyo or USS Yokohama), conducting pre-bid physical inspections, securing export certificates, and booking container or RORO vessels.",
      "Nexca coordinates the entire pipeline: from bidding and Japanese domestic transport to sea freight, marine insurance, and customs documentation.",
    ],
  },
  {
    id: '4',
    title: 'How to Read and Understand Japanese Auction Inspection Sheets',
    excerpt: 'Demystifying grades 4.5, 4, 3.5, and R, along with internal condition marks, exterior scratches, and repair history.',
    category: 'Auction Guides',
    date: '10 September 2025',
    updatedDate: 'Last updated 10 September 2025',
    readTime: '7 min read',
    image: '/service-3.jpg',
    author: {
      name: 'Kenji Takahashi',
      role: 'Senior Auction Inspector',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    },
    content: [
      "Every vehicle passing through Japanese auction houses is evaluated by impartial licensed inspectors who generate an official Auction Sheet.",
      "Understanding symbols such as A1 (small scratch), U1 (minor dent), and W1 (repaired panel) is vital to bidding with complete confidence.",
      "Nexca provides certified English translations of auction sheets before placing any bid, protecting your investment from hidden issues.",
    ],
  },
  {
    id: '5',
    title: 'Top 5 Most Reliable Luxury & Off-Road SUVs Exported from Japan',
    excerpt: 'Why models like the Toyota Land Cruiser, Prado, and Lexus LX remain the global favorites for durability and resale value.',
    category: 'Market Trends',
    date: '05 September 2025',
    updatedDate: 'Last updated 05 September 2025',
    readTime: '5 min read',
    image: '/service-1.png',
    author: {
      name: 'John Doe',
      role: 'Automotive Market Analyst',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    content: [
      "When it comes to luxury and off-road capability, Japanese SUVs consistently outperform the competition in longevity, maintenance affordability, and resale value.",
      "Models such as the Toyota Land Cruiser Prado TX-L, Toyota Harrier, and Lexus RX continue to dominate global export inquiries thanks to robust build quality and advanced safety features.",
    ],
  },
  {
    id: '6',
    title: 'RORO vs. Container Shipping: Which is the Best Option for You?',
    excerpt: 'Comparing costs, transit times, insurance coverage, and vehicle safety when shipping from Yokohama and Kobe ports.',
    category: 'Logistics',
    date: '28 August 2025',
    updatedDate: 'Last updated 28 August 2025',
    readTime: '7 min read',
    image: '/hero-bg.jpg',
    author: {
      name: 'Rasitha B.',
      role: 'Head of Export Logistics',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    },
    content: [
      "Choosing the right sea shipping method is an important decision when importing your vehicle from Japan.",
      "Roll-on/Roll-off (RORO) shipping is generally the most cost-effective solution for running vehicles, while dedicated 20ft and 40ft container shipping provides enhanced protection against maritime elements and allows shipping vehicle spare parts alongside the car.",
    ],
  },
];
