import FirstIcon from './assets/icon.png'
import SecondIcon from './assets/booking 1 (Traced).png'
import ThirdIcon from './assets/web-design 1 (Traced).png'
import AbsoluteImage from './assets/bulet_shape.png'

export default function CardsSection () {
    return (
        <section className="md:w-8/12 mx-auto w-full relative md:my-24 my-6">
            <div className="flex justify-center items-center gap-3 my-4 text-red-400 font-semibold font-velkorn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fill-rule="evenodd"
                        d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd" />
                </svg>
                <p>MY SERVICES</p>
            </div>
            <h3 className="md:text-5xl text-3xl font-extrabold text-center md:w-2/4 font-velkorn mx-auto md:mb-10 mb-4">
                Provide Wide Range of
                Digital Services</h3>
            <div className="grid md:grid-cols-3 grid-cols-1 p-4 gap-5">
                <div className="card bg-base-100 md:w-96 w-full  rounded-none shadow-xl">
                    <div className="card-body">
                        <div>
                            <img src={FirstIcon} alt="" />
                        </div>
                        <h2 className="card-title font-velkorn md:mt-4 font-extrabold">Ui/Ux Design</h2>
                        <p className="my-4 text-green">Dolor repellendus tempo ribus aue
                            quibusdam offi ciis debitis rerum na
                            aibus minima veniam.</p>
                        <div className="card-actions justify-start cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 md:w-96 w-full  rounded-none shadow-xl">
                    <div className="card-body">
                        <div>
                            <img src={SecondIcon} alt="" />
                        </div>
                        <h2 className="card-title font-velkorn md:mt-4 font-extrabold">Ui/Ux Design</h2>
                        <p className="my-4 text-green">Dolor repellendus tempo ribus aue
                            quibusdam offi ciis debitis rerum na
                            aibus minima veniam.</p>
                        <div className="card-actions justify-start cursor-pointer text-red-400 font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 md:w-96 w-full  rounded-none shadow-xl">
                    <div className="card-body">
                        <div>
                            <img src={ThirdIcon} alt="" />
                        </div>
                        <h2 className="card-title font-velkorn md:mt-4 font-extrabold">Ui/Ux Design</h2>
                        <p className="my-4 text-green">Dolor repellendus tempo ribus aue
                            quibusdam offi ciis debitis rerum na
                            aibus minima veniam.</p>
                        <div className="card-actions justify-start cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:block hidden absolute -left-40 top-28 inset-y-0">
                <img src={AbsoluteImage} alt="" />
            </div>
        </section>
    )
}