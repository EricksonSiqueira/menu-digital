export interface ProductResponse {
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  discount: null;
  companyId: string;
  productCategoriesId: string;
  createdAt: string;
  updatedAt: string;
  productsImages: ProductsImage[];
  productsComplements: ProductsComplement[];
}

export interface ProductsComplement {
  productsId: string;
  complementId: string;
  complements: Complements;
}

export interface Complements {
  id: string;
  name: string;
  maxAmount: number;
  createdAt: string;
  updatedAt: string;
  items: any[];
}

export interface ProductsImage {
  id: string;
  name: string;
  imageUrl: string;
  alt: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
}

export interface EditProductPayload {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  categoryId?: string;
  complementsId?: string[];
  complementsToRemove?: string[];
}

export interface EditProductResponse {
  productData: Product;
}
