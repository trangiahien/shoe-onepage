const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  
let choosenProduct = products[0];

const wrapper = $(".sliderWrapper");
const menuItem = $$(".menuItem");

const currentProductImg = $(".productImg");
const currentProductTitle = $(".productTitle");
const currentProductPrice = $(".productPrice");
const currentProductColors = $$(".color");
const currentProductSizes = $$(".size");

const productButton = $(".productButton");
const payment = $(".payment");
const close = $(".close");


menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change slider
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change product
        choosenProduct = products[index];

        //change text product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //change color product
        currentProductColors.forEach((color, index) => {
          color.style.background = choosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", ()=>{
  //change img product
  currentProductImg.src = choosenProduct.colors[index].img;
  })
})

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () =>{
    currentProductSizes.forEach(size =>{
      size.style.background = "#fff";
      size.style.color = "#333";
    });
    size.style.background = "#333";
    size.style.color = "#fff";
  })
})

//modal
productButton.addEventListener("click", ()=>{
  payment.style.display = "flex";
  payment.classList.add("scale-up-center")
});
close.addEventListener("click", ()=>{
  payment.style.display = "none";
})

