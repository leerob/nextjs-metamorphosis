import { Layout } from 'components/settings-layout';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
