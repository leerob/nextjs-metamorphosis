import { Bio, Button, Name } from 'components/settings-layout';

export default function ProfilePage() {
  async function handleSubmit(formData: FormData) {
    'use server';
    const name = formData.get('name');
    const bio = formData.get('bio');
    console.log(name, bio);
  }

  return (
    <form action={handleSubmit}>
      <Name />
      <Bio />
      <Button>Update profile</Button>
    </form>
  );
}
