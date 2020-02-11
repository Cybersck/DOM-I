const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features", 
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//NAV
let nav = document.querySelector("nav");
let nava = document.querySelectorAll("nav>a");

//CTA
let cta = document.querySelector("section.cta"),
ctaText = cta.querySelector("div.cta-text"),
ctaH1 = ctaText.querySelector("h1"),
ctaB = ctaText.querySelector("button"),
ctaImg = cta.querySelector("img");
//MAIN
let main = document.querySelector("section.main-content"),
  mainTop = main.querySelector(".top-content"),
    topFirst = mainTop.querySelector(":first-child"),
      firstH = topFirst.querySelector("h4"),
      firstP = topFirst.querySelector("p"),
    topSecond = mainTop.querySelector("div:last-child"),
      secondH = topSecond.querySelector("h4"),
      secondP = topSecond.querySelector("p"),
  mainImg = main.querySelector("img"),
  mainBottom = main.querySelector(".bottom-content"),
    bottomH = mainBottom.querySelectorAll("h4"),
    bottomP = mainBottom.querySelectorAll("p");


//CONTACT
let contact = document.querySelector("section.contact"),
contactH  = contact.querySelector("h4"),
contactP = contact.querySelectorAll("p");

//FOOTER
let footer = document.querySelector("footer>p");

/*  END VARS  */

/* BEGIN ACTIONS */


//NAV
nava.forEach((i, j) => {
i.innerHTML = [Object.values(siteContent["nav"])[j]];
i.style.color = "green";
});
let newNav1 = document.createElement("a"), newNav2 = document.createElement("a");
let itemOne = document.createTextNode("Item 1"), itemTwo = document.createTextNode("Item 2");
newNav1.appendChild(itemOne), newNav2.append(itemTwo);
newNav1.style.color = "green", newNav2.style.color = "green";
nav.appendChild(newNav1), nav.appendChild(newNav2);


//CTA
ctaH1.innerHTML = siteContent["cta"]["h1"];
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
ctaB.innerHTML = siteContent["cta"]["button"];

//MAIN
  //TOP
firstH.innerHTML = siteContent["main-content"]["features-h4"];
firstP.innerHTML = siteContent["main-content"]["features-content"];
secondH.innerHTML = siteContent["main-content"]["about-h4"];
secondP.innerHTML = siteContent["main-content"]["about-content"];
  //MIDDLE
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
  //BOTTOM
let k = 5;
bottomH.forEach(i => {
i.innerHTML = [Object.values(siteContent["main-content"])[k]];
k+=2;
});
let l = 6;
bottomP.forEach(i => {
i.innerHTML = [Object.values(siteContent["main-content"])[l]];
});

//CONTACT
contactH.innerHTML = siteContent["contact"]["contact-h4"];

let o = 1;
contactP.forEach(i => {
i.innerHTML = [Object.values(siteContent["contact"])[o]];
o++;
});

//FOOTER
footer.innerHTML = siteContent["footer"]["copyright"];