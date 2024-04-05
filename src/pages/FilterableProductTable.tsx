import { ProductTable } from '../components/ProductTable';
import { SearchBar } from '../components/SearchBar';

interface ProductTableProps {
    products: { category: string; name: string; price: string; stocked: boolean }[];
}

export const FilterableProductTable = ({ products }: ProductTableProps) => {
    return (
        <div className='flex flex-col  w-full h-screen'>
            <div className='flex flex-col justify-center items-center m-4 h-[83%]'>
                <div className='flex flex-col p-4 h-full w-full lg:w-[1008px] min-w-[260px] border-4 gap-2'>
                    <SearchBar />
                    <ProductTable products={products} />
                </div>
            </div>
        </div>
    );
};
