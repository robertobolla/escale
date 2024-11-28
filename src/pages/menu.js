const menus = [
  {
    id: 1,
    name_es: "Nosotros",
    name_en: "About",
    links: "/about",
  },
  {
    id: 2,
    name_es: "Servicios",
    namesub: [
      {
        id: 1,
        sub: "Landing",
        links: "/service-landing",
      },
      {
        id: 2,
        sub: "Web Total",
        links: "/service-web",
      },
      {
        id: 3,
        sub: "Ecommerce",
        links: "/service-ecommerce",
      },
      {
        id: 4,
        sub: "Ticket",
        links: "/ticket",
      },
    ],
  },
  {
    id: 3,
    name_es: "Contacto",
    links: "/contact",
  },
];

export default menus;
