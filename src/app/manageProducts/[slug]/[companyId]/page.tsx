import CreateFormTrigger from '@/components/Dialogs/CreateFormDialog/CreateFormTrigger';
import ManagementScreenHeader from '@/components/ManagementScreenHeader';
import ProductsWithSearchInput from '@/components/ProductsWithSearchInput';

import api from '@/utils/api';
import { CompanyProps, RouterParams } from '@/utils/types';

import styles from './styles.module.css';

export default async function ManageProducts({ params }: RouterParams) {
  const { companyId } = params;

  const companyResults = await api.get<CompanyProps>(
    `/company/getCompanyById?id=${companyId}`
  );

  const { name, info } = companyResults.data.company;

  const { companyLogoUrl } = info;

  return (
    <div className={styles.manageProductsWrapper}>
      <ManagementScreenHeader
        companyLogoUrl={companyLogoUrl}
        companyName={name}
        backPage="/"
      />

      <CreateFormTrigger title="Produtos" formType="product-form" />
      <ProductsWithSearchInput companyId={companyId} />
    </div>
  );
}
