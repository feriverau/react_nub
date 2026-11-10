const products = [
  {
    id: 1,
    name: "Auriculares Inalámbricos",
    price: 99.99,
    image:
      "https://cdn.mos.cms.futurecdn.net/4DCcrAwRiefWKVRurUkUD4-1200-80.jpg",
    description:
      "Auriculares inalámbricos premium con cancelación de ruido y 30 horas de batería. Ideales para amantes de la música y profesionales.",
  },
  {
    id: 2,
    name: "Reloj Inteligente",
    price: 249.99,
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2026/09/BEST-IPHONE-SMARTWATCHES-0051.jpg?width=2048&quality=60&crop=2048:2048&auto=webp",
    description:
      "Smartwatch con seguimiento de actividad física, monitor de ritmo cardíaco y notificaciones del teléfono. Diseño resistente al agua.",
  },
  {
    id: 3,
    name: "Soporte para Laptop",
    price: 49.99,
    image:
      "https://i5.walmartimages.com/seo/Kraoden-Wooden-Laptop-Stand-Adjustable-Laptop-Stand-Office-Foldable-Design-Easy-Storage-Ergonomic-Laptop-Holder-Improved-Posture-Heat-Dissipation_79cb22f1-c730-4ddf-9134-bac9dbdcf4ae.be014960cd77b0342dab0494189de861.jpeg",
    description:
      "Soporte ergonómico de aluminio para laptop que mejora la postura y la organización del espacio de trabajo. Altura y ángulo ajustables.",
  },
  {
    id: 4,
    name: "Teclado Mecánico",
    price: 129.99,
    image:
      "https://cdn.mos.cms.futurecdn.net/QJmjTFuZ4YJ5ce2QAPLEKe-1200-80.jpg",
    description:
      "Teclado mecánico con retroiluminación RGB e interruptores Cherry MX. Perfecto para gamers y amantes de la escritura.",
  },
  {
    id: 5,
    name: "Hub USB-C",
    price: 39.99,
    image:
      "https://www.unitek-products.com/cdn/shop/files/UNITEK_Y-3090_7_Ports_Powered_USB_3.0_Hub_product_lifestyle_v3.jpg?v=1750930499&width=1000",
    description:
      "Hub USB-C multipuerto con HDMI, USB 3.0 y lector de tarjetas SD. Amplía la conectividad de tu laptop.",
  },
  {
    id: 6,
    name: "Mouse Inalámbrico",
    price: 29.99,
    image:
      "https://www.gloriousgaming.com/cdn/shop/files/GLO-OC-WL-BLK_Web_Gallery_6_Lifestyle1_2x_1eb3025d-64cb-422a-8ce4-a08e1a27b391.webp?v=1772724905&width=800",
    description:
      "Mouse inalámbrico ergonómico con seguimiento preciso y batería de larga duración. Cómodo para uso prolongado.",
  },
  {
    id: 7,
    name: "Soporte para Monitor",
    price: 79.99,
    image:
      "https://www.odinlake.com/cdn/shop/files/A_6_321f338f-e612-478b-a10a-7b7bf98a47ec.jpg?v=1766991030&width=1500",
    description:
      "Soporte doble para monitores con altura e inclinación ajustables. Libera espacio en el escritorio y mejora la ergonomía.",
  },
  {
    id: 8,
    name: "Cámara Web HD",
    price: 89.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXoFAiSb9jIXtub_MStfphqfJkkvGmMrcT5f0AwlUq6kZZvjm8-vLWJts&s=10",
    description:
      "Cámara web 1080p HD con enfoque automático y micrófono integrado. Ideal para videollamadas y transmisiones en vivo.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
