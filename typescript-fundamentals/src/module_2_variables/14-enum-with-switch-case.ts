// Enum with switch case example
// Very common in automation frameworks
enum UserRole {
  Admin = 'admin',
  Editor = 'editor',
  Viewer = 'viewer',
}

function getDashboardUrl(role: UserRole): string {
  switch (role) {
    case UserRole.Admin:
      return '/admin/dashboard';

    case UserRole.Editor:
      return '/editor/dashboard';

    case UserRole.Viewer:
      return '/viewer/dashboard';

    default:
      // This is fallback protection.
      // Ideally, this should never run if all enum cases are handled.
      throw new Error('Invalid user role');
  }
}

console.log(getDashboardUrl(UserRole.Admin));
