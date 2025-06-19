export async function load({ locals }) {
  // If using @auth/sveltekit, session is on locals.session
  const session = locals.session;
  return { session };
}
