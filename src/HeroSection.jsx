import ProfileImage from './assets/profile.png'

export default function HeroSection() {

    return (
        <div class="bg-[#00413D] w-full bg-shape bg-left bg-no-repeat">
            <div class="flex flex-col md:flex-row items-center md:justify-end relative">
                <div
                    class="md:z-10 text-white p-5 font-velkorn md:absolute md:translate-x-1/2 md:translate-y-1/2 top-10 -left-16">
                    <h1 class="md:text-8xl text-3xl font-bold">Hello!</h1>
                    <span class="md:text-8xl text-3xl font-bold">I’m Zarror Nibors</span>
                    <p class="text-[rgba(255,255,255,0.51)] font-jost md:w-2/3">I’am freelance <span
                            class="text-white">UI/UX Desogner</span> based in Indonesia who loves to craft attractive
                        design experiences for the web.</p>
                    <div class="inline-flex font-jost md:my-8 my-5">
                        <button
                            class=" md:px-10 btn rounded-none bg-[#E5745D] text-white text-lg font-medium border-2 border-white  outline-[#E5745D] outline">Contact
                            Me</button>
                    </div>
                </div>
                <div class="">
                    <img src={ProfileImage} alt="" />
                </div>
            </div>
        </div>
    )
}