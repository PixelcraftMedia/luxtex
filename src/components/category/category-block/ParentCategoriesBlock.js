import ProductCategoryBlock from "./ParentCategoryBlock";

const ParentCategoriesBlock = ( props ) => {

	const { productCategorArkanaHome, productCategorArkanaProf, productCategories } = props || {};

	return (
		<div className="product-categories grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
			{ productCategorArkanaProf ? 
				productCategorArkanaProf?.map( ( productCategory, index ) => <ProductCategoryBlock key={ productCategory?.id ?? index }  category={ productCategory }/> ) 
				: productCategorArkanaHome ? productCategorArkanaHome?.map( ( productCategory, index ) => <div>{ productCategory.children?.nodes.map((pr, index) => <ProductCategoryBlock key={ productCategory?.id ?? index }  category={ pr }/>)}</div> ) 
				: productCategories?.map( ( productCategory, index ) => <ProductCategoryBlock key={ productCategory?.id ?? index }  category={ productCategory }/> )
			 }

		</div>
	)

};

export default ParentCategoriesBlock;
