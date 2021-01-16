const WELL_KNOWN_PRODUCT = {
    id: '60022b0018f29935e319f966',
    name: 'Audio-Technica ATHM50XBT Wireless Bluetooth Over-Ear Headphones, Black',
    description: 'Wireless, on the go design delivers the same critically acclaimed sonic performance as the original ATH M50x professional studio headphones',
    categories: ['Electronics'],
    sold: false,
    info: {
        condition: 'New',
        hasDelivery: true
    },
    properties: [
        {
            propertyName: "Brand",
            propertyValue: "Audio-Technica",
        },
        {
          propertyName: "Connections",
          propertyValue: "Wireless",
        },
        {
            propertyName: "Color",
            propertyValue: "Black",
        }
      ],
      tags: [
        'Headphones', 'Bluetooth', 'Wireless'
      ],
      price: {
        currency: "DOP",
        amount: 12000
      },
      createdDate: new Date()
};


module.exports = {
    WELL_KNOWN_PRODUCT
}