interface ProductCategoryRowProps {
    category: string;
}

export const ProductCategoryRow = ({ category }: ProductCategoryRowProps) => {
    return (
        <tr className='flex'>
            <th className='w-full text-center text-xl border-4 border-gray-400 font-bold'>{category}</th>
        </tr>
    );
};
