const Loop = () => {
    return (
        <div>
        <div class="2xl:container mx-auto bg-[#FD4E25]  mt-16 ">

            <div class="hidden md:block">
            <h1 className="text-[73px] text-center text-white font-medium font-[Inter] pt-14 ">Keep every one in the loop</h1>

                <div class="w-[90%] md:w-[80%] mx-auto grid grid-cols-1">
                    <div className="">
                        <p className="leading-none text-center text-white font-normal font-[Inter] pt-4">All good things starts with a homepage. Get  inspired without breaking your wallet</p>
                        <p className="leading-none text-center text-white font-normal font-[Inter] pt-2">inspired without breaking your wallet</p>
                        <div className="flex justify-center mt-4">
                        <button className="bg-white py-2 px-4 rounded-full text-black hover:bg-blue-500"><a href="#">Start for free</a></button>

                        </div>
                        <div className="flex justify-center mt-4">
                        <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(21).png" className="mt-6"/>

                        </div>
                    </div>

                
    
    </div>
    </div>

    {/*Mobile view*/}
    <div class="sm:block md:hidden">
            <h1 className="leading-none text-[40px] text-left text-white font-medium font-[Inter] pt-14 pl-4 ">Keep every one in the loop</h1>

                <div class="w-[90%] md:w-[80%] mx-auto grid grid-cols-1">
                    <div className="">
                        <p className="leading-none text-left text-white text-[20px] font-normal font-[Inter] mt-6 pb-2">All good things starts with a</p>
                        <p className="leading-none text-left text-white text-[20px] font-normal font-[Inter] pb-2">homepage. Get  inspired without </p>

                        <p className="leading-none text-left text-white text-[20px] font-normal font-[Inter] ">breaking your wallet</p>
                        <div className="flex justify-start mt-6">
                        <button className="bg-white py-2 px-4 rounded-full text-black hover:bg-blue-500"><a href="#">Start for free</a></button>

                        </div>
                        <div className="flex justify-center mt-4">
                        <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(21).png" className="mt-6"/>

                        </div>
                    </div>

                
    
    </div>
    </div>

    </div>
    </div>
    )
}

export default Loop