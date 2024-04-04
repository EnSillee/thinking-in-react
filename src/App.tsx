function App() {
    return (
        <>
            <div className='flex flex-col  w-full h-screen'>
                <div className='flex flex-col justify-center items-center m-4 h-[96%]'>
                    <div className=' p-4 h-full w-full lg:w-[1008px] min-w-[260px] border-4'>
                        <div className='flex flex-col align-middle justify-start items-start p-6 mb-4 border-4 border-blue-400 w-full h-[15%]'>
                            <div className='flex flex-col gap-2 w-full  '>
                                <div>
                                    <label htmlFor='name'></label>
                                    <input type='text' id='name' name='name' required className=' w-full' placeholder='Search...' />
                                </div>

                                <div>
                                    <div className='truncate'>
                                        <input type='checkbox' id='scales' name='scales' className='' />
                                        <label htmlFor='scales' className='pl-2 '>
                                            Only Show products in stock Only Show products in stock Only Show products in stock
                                        </label>
                                    </div>

                                    <div className='truncate'>
                                        <input type='checkbox' id='scales' name='scales' className='' />
                                        <label htmlFor='scales' className='pl-2 '>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla alias ducimus ut facere quibusdam modi beatae, impedit nisi repellat in nostrum, assumenda ad quos facilis
                                            reiciendis error repudiandae vel.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col p-4 h-[83%] border-4 border-purple-800 gap-4'>
                            <div className='flex text-xl'>
                                <div className=' w-1/2 text-center font-bold'>Name</div>
                                <div className=' w-1/2 text-center font-bold'>Price</div>
                            </div>
                            <div className='flex flex-col gap-1 '>
                                <div className='w-full text-center text-xl border-4 border-gray-400 font-bold'>Fruits</div>
                                <div className='w-full text-left pl-4 border-4 border-orange-300'>Apple</div>
                                <div className='w-full text-left pl-4 border-4 border-orange-300'>DragonFruit</div>
                                <div className='w-full text-left pl-4 border-4 border-orange-300'>PassionFruit</div>
                            </div>
                            <div className='flex flex-col gap-1 '>
                                <div className='w-full text-center text-xl border-4 border-gray-400 font-bold'>Vegetables</div>
                                <div className='w-full text-left pl-4 border-4 border-orange-300'>Spinach</div>
                                <div className='w-full text-left pl-4 border-4 border-orange-300'>Pumpkin</div>
                                <div className='w-full text-left pl-4 border-4 border-orange-300'>Peas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
