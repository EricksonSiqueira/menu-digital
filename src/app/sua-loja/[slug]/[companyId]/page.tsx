import ManagementScreenHeader from '@/components/ManagementScreenHeader';
import YourStore from '@/components/YourStore';

import api from '@/utils/api';
import { getCategories } from '@/utils/api/getCategories';
import { CompanyProps, RouterParams } from '@/utils/types';

import styles from './styles.module.css';

export default async function Page({ params }: RouterParams) {
  const result = await api.get<CompanyProps>(
    `/company/getCompanyById?id=${params.companyId}`
  );

  const { name, info } = result.data.company;

  const { categories } = await getCategories(params.companyId);

  return (
    <div className={styles.yourStore}>
      <ManagementScreenHeader
        companyLogoUrl={info.companyLogoUrl}
        companyName={name}
        hasBackButton
        title="Sua loja"
      />
      <main className={styles.yourStoreContent}>
        <YourStore categories={categories} />
      </main>
    </div>
  );
}