const apartments = [
  {
    id: 1,

    slug: "sri-lakshmi-residency",

    title: "Sri Lakshmi Residency",

    location: "Nallipalayam (Namakkal)",

    locationLink:
      "https://maps.app.goo.gl/EE7H3N8M3VxezLYP8",

    price: "Starting from ₹6499/month",

    image:
      "/assets/SLR/front_apartment.jpeg",

    description:
      "Affordable and comfortable residential apartments located in Nallipalayam, offering both 1 BHK and 2 BHK options suitable for families and working professionals.",

    availability: [
      {
        type: "1 BHK",
        sqft: 370,
        furnished: false,
      },

      {
        type: "2 BHK",
        sqft: 420,
        furnished: false,
      },
    ],

    bathrooms: 1,

    gallery: [
  "/assets/SLR/img_1.jpeg",

  "/assets/SLR/img_2.jpeg",

  "/assets/SLR/img_3.jpeg",

  "/assets/SLR/img_4.jpeg",

  "/assets/SLR/img_5.jpeg",

  "/assets/SLR/img_6.jpeg",
],
  },

  {
    id: 2,

    slug: "sga-spma-apartments",

    title: "SGA SPMA Apartments",

    location: "Bodhupatty (Namakkal)",

    locationLink:
      "https://maps.app.goo.gl/ztcx5JMmgy5FpeKG8",

    price: "Starting from ₹9999/month",

    image:
      "/assets/SGR-SPMR/Blur_front_view.jpeg",

    description:
      "Dedicated 1 BHK apartment residency designed for students, bachelors, and small families with peaceful surroundings and affordable pricing.",

    availability: [
      {
        type: "1 BHK",
        sqft: 350,
        furnished: false,
      },

      {
        type: "Studio Rooms",
        sqft: 50,
        furnished: false,
      },
    ],

    bathrooms: 1,

    gallery: [
      "/assets/SGR-SPMR/img_1.jpeg",

      "/assets/SGR-SPMR/img_2.jpeg",

      "/assets/SGR-SPMR/img_3.jpeg",

      "/assets/SGR-SPMR/img_4.jpeg",

      "/assets/SGR-SPMR/img_5.jpeg",
    ],
  },

  {
    id: 3,

    slug: "sri-ganesa-arcade",

    comingSoon: true,

    title: "Sri Ganesa Arcade",

    location: "Upcoming Project - Namakkal",

    locationLink:
      "https://maps.app.goo.gl/oroh6wC5yu9a6LH76",

    price: "Launching Soon",

    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",

    description:
      "A new premium residential project currently under development featuring modern architecture, spacious layouts, and enhanced luxury amenities.",

    availability: [
      {
        type: "1 BHK",
        sqft: 450,
        furnished: false,
      },

      {
        type: "2 BHK",
        sqft: 650,
        furnished: false,
      },
    ],

    bathrooms: 2,

    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",

      "https://images.unsplash.com/photo-1494526585095-c41746248156",

      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",

      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    ],
  },
];

export default apartments;