interface ProductRowProps {
    product: { category: string; name: string; price: string; stocked: boolean };
}

export const ProductRow = ({ product }: ProductRowProps) => {
    const name = product.stocked ? product.name : <span style={{ color: 'tomato', fontWeight: 'bold' }}>{product.name}</span>;

    return (
        <>
            <tr className=' text-left px-4 border-4 border-orange-300'>
                <td className=' w-full'>{name}</td>
                <td className=' w-full'>{product.price}</td>
            </tr>
        </>
    );
};
