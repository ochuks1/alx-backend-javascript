import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const photoResponse = await uploadPhoto('photo-profile-1');
    const userResponse = await createUser('Guillaume', 'Salva');
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
