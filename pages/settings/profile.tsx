import { Bio, Button, Layout, Name } from 'components/settings-layout';

export default function ProfilePage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nameElement = form.elements.namedItem('name') as HTMLInputElement;
    const bioElement = form.elements.namedItem('bio') as HTMLInputElement;

    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameElement.value,
        bio: bioElement.value,
      }),
    });
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <Name />
        <Bio />
        <Button type="submit">Update profile</Button>
      </form>
    </Layout>
  );
}
