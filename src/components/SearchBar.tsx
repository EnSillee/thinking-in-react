export const SearchBar = () => {
    return (
        <div className='flex flex-col align-middle justify-start items-start p-4 border-4 border-blue-400 w-full h-[15%]'>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla alias ducimus ut facere quibusdam modi beatae, impedit nisi repellat in nostrum, assumenda ad quos facilis reiciendis
                            error repudiandae vel.
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
