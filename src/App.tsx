import { FilterableProductTable } from './pages/FilterableProductTable';

const PRODUCTS = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
    { category: 'Vegetables', price: '$3', stocked: true, name: 'Carrot' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Garlic' },
    { category: 'Vegetables', price: '$5', stocked: true, name: 'Cabbage' },
    { category: 'Vegetables', price: '$3', stocked: false, name: 'Carrot2' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Garlic2' },
    { category: 'Vegetables', price: '$5', stocked: true, name: 'Cabbage2' },
    
];

function App() {
    return <FilterableProductTable products={PRODUCTS} />;
}

export default App;
