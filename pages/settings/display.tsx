import MinimalMode from 'components/minimal';
import { Layout } from 'components/settings-layout';
import Table from 'components/table';

export default function DisplayPage() {
  return (
    <Layout>
      <MinimalMode>
        <Table />
      </MinimalMode>
    </Layout>
  );
}
