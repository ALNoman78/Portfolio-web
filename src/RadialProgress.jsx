export default function RadialProgress() {
    return (
        <section className="grid md:grid-cols-4 grid-cols-1 gap-3 bg-transparent md:my-20 my-9 p-5 md:w-8/12 mx-auto w-full relative">
            <div className="shadow-lg  flex justify-center flex-col items-center  text-green ">
                <div className="radial-progress size-[7rem] after:bg-none after:inset-[56px] text-[#E5745D] font-velkorn font-semibold md:text-4xl my-3 rounded-none "
                    style={{"--value":70}} role="progressbar">70%</div>
                <p className="font-medium md:text-2xl font-velkorn p-3">Graphics Design</p>
            </div>
            <div className="shadow-lg  flex justify-center flex-col items-center  text-green ">
                <div className="radial-progress size-[7rem] after:bg-none after:inset-[56px] text-[#E5745D] font-velkorn font-semibold md:text-4xl my-3 rounded-none "
                    style={{"--value":80}} role="progressbar">85%</div>
                <p className="font-medium md:text-2xl font-velkorn p-3">Web Designing</p>
            </div>
            <div className="shadow-lg  flex justify-center flex-col items-center  text-green ">
                <div className="radial-progress size-[7rem] after:bg-none after:inset-[56px] text-[#E5745D] font-velkorn font-semibold md:text-4xl my-3 rounded-none "
                    style={{"--value":60}} role="progressbar">60%</div>
                <p className="font-medium md:text-2xl font-velkorn p-3">Brand Design</p>
            </div>
            <div className="shadow-lg  flex justify-center flex-col items-center  text-green ">
                <div className="radial-progress size-[7rem] after:bg-none after:inset-[56px] text-[#E5745D] font-velkorn font-semibold md:text-4xl my-3 rounded-none "
                    style={{"--value":75}} role="progressbar">75%</div>
                <p className="font-medium md:text-2xl font-velkorn p-3">Web Development</p>
            </div>
        </section>
    )
}