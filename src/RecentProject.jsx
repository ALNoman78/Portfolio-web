import ProjectImageOne from './assets/image (3).png'
import ProjectImageTwo from './assets/image (4).png'
import ProjectImageThree from './assets/image (3).png'
import ProjectImageFour from './assets/image (4).png'

export default function RecentProject () {
    return (
        <section className='md:w-8/12 mx-auto w-full relative'>
            <div className="md:my-10 md:m-0 m-4 flex flex-col justify-center">
                <div className="flex items-center gap-3 my-4 text-red-400 justify-center font-semibold font-velkorn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fill-rule="evenodd"
                            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>
                    <p>View Case Studies</p>
                </div>
                <div className="">
                    <h3 className="md:text-5xl text-3xl font-velkorn font-extrabold text-green text-center">My Recent Projects</h3>
                </div>
            </div>
            <div className="content">
                <nav className="flex items-center justify-center">
                    <ul className="flex justify-center items-center md:gap-9 gap-5 text-green font-velkorn flex-wrap px-4 text-lg font-semibold">
                        <li className="hover:border-b-2 hover:border-red-300 hover: cursor-pointer">All</li>
                        <li className="hover:border-b-2 hover:border-red-300 hover: cursor-pointer">Branding</li>
                        <li className="hover:border-b-2 hover:border-red-300 hover: cursor-pointer">Photography</li>
                        <li className="hover:border-b-2 hover:border-red-300 hover: cursor-pointer">Fashion</li>
                        <li className="hover:border-b-2 hover:border-red-300 hover: cursor-pointer">Product</li>
                    </ul>
                </nav>
                <div className="grid grid-cols-1 md:grid-cols-2 md:my-10 my-5 gap-y-5 relative p-2">
                    <div>
                        <div className="relative"><img className="" src={ProjectImageOne} alt="" /></div>
                        <div className="absolute bg-[#00413D] p-4 w-[45%] text-white z-10 inset-x-0 top-[28rem] font-semibold font-velkorn">Motion Graphics
                            <p className="font-normal">Website</p>
                        </div>
                    </div>
                    <div>
                        <div className="relative"><img src={ProjectImageTwo} alt="" /></div>
                        <div className="absolute bg-[#00413D] p-4 w-[45%] text-white z-10 font-semibold top-[28rem] font-velkorn">E-Learning App
                            <p className="font-normal">IOS App</p>
                        </div>
                    </div>
                    <div>
                        <div className="relative"><img src={ProjectImageThree} alt="" /></div>
                        <div className="absolute bg-[#00413D] p-4 w-[45%] text-white bottom-0 font-semibold font-velkorn">E-Learning App
                            <p className="font-normal">IOS App</p>
                        </div>
                    </div>
                    <div>
                        <div className="relative"><img src={ProjectImageFour} alt="" /></div>
                        <div className="absolute bg-[#00413D] p-4 w-[45%] text-white bottom-0 font-semibold font-velkorn">E-Learning App
                            <p className="font-normal">IOS App</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}