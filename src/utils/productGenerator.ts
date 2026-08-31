import { Product } from '../components/ProductCard';
import iphones, { iPhone } from '../data/iPhones';
import appleWatches, { AppleWatch } from '../data/watch';
import ipads, { iPad } from '../data/iPads';

// Generate pricing based on iPhone model and storage — updated Aug 2026 from Jiji / Slot / Sellatease / Kara
const generatePricing = (iphone: iPhone, storage: string): { currentPrice: number; originalPrice: number; discount: number } => {
  // Base prices calibrated so base * multiplier ≈ verified 2026 UK-used street price
  // References: Jiji 2026, Sellatease July 2026, 360Gadgets 2026, Slot April 2026, Kara June 2026
  const basePrices: { [key: string]: number } = {
    'iPhone XR': 170000,          // Jiji XR 64GB 170k, 128GB 180k
    'iPhone 12 mini': 200000,     // 64GB 180-260k
    'iPhone 12': 270000,          // 64GB 220-320k, 128GB 270-380k
    'iPhone 12 Pro': 320000,      // 128GB 320-450k → base 320k*1.2=384k
    'iPhone 12 Pro Max': 375000,  // 128GB 380-520k → base 375k*1.2=450k
    'iPhone 13': 300000,          // 128GB 350-370k → base 300k
    'iPhone 13 Pro': 466000,      // 128GB 550-570k → base 466k
    'iPhone 13 Pro Max': 512000,  // 128GB 600-630k → base 512k
    'iPhone 14': 375000,          // 128GB ~450k → base 375k
    'iPhone 14 Pro': 540000,      // est 128GB 650k → base 540k
    'iPhone 14 Pro Max': 480000,  // 128GB 500-650k mid 575k → base 480k
    'iPhone 15': 525000,          // 128GB 630k → base 525k
    'iPhone 15 Pro': 665000,      // 128GB 700-950k mid 800k → base 665k
    'iPhone 15 Pro Max': 643000,  // 256GB 850-950k mid 900k → base 643k (1.4×)
    'iPhone 16': 875000,          // 128GB 950k-1.15M mid 1.05M → base 875k
    'iPhone 16 Pro': 1285000,     // 256GB ~1.8M → base 1.285M
    'iPhone 16 Pro Max': 1464000, // 256GB 1.7-2.49M mid 2.05M → base 1.464M
    'iPhone 17': 1500000,         // est 128GB 1.8M → base 1.5M
    'iPhone 17 Pro': 1666000,     // est 256GB ~2.33M → base 1.666M
    'iPhone 17 Pro Max': 1785000, // est 256GB 2.5M → base 1.785M
  };

  // Storage multipliers
  const storageMultipliers: { [key: string]: number } = {
    '64 GB': 1.0,
    '128 GB': 1.2,
    '256 GB': 1.4,
    '512 GB': 1.7,
    '1 TB': 2.0,
    '2 TB': 2.5,
  };

  const basePrice = basePrices[iphone.name] || 500000;
  const storageMultiplier = storageMultipliers[storage] || 1.0;
  const originalPrice = Math.round(basePrice * storageMultiplier);
  
  // Generate discount between 8-20%
  const discount = Math.floor(Math.random() * 13) + 8;
  const currentPrice = Math.round(originalPrice * (1 - discount / 100));

  return { currentPrice, originalPrice, discount };
};

// Generate pricing for iPads — refreshed Aug 2026 (Jiji 135k-300k for 64GB base iPads)
const generateiPadPricing = (ipad: iPad, storage: string): { currentPrice: number; originalPrice: number; discount: number } => {
  // Base prices calibrated to Jiji 2026
  const basePrices: { [key: string]: number } = {
    'iPad (10th Generation)': 185000,
    'iPad (11th Generation / A16 base iPad)': 240000,
    'iPad Air (11‑inch, M3)': 420000,
    'iPad Air (13‑inch, M3)': 520000,
    'iPad mini (6th / latest)': 280000,
    'iPad Pro (11‑inch, M4)': 620000,
    'iPad Pro (13‑inch, M4)': 720000,
  };

  // Storage multipliers
  const storageMultipliers: { [key: string]: number } = {
    '64 GB': 1.0,
    '128 GB': 1.2,
    '256 GB': 1.4,
    '512 GB': 1.7,
    '1 TB': 2.0,
    '2 TB': 2.5,
  };

  const basePrice = basePrices[ipad.name] || 400000;
  const storageMultiplier = storageMultipliers[storage] || 1.0;
  const originalPrice = Math.round(basePrice * storageMultiplier);
  
  // Generate discount between 8-20%
  const discount = Math.floor(Math.random() * 13) + 8;
  const currentPrice = Math.round(originalPrice * (1 - discount / 100));

  return { currentPrice, originalPrice, discount };
};

