// constants/products.js
export const products = [
  {
    id: "gantry-hoist-single-motor",
    name: "Gantry Hoist (Single Motor)",
    category: "gantry-hoists",
    useCase: ["home", "clinic"],
    details: {
      uses: "Assists in patient transfers with one-person support; provides vertical lift only.",
      suitableFor:
        "Patients with severe mobility limitations requiring 1-person support.",
      example: "Quadriplegia and fully paralysed.",
    },
    image: "/products/Gantry Hoist (Single Motor)-1.png",
    images: [
      "/products/Gantry Hoist (Single Motor)-1.png",
      "/products/Gantry Hoist (Single Motor)-2.png",
      "/products/Gantry Hoist (Single Motor)-3.png",
    ],
    alt: "Gantry Hoist Single Motor for patient transfers by MOB-EASE Rehab",
    description:
      "The Gantry Hoist (Single Motor) is designed for seamless patient transfers, offering robust support for individuals with limited mobility. Ideal for home and clinical settings, it ensures safety and ease of use.",
    specifications: {},
  },
  {
    id: "gantry-hoist-dual-motor",
    name: "Gantry Hoist (Dual Motor)",
    category: "gantry-hoists",
    useCase: ["home", "clinic"],
    details: {
      uses: "Fully independent patient lifting and sideways movement.",
      suitableFor:
        "Patients with both hands functional who can manage self-transfers.",
      example: "Paraplegia.",
    },
    image: "/products/GantryHoist (Dual Motor)-1.png",
    images: [
      "/products/GantryHoist (Dual Motor)-1.png",
      "/products/GantryHoist (Dual Motor)-2.png",
      "/products/GantryHoist (Dual Motor)-3.png",
    ],
    alt: "Gantry Hoist Dual Motor for independent transfers by MOB-EASE Rehab",
    description:
      "The Gantry Hoist (Dual Motor) provides enhanced power for independent transfers, ensuring smooth operation and reliability in home or clinical environments.",
    specifications: {},
  },
  {
    id: "full-body-hoist-portable",
    name: "Full Body Hoist (Portable)",
    category: "hoists",
    useCase: ["home", "clinic"],
    details: {
      uses: "A portable hoist for dependent transfers with one-person assistance.",
      suitableFor:
        "Patients with complete mobility loss requiring full-body support.",
      example: "Quadriplegia.",
    },
    image: "/products/FullBodyHoist-1.webp",
    images: [
      "/products/FullBodyHoist-1.webp",
      "/products/FullBodyHoist-2.webp",
      "/products/FullBodyHoist-3.webp",
    ],
    alt: "Portable Full Body Hoist for complete mobility loss by MOB-EASE Rehab",
    description:
      "This portable full-body hoist is perfect for users with complete mobility loss, offering easy setup and reliable support in home or clinical settings.",
    specifications: {},
  },
  {
    id: "power-assisted-standing-hoist",
    name: "Power-Assisted Standing Hoist (Portable)",
    category: "hoists",
    useCase: ["home", "clinic", "rehabilitation"],
    details: {
      uses: "Provides powered standing assistance for transfers, gait training, and long-time standing practices.",
      suitableFor:
        "Patients with partial weight-bearing capability, muscle weakness, MS, etc.",
    },
    image: "/products/Power-Assisted-Standing-Hoist-(Portable)-1.webp",
    images: [
      "/products/Power-Assisted-Standing-Hoist-(Portable)-1.webp",
      "/products/Power-Assisted-Standing-Hoist-(Portable)-2.webp",
      "/products/Power-Assisted-Standing-Hoist-(Portable)-3.webp",
    ],
    alt: "Power-Assisted Standing Hoist for gait training by MOB-EASE Rehab",
    description:
      "The Power-Assisted Standing Hoist supports gait training and rehabilitation, providing powered assistance for standing and mobility exercises.",
    specifications: {},
  },
  {
    id: "sarah-steady-walking-board",
    name: "Sarah Steady with Walking Board",
    category: "paediatric-solutions",
    useCase: ["home", "clinic", "paediatric"],
    details: {
      uses: "Manual standing aid with optional walking practice.",
      suitableFor: "Patients transitioning from sitting to standing.",
    },
    image: "/products/Sarah-Steady-1.webp",
    images: ["/products/Sarah-Steady-1.webp", "/products/Sarah-Steady-2.webp"],
    alt: "Sarah Steady with Walking Board for standing aid by MOB-EASE Rehab",
    description:
      "The Sarah Steady with Walking Board is a pediatric solution designed to assist children with standing and walking, ideal for home and clinical use.",
    specifications: {},
  },
  {
    id: "gait-training-hoist",
    name: "Gait Training Hoist",
    category: "hoists",
    useCase: ["clinic", "rehabilitation"],
    details: {
      uses: "Supports standing practice and early-stage gait training.",
      suitableFor:
        "Post-surgical patients and those recovering from neurological conditions.",
    },
    image: "/products/Gait-Training-Hoist-1.webp",
    images: [
      "/products/Gait-Training-Hoist-1.webp",
      "/products/Gait-Training-Hoist-2.webp",
      "/products/Gait-Training-Hoist-3.webp",
    ],
    alt: "Gait Training Hoist for neurological recovery by MOB-EASE Rehab",
    description:
      "Designed for neurological recovery, the Gait Training Hoist supports patients during rehabilitation with secure and adjustable features.",
    specifications: {},
  },
  {
    id: "stair-lift-straight",
    name: "Stair Lift (Straight)",
    category: "stair-lifts",
    useCase: ["home"],
    details: {
      uses: "Assists patients with mobility issues in navigating straight staircases.",
      suitableFor:
        "Elderly patients or those with limited lower limb function.",
    },
    image: "/products/Stair-Lifts-(Straight)-1.webp",
    images: [
      "/products/Stair-Lifts-(Straight)-1.webp",
      "/products/Stair-Lifts-(Straight)-2.webp",
      "/products/StairLifts-(Straight)-3.webp",
    ],
    alt: "Straight Stair Lift for elderly mobility by MOB-EASE Rehab",
    description:
      "The Straight Stair Lift provides safe and comfortable mobility for elderly users navigating straight staircases in their homes.",
    specifications: {},
  },
  {
    id: "stair-lift-curved",
    name: "Stair Lift (Curved)",
    category: "stair-lifts",
    useCase: ["home"],
    details: {
      uses: "Customized lifts for navigating curved staircases.",
      suitableFor: "Patients with mobility limitations in multi-level homes.",
    },
    image: "/products/Stair-Lifts-(Curved).webp",
    images: [
      "/products/Stair-Lifts-(Curved).webp",
      // "/images/stair-lift-curved-2.jpg",
      // "/images/stair-lift-curved-3.jpg",
      // "/images/stair-lift-curved-4.jpg",
    ],
    alt: "Curved Stair Lift for multi-level homes by MOB-EASE Rehab",
    description:
      "Custom-designed for curved staircases, this stair lift ensures smooth and safe navigation for users in multi-level homes.",
    specifications: {},
  },
  {
    id: "car-swivel-seat-assisted",
    name: "Car Swivel Seat (With Assistance)",
    category: "wheelchairs",
    useCase: ["travel"],
    details: {
      uses: "Aids in car transfers with one-person assistance.",
      suitableFor: "Patients with limited lower body strength.",
    },
    image: "/products/Car-Swivel-Seat-(With Assistance)-1.webp",
    images: [
      "/products/Car-Swivel-Seat-(With Assistance)-1.webp",
      "/products/Car-Swivel-Seat-(With Assistance)-2.webp",
    ],
    alt: "Assisted Car Swivel Seat for transfers by MOB-EASE Rehab",
    description:
      "The Car Swivel Seat (With Assistance) simplifies vehicle transfers for users needing support, ideal for travel scenarios.",
    specifications: {},
  },
  {
    id: "car-swivel-seat-self-transfer",
    name: "Car Swivel Seat (Self-Transfer)",
    category: "wheelchairs",
    useCase: ["travel"],
    details: {
      uses: "Enables self-transfers using a wheelchair-integrated seat.",
      suitableFor:
        "Patients with moderate upper body strength for independent operation.",
    },
    image: "/products/Car Swivel Seat (Self-Transfer)-1.webp",
    images: [
      "/products/Car Swivel Seat (Self-Transfer)-1.webp",
      "/products/Car Swivel Seat (Self-Transfer)-2.webp",
    ],
    alt: "Self-Transfer Car Swivel Seat for independent mobility by MOB-EASE Rehab",
    description:
      "Designed for independent users, the Car Swivel Seat (Self-Transfer) enables easy vehicle entry and exit during travel.",
    specifications: {},
  },
  {
    id: "paediatric-sensory-room",
    name: "Paediatric Sensory Room Installation",
    category: "paediatric-solutions",
    useCase: ["home", "clinic", "paediatric"],
    details: {
      uses: "Custom calming space providing structured sensory input for children with disabilities.",
      goal: "Helps regulate sensory responses, enhances participation in learning and other activities.",
    },
    image: "/products/Paediatric Room Sensory Installation and Review-1.webp",
    images: [
      "/products/Paediatric Room Sensory Installation and Review-1.webp",
      "/products/Paediatric Room Sensory Installation and Review-2.webp",
    ],
    alt: "Paediatric Sensory Room for children with special needs by MOB-EASE Rehab",
    description:
      "The Paediatric Sensory Room Installation creates a calming and stimulating environment for children with special needs, suitable for homes and clinics.",
    specifications: {},
  },
  {
    id: "paediatric-disability-solutions",
    name: "Paediatric Room – Complete Disability Solutions",
    category: "paediatric-solutions",
    useCase: ["home", "clinic", "paediatric"],
    details: {
      uses: "Full set of paediatric disability mobility equipment.",
      goal: "Improve life quality and independence for children with mobility limitations using tools like wheelchairs, walkers, gait trainers, and powered scooters.",
    },
    image: "/products/Paediatric Room Complete Disability Solution-1.webp",
    images: [
      "/products/Paediatric Room Complete Disability Solution-1.webp",
      "/products/Paediatric Room Complete Disability Solution-2.webp",
    ],
    alt: "Paediatric Complete Disability Solutions for enhanced independence by MOB-EASE Rehab",
    description:
      "A comprehensive solution for pediatric disability needs, offering customized setups to enhance independence in home or clinical settings.",
    specifications: {},
  },
];
