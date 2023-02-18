Reveal.initialize({
    stretch: true,
    hash: true
});
const slideshow_topics_url = "https://vs.contentportal.link/items/slideshow_topics";
const slideshow_slides_url = "https://vs.contentportal.link/items/slideshow_slides/";
const imagesUrl = "https://vs.contentportal.link/assets/";
const slideOne = document.querySelector(".slide1");
// create a resuable function to fetch data
const fetchData = async (url)=>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
// fetch all the slideShow topic data
const getSlideShowTopic = async ()=>{
    return await fetchData(slideshow_topics_url);
};
// fetch all the slideShowSlides data
const getSlideShowSlides = async ()=>{
    return await fetchData(slideshow_slides_url);
};
// lets create the 10 romantic place slide show
const createSlideShow = async ()=>{
    // grab all the slides show topics
    const { data: slideShowsTopic  } = await getSlideShowTopic();
    // get the ten romantic places  slideshow data
    const tenRomanticPlacesData = slideShowsTopic[0];
    //
    const { data: slideShowSlides  } = await getSlideShowSlides();
    const { slideshow_slides  } = tenRomanticPlacesData;
    // filter the list of slidesshow to get only the slides relevent to 10 romantic places data
    const slideForTheCurrentSlidShow = slideShowSlides.filter((element)=>slideshow_slides.includes(element.id));
    slideForTheCurrentSlidShow.forEach((element)=>{
        // iterat over the slideShowSlides and map their data to a slider section
        const currentSlide = document.getElementById(element.id);
        currentSlide.innerHTML = `
        <p >${element.content_text}</p>
      <img  src=${imagesUrl + element.image}>     
       `;
    });
};
createSlideShow();

//# sourceMappingURL=index.c23fc720.js.map
