import FirstImage from './assets/image.png'
import SecondImage from './assets/port 01.png'
import ThirdImage from './assets/port 02.png'

export default function Projects () {
    return (
        <section className="md:w-8/12 mx-auto w-full relative md:my-24 my-6">
            <div className="md:my-10 md:m-0 m-4">
                <div className="flex items-center gap-3 my-4 text-red-400 font-semibold font-velkorn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fill-rule="evenodd"
                            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>
                    <p>View Case Studies</p>
                </div>
                <div className="flex justify-between">
                    <h3 className="md:text-5xl text-3xl font-velkorn font-extrabold text-green">My Recent Projects</h3>
                    <div className="inline-flex gap-4">
                        <i
                            className="fa-solid fa-arrow-left border p-3 cursor-pointer flex-col flex justify-center items-center px-5"></i>
                        <i
                            className="fa-solid fa-arrow-right border p-3 cursor-pointer text-white bg-orange flex-col flex justify-center items-center px-5"></i>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:m-0 m-4">
                <div className="card bg-base-100 md:w-96 w-full rounded-none shadow-xl">
                    <figure>
                        <img src={FirstImage} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-velkorn font-medium text-lg text-orange">Analytics, UI-Ux</h2>
                        <p className="text-green text-xl font-medium">Branding & Digital Video Campaign For George’s Cafe
                        </p>
                        <p className="text-[16px] text-green">Lorem Ipsum Is Simply Dummy Text Of The
                            Printing And Typesetting Industry.</p>
                        <div className="card-actions">
                            <div className="flex justify-center items-center gap-3 my-4  font-semibold font-velkorn">
                                <p>View Case Studies</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-6">
                                    <path fill-rule="evenodd"
                                        d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 md:w-96 w-full rounded-none shadow-xl">
                    <figure>
                        <img src={SecondImage} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-velkorn font-medium text-lg text-orange">Mobile App</h2>
                        <p className="text-green text-xl font-medium">Branding & Digital Video Campaign For George’s Cafe
                        </p>
                        <p className="text-[16px] text-green">Lorem Ipsum Is Simply Dummy Text Of The Printing And
                            Typesetting Industry.</p>
                        <div className="card-actions">
                            <div
                                className="flex justify-center items-center gap-3 my-4  font-semibold font-velkorn text-orange">
                                <p>View Case Studies</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-6">
                                    <path fill-rule="evenodd"
                                        d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 md:w-96 w-full rounded-none shadow-xl">
                    <figure>
                        <img src={ThirdImage} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-velkorn font-medium text-lg text-orange">Web Development</h2>
                        <p className="text-green text-xl font-medium">Branding & Digital Video Campaign For George’s Cafe
                        </p>
                        <p className="text-[16px] text-green">Lorem Ipsum Is Simply Dummy Text Of The
                            Printing And Typesetting Industry.</p>
                        <div className="card-actions">
                            <div className="flex justify-center items-center gap-3 my-4  font-semibold font-velkorn">
                                <p>View Case Studies</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-6">
                                    <path fill-rule="evenodd"
                                        d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center font-jost md:my-8 my-5">
                <button
                    className=" md:px-10 btn rounded-none bg-[#E5745D] text-white text-lg font-medium border-2 border-white  outline-[#E5745D] outline hover:bg-[#E5745D]">Explore
                    More</button>
            </div>
        </section>
    )
}