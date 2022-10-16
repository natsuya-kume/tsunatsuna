export const pagesPath = {
  blog: {
    schedule: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/blog/schedule' as const,
        hash: url?.hash,
      }),
    },
    $url: (url?: { hash?: string }) => ({
      pathname: '/blog' as const,
      hash: url?.hash,
    }),
  },
  privacy: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/privacy' as const,
      hash: url?.hash,
    }),
  },
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
