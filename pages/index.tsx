import Layout from 'components/home-layout';
import Cards from 'components/cards';
import Table from 'components/table';
import { getCardData, Card } from 'lib/db';

HomePage.getInitialProps = async () => {
  const cardData = await getCardData(2000);
  return { cardData };
};

export default function HomePage({ cardData }: { cardData: Card[] }) {
  return (
    <Layout>
      <Cards loading={false} data={cardData} />
      <Table />
    </Layout>
  );
}
