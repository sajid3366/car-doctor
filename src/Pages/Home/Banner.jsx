import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
const Banner = () => {
    return (
        <div className="carousel h-[700px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-md"  />
                <div className="absolute flex h-full rounded-md items-center  gap-3 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="space-y-10 text-white w-1/2 px-5">
                        <h1 className="text-6xl font-bold">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, eos? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <div>
                            <button className="btn btn-secondary mr-5">Discover</button>
                            <button className="btn btn-outline btn-success">Success</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;