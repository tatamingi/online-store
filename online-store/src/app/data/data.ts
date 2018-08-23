export const TYPES = [{
    title: 'dresses',
    queryParam: { category: 'dresses' }
  },
  {
    title: 'tops',
    queryParam: { category: 'tops' }
  },
  {
    title: 'denim',
    queryParam: { category: 'denim' }
  },
  {
    title: 'swim',
    queryParam: { category: 'swim' }
  }
]

export const FILTERS = [{
    title: 'price low to high',
    queryParam: { sort: 'asc' }
  },
  {
    title: 'price high to low',
    queryParam: { sort: 'desc' }
  }]

export const TYPES_MAIN_PAGE = [{
    title: 'dresses',
    imgUrl: '../../../assets/brigitte-dress-lipstick.jpg'
  },
  {
    title: 'denim',
    imgUrl: '../../../assets/Macgraw-crop-jean-stripe.jpg'
  },
  {
    title: 'swim',
    imgUrl: '../../../assets/Jade-one-piece-tropicana.jpg'
  },
  {
    title: 'tops',
    imgUrl: '../../../assets/Aurora-top-black.jpg'
  }]

export const CATEGORIES = [{
    title: 'types',
    items: TYPES
  },
  {
    title: 'sort by',
    items: FILTERS
  }]
