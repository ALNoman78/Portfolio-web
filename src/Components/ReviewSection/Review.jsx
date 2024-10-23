import PropTypes from 'prop-types'

const Review = () => {
    return (
        <div>
            <div className="hero bg-[#F9F4F1] my-10 md:my-5 py-12 ">
                <div className="hero-content block  md:w-8/12 mx-auto">
                <div className="flex items-center gap-3 my-4 text-red-400 justify-center font-semibold font-velkorn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fill-rule="evenodd"
                            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd" />
                    </svg>
                    <p>View Case Studies</p>
                </div>
                    <div className="flex md:flex-row flex-col w-full justify-around gap-6">
                        <div className="card bg-white text-[#00413D] border-[#E5745D] p-8  border-t-4 rounded-none grid  flex-grow place-items-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
                        typesetting industry</div>
                        <div className="card bg-white text-[#00413D] border-[#E5745D] p-8 pb-8 border-t-4 rounded-none grid flex-grow place-items-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
                        typesetting industry</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Review.propTypes = {}

export default Review