import { JSX } from 'react/jsx-runtime';
import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';

interface ProductTableProps {
    filterText: string;
    isStockToggleOn: boolean;
    products: { category: string; name: string; price: string; stocked: boolean }[];
}

export const ProductTable = ({ isStockToggleOn, products }: ProductTableProps) => {
    // console.log(products);

    const ProductCategoryRowArr: JSX.Element[] = [];
    let lastCategory: null | string;

    if (isStockToggleOn) {
        products = products.filter((product) => product.stocked);
    }

    products.forEach((product) => {
        // console.log(product);

        if (product.category !== lastCategory) {
            ProductCategoryRowArr.push(<ProductCategoryRow category={product.category} key={product.category} />);
            ProductCategoryRowArr.push(<ProductRow product={product} key={product.name} />);
        } else if (product.category === lastCategory) {
            ProductCategoryRowArr.push(<ProductRow product={product} key={product.name} />);
        }

        lastCategory = product.category;
    });

    // console.log(ProductCategoryRowArr)

    return (
        <table className='flex flex-col p-4 h-[83%] sm:h-full border-4 border-purple-800 gap-4 overflow-y-scroll  '>
            <thead className='flex text-xl'>
                <tr className='flex w-full'>
                    <th className=' w-1/2 text-center font-bold'>Name</th>
                    <th className=' w-1/2 text-center font-bold'>Price</th>
                </tr>
            </thead>
            <thead className='flex flex-col gap-2 '>{ProductCategoryRowArr}</thead>
        </table>
    );
};