// Generate condition based on release year
const generateCondition = (releaseYear: number): 'Excellent' | 'Very Good' | 'Good' => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - releaseYear;
  
  if (age <= 1) return 'Excellent';
  if (age <= 3) return 'Very Good';
  return 'Good';
};

// Generate products from iPhone data
export const generateProductsFromiPhones = (): Product[] => {
  const products: Product[] = [];
  let id = 1;

  iphones.forEach((iphone) => {
    // Randomly select one storage option from available options
    const randomStorageIndex = Math.floor(Math.random() * iphone.storageOptions.length);
    const storage = iphone.storageOptions[randomStorageIndex];
    
    const condition = generateCondition(iphone.releaseYear);
    const pricing = generatePricing(iphone, storage);
    
    products.push({
      id: id++,
      name: `${iphone.name} UK Used`,
      image: iphone.image,
      condition: condition,
      discount: pricing.discount,
      storage: storage,
      currentPrice: pricing.currentPrice,
      originalPrice: pricing.originalPrice,
      seller: 'TechGuru UK',
      category: 'iphones', // All iPhone products belong to iphones category
      // Add iPhone-specific properties
      display: iphone.display,
      chip: iphone.chip,
      ram: iphone.ram,
      cameras: iphone.cameras,
      battery: iphone.battery,
      releaseYear: iphone.releaseYear,
      description: iphone.description,
    });
  });

  return products;
};

// Generate products from iPad data
export const generateProductsFromiPads = (): Product[] => {
  const products: Product[] = [];
  let id = 3000; // Start from 3000 to avoid conflicts

  ipads.forEach((ipad) => {
    // Randomly select one storage option from available options
    const randomStorageIndex = Math.floor(Math.random() * ipad.storageOptions.length);
    const storage = ipad.storageOptions[randomStorageIndex];
    
    const condition = generateCondition(ipad.releaseYear);
    const pricing = generateiPadPricing(ipad, storage);
    
    products.push({
      id: id++,
      name: `${ipad.name} UK Used`,
      image: ipad.image,
      condition: condition,
      discount: pricing.discount,
      storage: storage,
      currentPrice: pricing.currentPrice,
      originalPrice: pricing.originalPrice,
      seller: 'TechGuru UK',
      category: 'ipads', // All iPad products belong to ipads category
      // Add iPad-specific properties
      display: ipad.display,
      chip: ipad.chip,
      ram: ipad.ram,
      cameras: ipad.cameras,
      battery: ipad.battery,
      releaseYear: ipad.releaseYear,
      description: ipad.description,
    });
  });

  return products;
};

// Generate pricing for Apple Watches — checked Aug 2026 (UK used 280-420k range)
const generateWatchPricing = (watch: AppleWatch): { currentPrice: number; originalPrice: number; discount: number } => {
  // Base prices verified 2026
  const basePrices: { [key: string]: number } = {
    'Apple Watch Series 8': 285000,
    'Apple Watch Series 9': 335000,
    'Apple Watch Series 10': 395000,
  };

  const basePrice = basePrices[watch.name] || 300000;
  
  // Generate discount between 10-20%
  const discount = Math.floor(Math.random() * 11) + 10;
  const currentPrice = Math.round(basePrice * (1 - discount / 100));

  return { currentPrice, originalPrice: basePrice, discount };
};

// Generate products from Apple Watch data
export const generateProductsFromWatches = (): Product[] => {
  const products: Product[] = [];
  let id = 2000; // Start from 2000 to avoid conflicts

  appleWatches.forEach((watch) => {
    const condition = generateCondition(watch.releaseYear);
    const pricing = generateWatchPricing(watch);
    
    products.push({
      id: id++,
      name: `${watch.name} UK Used`,
      image: watch.image,
      condition: condition,
      discount: pricing.discount,
      storage: watch.storage,
      currentPrice: pricing.currentPrice,
      originalPrice: pricing.originalPrice,
      seller: 'TechGuru UK',
      category: 'apple-watches',
      // Add watch-specific properties
      display: watch.display.size,
      chip: watch.chip,
      ram: watch.ram,
      battery: watch.battery,
      releaseYear: watch.releaseYear,
      description: watch.description,
      // Add sensors as a string for display
      compatible: watch.sensors.join(', '),
    });
  });

  return products;
};

