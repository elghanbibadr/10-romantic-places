const slideshow_topics_url ='https://vs.contentportal.link/items/slideshow_topics';
const slideshow_slides_url ='https://vs.contentportal.link/items/slideshow_slides/';

// const fetchData=async(url)=>{
//   const response=await fetch(url);
//   const {data}=await response.json();
//    console.log(data)
// }


// fetchData(slideshow_topics_url)
// fetchData(slideshow_slides_url)

const getSlideShow=async()=>{
    const response=await fetch(slideshow_topics_url);
  const {data}=await response.json();
  const tenRomanticPlacesData=data[0]
  console.log(tenRomanticPlacesData)
}


getSlideShow()