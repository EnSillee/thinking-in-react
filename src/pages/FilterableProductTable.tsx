import { ProductTable } from '../components/ProductTable';
import { SearchBar } from '../components/SearchBar';

export const FilterableProductTable = () => {
    return (
        <div className='flex flex-col  w-full h-screen'>
            <div className='flex flex-col justify-center items-center m-4 h-[96%]'>
                <div className='flex flex-col p-4 h-full w-full lg:w-[1008px] min-w-[260px] border-4 gap-2'>
                    <SearchBar />
                    <ProductTable />
                </div>
            </div>
        </div>
    );
};
