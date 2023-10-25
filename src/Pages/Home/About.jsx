import preson from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'> 
                    <img src={preson} className="lg:w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 top-1/2 right-5 border-8 border-white absolute rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2 space-y-4'>
                    <h1 className="text-3xl text-red-500 font-bold mb-3">About Us</h1>
                    <h1 className='text-5xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="py-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;