export default function ServiceSection() {
    return (
        <section className="flex md:flex-row flex-col justify-around gap-5 items-center p-3 ">
            <div className="flex-1">
                <div className="grid grid-cols-2 gap-4 ">
                    <div className="row-span-2 w-full">
                        <img className="w-full h-full object-cover " src="./asstes/image (2).png" alt="" />
                        </div>
                    <div className="md:w-[270px] w-full">
                        <img className="w-full object-cover md:h-[200px]" src="./asstes/Your Images Here.png" alt="" />
                        </div>
                    <div className="md:w-[270px] w-full">
                        <img className="w-full object-cover md:h-[200px]" src="./asstes/Your Images Here (1).png" alt="" />
                        </div>
                </div>
            </div>
            <div className="flex-1 ">
                <div className="flex items-center gap-3 my-4 text-red-400 font-semibold font-velkorn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fill-rule="evenodd"
                            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>
                    <p>MY SERVICES</p>
                </div>
                <h3 className="md:text-5xl text-3xl font-velkorn font-medium text-green py-3">I Enjoy Solving Problems
                    With Scalable Solutions</h3>
                <p className="text-[16px] text-green ">Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
                    aeci velit, sed quia non numquam eius modi tempora incidunt lao
                    magnam aliquam quaerat voluptatem reprehenderit.</p>
                <br>
                    <p className="text-[16px] text-green ">Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
                        reprehenderit non numquam eius.</p>
                    <div className="inline-flex font-jost md:my-8 my-5"></div>
                    <button
                        className=" md:px-10 btn rounded-none hover:bg-[#E5745D] bg-[#E5745D] text-white text-lg font-medium border-2 border-white  outline-[#E5745D] outline"
                        onclick="my_modal_4.showModal()">Download
                        CV</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box flex justify-center items-center flex-col w-96 max-w-5xl">
                            <h3 className="text-lg font-bold">Download Start</h3>
                            <p className="py-4">Click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <div><button className="btn">Close</button></div>
                                </form>
                            </div>
                        </div>
                    </dialog>
            </div>
        </div>
        </section >
    )
}