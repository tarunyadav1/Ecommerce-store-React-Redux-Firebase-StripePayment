const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://i.ibb.co/Kwh55xS/joe-ciciarelli-Fw-Vn-AY-x-Ma-Y-unsplash.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/Nt3QcrM/revolt-164-6w-VEHf-I-unsplash.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://i.ibb.co/xL3w93v/radu-florin-OP8655xg-Bjo-unsplash.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://i.ibb.co/R6xrbK8/jakob-owens-lk-MJc-GDZLVs-unsplash.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
