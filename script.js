new Vue({
  el: "#store-app",
  data: {
    items: [
      {
        name: "American Acoustasonic® Stratocaster®",
        type: "Guitar",
        price: "1999.99",
        brand: "Fender",
        image: "https://www.fmicassets.com/Damroot/ZoomJpg/10001/0972023254_gtr_frt_001_rr.jpg",
        hover: false,
        popUpStatus: false
      },
      {
        name: "V3SKA Acoustic Violin",
        type: "Violin",
        price: "400.00",
        brand: "Yamaha",
        image: "https://www.yamahamusiclondon.com/sites/ymlv5.19/productimages/900x900/KV3SKA34.jpg",
        hover: false,
        popUpStatus: false
      },
      {
        name: "Dreadnought Acoustic Guitar",
        type: "Guitar",
        price: "1949.00",
        brand: "Maton",
        image: "https://www.patsmusic.com.au/images/thumbnails/280/186/detailed/5418/EBW70CHero.jpg",
        hover: false,
        popUpStatus: false
      },
      {
        name: "Stratocaster HSS Maple",
        type: "Guitar",
        price: "669.00",
        brand: "Fender",
        image: "https://i.ebayimg.com/images/g/JrMAAOSw6NVeUl1J/s-l640.jpg",
        hover: false,
        popUpStatus: false
      },
      {
        name: "PORTATONE Electronic Keyboard",
        price: "850.00",
        type: "Keyboard",
        brand: "Yamaha",
        image: "https://i.ebayimg.com/images/g/n4wAAOSwYlJW5Ck5/s-l500.jpg",
        hover: false,
        popUpStatus: false
      },
      {
        name: "Maton EBG 808 TE Tommy Emmanuel",
        type: "Guitar",
        price: "2495.00",
        brand: "Maton",
        image: "https://i.ebayimg.com/images/g/tFoAAOSwDNFde1Mu/s-l1600.jpg",
        hover: false,
        popUpStatus: false
      },
      {
        name: "PEERLESS  MONARCH",
        type: "Guitar",
        price: "1315.00",
        brand: "Fender",
        image: "https://i.ebayimg.com/images/g/tfAAAOSwBahVHZSd/s-l1600.jpg",
        hover: false,
        popUpStatus: false
      },
      {
        name: "Rock Drum Set Classic Walnut",
        type: "Drums",
        price: "3829.99",
        brand: "Yamaha",
        image: "https://i.ebayimg.com/images/g/KRMAAOSwg9Rd-QgC/s-l1600.jpg",
        hover: false,
        popUpStatus: false
      },
      {
        name: "MATON M225",
        type: "Guitar",
        price: "1290.00",
        brand: "Maton",
        image: "https://i.ebayimg.com/images/g/YjcAAOSwRrJdL9X~/s-l1600.jpg",
        hover: false,
        popUpStatus: false
      }
    ],
    popUpShow: false,
    popUpShowAdd: false,
    popUpItem: {},
    cart: [],
    nameAdd: "",
    priceAdd: "",
    brandAdd: "Fender",
    typeAdd: "",
    cartImg: "https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532656hbykl.png",
    noImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png"
  },

  methods: {
    addCartItem: function(item, index) {
        this.cart.push(item);
      this.items.splice(index,1)
    },
    emptyCart: function() {
      this.items=this.items.concat(this.cart);
      this.cart=[];
    },
    
    popUp: function(item, index) {
      this.popUpShow=!this.popUpShow;
      window.scrollTo(0,0);
      this.popUpItem=item;
      this.popUpIndex=index;
    },
    popUpAdd: function() {
      this.popUpShowAdd=!this.popUpShowAdd;
      window.scrollTo(0,0);
    },
    
    addNewItem: function() {
      if (this.nameAdd.trim() != "" && this.priceAdd.trim() != "") {
        this.items.push({
          name: this.nameAdd.trim(),
          type: this.typeAdd.trim(),
          price: this.priceAdd.trim(),
          brand: this.brandAdd,
          noImg: true,
          hover: false
        });
      } else {
        alert("Enter Details and Submit");
      }
      this.nameAdd = "";
      this.priceAdd = "";
      this.typeAdd = "";
    },
  }
});