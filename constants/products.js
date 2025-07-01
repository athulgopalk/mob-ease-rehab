// constants/products.js
export const products = [
  {
    id: "gantry-hoist-single-motor",
    name: "Gantry Hoist (Single Motor)",
    category: "gantry-hoists",
    price: 15000,
    useCase: ["home", "clinic"],
    image: "/products/Gantry Hoist (Single Motor)-1.png", // For ProductGrid
    images: [
      "/products/Gantry Hoist (Single Motor)-1.png",
      "/products/Gantry Hoist (Single Motor)-2.png",
      "/products/Gantry Hoist (Single Motor)-3.png",
    ], // For ProductPage gallery
    alt: "Gantry Hoist Single Motor for patient transfers by MOB-EASE Rehab",
    description:
      "The Gantry Hoist (Single Motor) is designed for seamless patient transfers, offering robust support for individuals with limited mobility. Ideal for home and clinical settings, it ensures safety and ease of use.",
    specifications: {
      weightCapacity: "150 kg",
      motor: "Single motor",
      material: "Steel frame",
      dimensions: "120 x 60 x 180 cm",
    },
  },
  {
    id: "gantry-hoist-dual-motor",
    name: "Gantry Hoist (Dual Motor)",
    category: "gantry-hoists",
    price: 18000,
    useCase: ["home", "clinic"],
    image: "/products/GantryHoist (Dual Motor)-1.png",
    images: [
      "/products/GantryHoist (Dual Motor)-1.png",
      "/products/GantryHoist (Dual Motor)-2.png",
      "/products/GantryHoist (Dual Motor)-3.png",
    ],
    alt: "Gantry Hoist Dual Motor for independent transfers by MOB-EASE Rehab",
    description:
      "The Gantry Hoist (Dual Motor) provides enhanced power for independent transfers, ensuring smooth operation and reliability in home or clinical environments.",
    specifications: {
      weightCapacity: "180 kg",
      motor: "Dual motor",
      material: "Reinforced steel",
      dimensions: "130 x 65 x 190 cm",
    },
  },
  {
    id: "full-body-hoist-portable",
    name: "Full Body Hoist (Portable)",
    category: "hoists",
    price: 16000,
    useCase: ["home", "clinic"],
    image: "/images/full-body-hoist-portable.jpg",
    images: [
      "/images/full-body-hoist-portable-1.jpg",
      "/images/full-body-hoist-portable-2.jpg",
      "/images/full-body-hoist-portable-3.jpg",
    ],
    alt: "Portable Full Body Hoist for complete mobility loss by MOB-EASE Rehab",
    description:
      "This portable full-body hoist is perfect for users with complete mobility loss, offering easy setup and reliable support in home or clinical settings.",
    specifications: {
      weightCapacity: "160 kg",
      motor: "Single motor",
      material: "Aluminum alloy",
      dimensions: "110 x 55 x 170 cm",
    },
  },
  {
    id: "power-assisted-standing-hoist",
    name: "Power-Assisted Standing Hoist (Portable)",
    category: "hoists",
    price: 20000,
    useCase: ["home", "clinic"],
    image: "/images/power-assisted-standing-hoist.jpg",
    images: [
      "/images/power-assisted-standing-hoist-1.jpg",
      "/images/power-assisted-standing-hoist-2.jpg",
      "/images/power-assisted-standing-hoist-3.jpg",
      "/images/power-assisted-standing-hoist-4.jpg",
      "/images/power-assisted-standing-hoist-5.jpg",
    ],
    alt: "Power-Assisted Standing Hoist for gait training by MOB-EASE Rehab",
    description:
      "The Power-Assisted Standing Hoist supports gait training and rehabilitation, providing powered assistance for standing and mobility exercises.",
    specifications: {
      weightCapacity: "200 kg",
      motor: "Dual motor",
      material: "Steel and aluminum",
      dimensions: "125 x 60 x 185 cm",
    },
  },
  {
    id: "sarah-steady-walking-board",
    name: "Sarah Steady with Walking Board",
    category: "paediatric-solutions",
    price: 9000,
    useCase: ["home", "clinic"],
    image: "/images/sarah-steady-walking-board.jpg",
    images: [
      "/images/sarah-steady-walking-board-1.jpg",
      "/images/sarah-steady-walking-board-2.jpg",
      "/images/sarah-steady-walking-board-3.jpg",
    ],
    alt: "Sarah Steady with Walking Board for standing aid by MOB-EASE Rehab",
    description:
      "The Sarah Steady with Walking Board is a pediatric solution designed to assist children with standing and walking, ideal for home and clinical use.",
    specifications: {
      weightCapacity: "80 kg",
      material: "Lightweight aluminum",
      dimensions: "90 x 50 x 120 cm",
    },
  },
  {
    id: "gait-training-hoist",
    name: "Gait Training Hoist",
    category: "hoists",
    price: 17000,
    useCase: ["clinic", "rehabilitation"],
    image: "/images/gait-training-hoist.jpg",
    images: [
      "/images/gait-training-hoist-1.jpg",
      "/images/gait-training-hoist-2.jpg",
      "/images/gait-training-hoist-3.jpg",
      "/images/gait-training-hoist-4.jpg",
    ],
    alt: "Gait Training Hoist for neurological recovery by MOB-EASE Rehab",
    description:
      "Designed for neurological recovery, the Gait Training Hoist supports patients during rehabilitation with secure and adjustable features.",
    specifications: {
      weightCapacity: "170 kg",
      motor: "Single motor",
      material: "Steel frame",
      dimensions: "115 x 60 x 175 cm",
    },
  },
  {
    id: "stair-lift-straight",
    name: "Stair Lift (Straight)",
    category: "stair-lifts",
    price: 25000,
    useCase: ["home"],
    image: "/images/stair-lift-straight.jpg",
    images: [
      "/images/stair-lift-straight-1.jpg",
      "/images/stair-lift-straight-2.jpg",
      "/images/stair-lift-straight-3.jpg",
    ],
    alt: "Straight Stair Lift for elderly mobility by MOB-EASE Rehab",
    description:
      "The Straight Stair Lift provides safe and comfortable mobility for elderly users navigating straight staircases in their homes.",
    specifications: {
      weightCapacity: "120 kg",
      power: "Electric",
      material: "Steel rail",
      dimensions: "Varies by staircase",
    },
  },
  {
    id: "stair-lift-curved",
    name: "Stair Lift (Curved)",
    category: "stair-lifts",
    price: 30000,
    useCase: ["home"],
    image: "/images/stair-lift-curved.jpg",
    images: [
      "/images/stair-lift-curved-1.jpg",
      "/images/stair-lift-curved-2.jpg",
      "/images/stair-lift-curved-3.jpg",
      "/images/stair-lift-curved-4.jpg",
    ],
    alt: "Curved Stair Lift for multi-level homes by MOB-EASE Rehab",
    description:
      "Custom-designed for curved staircases, this stair lift ensures smooth and safe navigation for users in multi-level homes.",
    specifications: {
      weightCapacity: "130 kg",
      power: "Electric",
      material: "Steel rail",
      dimensions: "Custom-fit",
    },
  },
  {
    id: "car-swivel-seat-assisted",
    name: "Car Swivel Seat (With Assistance)",
    category: "wheelchairs",
    price: 12000,
    useCase: ["travel"],
    image: "/images/car-swivel-seat-assisted.jpg",
    images: [
      "/images/car-swivel-seat-assisted-1.jpg",
      "/images/car-swivel-seat-assisted-2.jpg",
      "/images/car-swivel-seat-assisted-3.jpg",
    ],
    alt: "Assisted Car Swivel Seat for transfers by MOB-EASE Rehab",
    description:
      "The Car Swivel Seat (With Assistance) simplifies vehicle transfers for users needing support, ideal for travel scenarios.",
    specifications: {
      weightCapacity: "100 kg",
      material: "Cushioned fabric and steel",
      dimensions: "50 x 50 x 30 cm",
    },
  },
  {
    id: "car-swivel-seat-self-transfer",
    name: "Car Swivel Seat (Self-Transfer)",
    category: "wheelchairs",
    price: 14000,
    useCase: ["travel"],
    image: "/images/car-swivel-seat-self-transfer.jpg",
    images: [
      "/images/car-swivel-seat-self-transfer-1.jpg",
      "/images/car-swivel-seat-self-transfer-2.jpg",
      "/images/car-swivel-seat-self-transfer-3.jpg",
      "/images/car-swivel-seat-self-transfer-4.jpg",
    ],
    alt: "Self-Transfer Car Swivel Seat for independent mobility by MOB-EASE Rehab",
    description:
      "Designed for independent users, the Car Swivel Seat (Self-Transfer) enables easy vehicle entry and exit during travel.",
    specifications: {
      weightCapacity: "110 kg",
      material: "Cushioned fabric and steel",
      dimensions: "50 x 50 x 30 cm",
    },
  },
  {
    id: "paediatric-sensory-room",
    name: "Paediatric Sensory Room Installation",
    category: "paediatric-solutions",
    price: 35000,
    useCase: ["home", "clinic"],
    image: "/images/paediatric-sensory-room.jpg",
    images: [
      "/images/paediatric-sensory-room-1.jpg",
      "/images/paediatric-sensory-room-2.jpg",
      "/images/paediatric-sensory-room-3.jpg",
      "/images/paediatric-sensory-room-4.jpg",
      "/images/paediatric-sensory-room-5.jpg",
    ],
    alt: "Paediatric Sensory Room for children with special needs by MOB-EASE Rehab",
    description:
      "The Paediatric Sensory Room Installation creates a calming and stimulating environment for children with special needs, suitable for homes and clinics.",
    specifications: {
      features: "Sensory lighting, tactile panels, interactive elements",
      installation: "Customizable",
      dimensions: "Varies by room size",
    },
  },
  {
    id: "paediatric-disability-solutions",
    name: "Paediatric Room – Complete Disability Solutions",
    category: "paediatric-solutions",
    price: 40000,
    useCase: ["home", "clinic"],
    image: "/images/paediatric-disability-solutions.jpg",
    images: [
      "/images/paediatric-disability-solutions-1.jpg",
      "/images/paediatric-disability-solutions-2.jpg",
      "/images/paediatric-disability-solutions-3.jpg",
    ],
    alt: "Paediatric Complete Disability Solutions for enhanced independence by MOB-EASE Rehab",
    description:
      "A comprehensive solution for pediatric disability needs, offering customized setups to enhance independence in home or clinical settings.",
    specifications: {
      features: "Custom aids, adaptive furniture, sensory tools",
      installation: "Tailored to needs",
      dimensions: "Varies by setup",
    },
  },
];
