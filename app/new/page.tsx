import Cards from 'components/cards';
import Layout from 'components/home-layout';
import Table from 'components/table';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Layout>
      <Suspense fallback={<Cards loading />}>
        <Cards slow />
      </Suspense>
      <Table />
    </Layout>
  );
}
