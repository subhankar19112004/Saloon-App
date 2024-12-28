import { Carousel } from "react-responsive-carousel";
import "./Crousel.css";

function Crousel() {
  return (
    <>
      <div className=" m-4">
        <div className="" >
          <Carousel infiniteLoop emulateTouch interval={4000} swipeable showStatus={false}>
            <div>
              <img src="https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA=" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA=" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA=" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Crousel;
