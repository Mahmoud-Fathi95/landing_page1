// define sections gloabal variable
const sections = document.querySelectorAll('section');
//define navigation gloabal variable
const ulist = document.querySelector("#navbar__list");

//create fake container that is working off screen
const frag = document.createDocumentFragment();
//looping over sections
  sections.forEach((section) => {
    //create new list items
  const newli = document.createElement('li');
  //create new anchor items
  const newa = document.createElement('a');
  //add click event
  newa.addEventListener('click', function(even){
    //prevent click event from working
    even.preventDefault();
    // apply scroll event instead of click event
     section.scrollIntoView({'behavior':'smooth'});
     });
     // get datanav from each section
    let getdata = section.getAttribute("data-nav");
    // get id of each section
    const secid = section.getAttribute('id');
    // create new class with the same name in css file to the links
    const newclass = document.createAttribute('class');
newclass.value='menu__link';

    const text = document.createTextNode(getdata);
    //create new href with the same name of section id to add it to the links
    const newatt = document.createAttribute('href');
newatt.value= '#'+secid;
newa.setAttributeNode(newatt);
newa.setAttributeNode(newclass);
//append elements to each other
    newa.appendChild(text);
    newli.appendChild(newa);
    frag.appendChild(newli);
});
//append fragment (container) to the unordered list
ulist.appendChild(frag);
//remove all classes from the sections
const removeactiv = (section) => {
  section.classList.remove("your-active-class");
  //get the background before
  section.style.cssText ='background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)';
};
//add class only to the active section that viewed in the viewport
const addactiv = (conditional,section) => {
  if(conditional){
    section.classList.add("your-active-class");
    //add different color to the active section 
    section.style.cssText = 'background-color: coral';
  };
};
//define function to loop over sections
 const activsec = () => {
   sections.forEach((section) => {
     const rect = section.getBoundingClientRect().top;
     // put condition when section enter the viewport
     view= () => rect < 100 && rect >= -100;
  //apply remove and add classes to the sections
     removeactiv(section);
     addactiv(view(),section);
   });
 } ;
 //call activsec function with scroll event
 window.addEventListener('scroll', activsec);