// Generate additional accessories and other products
export const generateAdditionalProducts = (): Product[] => {
  const accessories: Product[] = [
    // Cases — distinct images so no visual duplication on mobile grid
    {
      id: 1001,
      name: "Premium Leather iPhone 17 Pro Case",
      image: "/assets/others/Casing.jpeg",
      condition: "Excellent",
      discount: 17,
      compatible: "iPhone 17 Pro",
      currentPrice: 32000,
      originalPrice: 38000,
      seller: "TechGuru UK",
      category: "cases"
    },
    {
      id: 1002,
      name: "Clear MagSafe iPhone 16 Pro Case",
      image: "/assets/others/Casing.jpeg?v=2",
      condition: "Very Good",
      discount: 18,
      compatible: "iPhone 16 Pro",
      currentPrice: 26000,
      originalPrice: 31500,
      seller: "TechGuru UK",
      category: "cases"
    },
    {
      id: 1003,
      name: "Premium iPhone Screen Protector",
      image: "/assets/others/Casing.jpeg?v=3",
      condition: "Excellent",
      discount: 20,
      compatible: "iPhone 15 series and later",
      currentPrice: 11000,
      originalPrice: 14000,
      seller: "TechGuru UK",
      category: "cases"
    },
    
    // Chargers — distinct images
    {
      id: 1004,
      name: "Apple MagSafe Wireless Charger",
      image: "/assets/others/Accessories.jpeg",
      condition: "Excellent",
      discount: 12,
      compatible: "iPhone 12 and later",
      currentPrice: 42000,
      originalPrice: 48000,
      seller: "TechGuru UK",
      category: "chargers"
    },
    {
      id: 1005,
      name: "Original Apple USB-C to Lightning Cable",
      image: "/assets/others/Accessories.jpeg?v=2",
      condition: "Excellent",
      discount: 17,
      compatible: "iPhone 15 series",
      currentPrice: 18000,
      originalPrice: 22000,
      seller: "TechGuru UK",
      category: "chargers"
    },
    {
      id: 1006,
      name: "Apple 20W USB-C Power Adapter",
      image: "/assets/others/Accessories.jpeg?v=3",
      condition: "Very Good",
      discount: 12,
      compatible: "iPhone 12 and later",
      currentPrice: 28000,
      originalPrice: 32000,
      seller: "TechGuru UK",
      category: "chargers"
    },
    
    // AirPods — distinct images
    {
      id: 1007,
      name: "Apple AirPods Pro 2nd Gen UK Used",
      image: "/assets/others/AirPods.jpeg",
      condition: "Excellent",
      discount: 14,
      battery: "95%",
      compatible: "iPhone",
      currentPrice: 195000,
      originalPrice: 227000,
      seller: "TechGuru UK",
      category: "airpods"
    },
    {
      id: 1008,
      name: "Apple AirPods 3rd Gen UK Used",
      image: "/assets/others/AirPods.jpeg?v=2",
      condition: "Very Good",
      discount: 16,
      battery: "88%",
      compatible: "iPhone",
      currentPrice: 135000,
      originalPrice: 161000,
      seller: "TechGuru UK",
      category: "airpods"
    },
    {
      id: 1009,
      name: "Apple AirPods Max UK Used",
      image: "/assets/others/AirPods.jpeg?v=3",
      condition: "Very Good",
      discount: 13,
      battery: "90%",
      compatible: "iPhone",
      currentPrice: 310000,
      originalPrice: 356000,
      seller: "TechGuru UK",
      category: "airpods"
    },
    
    
    // MacBooks — distinct images + updated 2026 UK-used pricing
    {
      id: 1016,
      name: "MacBook Air M2 UK Used",
      image: "/assets/others/Macbook.jpeg",
      condition: "Excellent",
      discount: 9,
      storage: "256 GB",
      battery: "95%",
      status: "Unlocked",
      currentPrice: 1150000,
      originalPrice: 1265000,
      seller: "TechGuru UK",
      category: "macbooks"
    },
    {
      id: 1017,
      name: "MacBook Pro 14-inch M2 UK Used",
      image: "/assets/others/Macbook.jpeg?v=2",
      condition: "Very Good",
      discount: 10,
      storage: "512 GB",
      battery: "93%",
      status: "Unlocked",
      currentPrice: 1580000,
      originalPrice: 1755000,
      seller: "TechGuru UK",
      category: "macbooks"
    }
  ];

  return accessories;
};

// Generate all products
export const generateAllProducts = (): Product[] => {
  const iphoneProducts = generateProductsFromiPhones();
  const watchProducts = generateProductsFromWatches();
  const ipadProducts = generateProductsFromiPads();
  const additionalProducts = generateAdditionalProducts();
  return [...iphoneProducts, ...watchProducts, ...ipadProducts, ...additionalProducts];
};
