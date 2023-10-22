let takeNameH1 = document.querySelector('h2')
let takeProfessionH1 = document.querySelector('h4')
let takeParaReview = document.querySelector('p')
let takeimage = document.querySelector('img');
let takeLink  = document.querySelector('a')
let personsObject = [
    {
        image: 'wasay.jpeg',
        name: "Abdul Wasay Ghouri",
        profession: "Data Scientist",
        linkedin: "https://www.linkedin.com/in/wasay-tariq?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4NkWULxeSHuON433T6FZAg%3D%3D",
        review: "Wasay is diving into Python, pandas, AI, and data science – a promising journey. Python is an ideal start, and pandas will equip him for data manipulation. Exploring AI reflects forward-thinking, and aiming to become a data scientist is a wise choice. Exciting potential ahead a promising journey. Python is an ideal start!"
    },
    {   
         image: 'osama.jpg',
        name: "Syed Osama Ali",
        profession: "Weather Predictor",
        linkedin:"",
        review: "Syed Osama Ali, a weather predictor and nature lover, manages the Karachi Weather Facebook page. His accurate forecasts and passion for nature benefit the community. His work fosters weather awareness and an appreciation for the natural world in Karachi. Kudos to Osama for his valuable contributions!"
    },
    {
        image: 'sami.jpg',
        name: "Sami Ahmed",
        profession: "MERN Stack Developer",
        linkedin: "https://www.linkedin.com/in/sami-ahmed-420931215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlhmxUUw%2BTmygVCg26Hh9Bw%3D%3D",
        review: "Sami Ahmed, a dedicated MERN stack development student, is on a promising journey. His commitment to mastering this technology stack reflects a drive to create dynamic web applications. With his enthusiasm and skill set, he's set to make a mark in the ever-evolving web development landscape."
    }
]
function updateSlider() {
     takeimage.src = personsObject[currentIndex].image;
    takeNameH1.textContent = personsObject[currentIndex].name;
    takeProfessionH1.textContent = personsObject[currentIndex].profession;
    takeParaReview.textContent = personsObject[currentIndex].review;
    takeLink.href = personsObject[currentIndex].linkedin;


}
let currentIndex = 0;
function nextButton() {
   currentIndex++ ;
    if (currentIndex === personsObject.length) {
      currentIndex = 0; // Wrap around to the first review
    }
    updateSlider()
  }
  
  function previousButton() {
      currentIndex--;
    if (currentIndex < 0) {
      currentIndex = personsObject.length - 1; // Wrap around to the last review
    }
    updateSlider();
  }
  
updateSlider()
