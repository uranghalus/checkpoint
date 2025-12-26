import { getServerSession } from './get-session';

export async function getAuthContext() {
  const session = await getServerSession();
  return {
    user: session.user,
    session,
  };
}
