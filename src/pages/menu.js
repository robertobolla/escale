const menus = [  
    {
        id: 1,
        name: 'Nosotros',
        links: '/about'
    }, 
    {
        id: 2,
        name: 'Servicios',        
        namesub: [
            {
                id: 1,
                sub: 'Landing',
                links: '/service-landing'
            },
            {
                id: 2,
                sub: 'Web Total',
                links: '/service-web'
            },
            {
                id: 3,
                sub: 'Ecommerce',
                links: '/service-ecommerce'
            },            
        ],
    },
    {
        id: 3,
        name: 'Contacto',
        links: '/contact'
    },
   
  
    
]

export default menus;