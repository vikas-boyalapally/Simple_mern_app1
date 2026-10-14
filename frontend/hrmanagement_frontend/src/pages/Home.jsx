import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

function Home() {
    return(

        <div>
        
        <div id="carouselExampleInterval" class="carousel slide" data-bs-autoplay="true">
  <div class="carousel-inner rounded-5">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={img1} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src={img2} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item" data-bs-interval="6000">
      <img src={img3} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <div class="d-flex justify-content-between align-items-center mt-3">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <button class="btn-icon btn-sm carousel-control-play-pause" type="button" data-bs-target="#carouselExampleInterval" aria-label="Pause" data-bs-pause-label="Pause" data-bs-play-label="Play">
      <span class="carousel-icon-pause" aria-hidden="true"></span>
      <span class="carousel-icon-play" aria-hidden="true"></span>
    </button>
  </div>
</div>
        
        </div>

    )
}

export default Home