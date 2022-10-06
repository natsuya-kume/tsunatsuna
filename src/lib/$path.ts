export const pagesPath = {
  profile: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/profile' as const,
      hash: url?.hash,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: '/' as const,
    hash: url?.hash,
  }),
}

export type PagesPath = typeof pagesPath
