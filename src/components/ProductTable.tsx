import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';

export const ProductTable = () => {
    return (
        <div className='flex flex-col p-4 h-[83%] border-4 border-purple-800 gap-4'>
            <div className='flex text-xl'>
                <div className=' w-1/2 text-center font-bold'>Name</div>
                <div className=' w-1/2 text-center font-bold'>Price</div>
            </div>
            <div className='flex flex-col gap-1 '>
                <ProductCategoryRow />
                <ProductRow />
            </div>
            <div className='flex flex-col gap-1 '>
                <ProductCategoryRow />
                <ProductRow />
            </div>
        </div>
    );
};
