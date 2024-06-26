interface searchBarProps {
    filterText: string;
    isStockToggleOn: boolean;
    onFilterTextChange: React.Dispatch<React.SetStateAction<string>>
    handleClickToggle: React.MouseEventHandler<HTMLInputElement>;
}

export const SearchBar = ({ filterText, isStockToggleOn, handleClickToggle, onFilterTextChange }: searchBarProps) => {
    return (
        <div className='flex flex-col align-middle justify-start items-start p-2 border-4 border-blue-400 w-full h-[17%] truncate '>
            <form className='flex flex-col gap-3 w-full  '>
                <label htmlFor='search' className='flex justify-left pl-1'>
                    <input type='text' id='name' name='name' required className=' w-5/6d text-left' placeholder='Search...' value={filterText} onChange={e => onFilterTextChange(e.target.value)} />
                </label>

                <label className='truncate'>
                    <input type='checkbox' onClick={handleClickToggle} defaultChecked={isStockToggleOn} /> Only show products in stock Only Show products in stock Only Show products in stock
                </label>
            </form>
        </div>
    );
};
