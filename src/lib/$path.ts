export const pagesPath = {
  blog: {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({
        pathname: '/blog/[slug]' as const,
        query: { slug },
        hash: url?.hash,
      }),
    }),
    category: {
      _slug: (slug: string | number) => ({
        $url: (url?: { hash?: string }) => ({
          pathname: '/blog/category/[slug]' as const,
          query: { slug },
          hash: url?.hash,
        }),
      }),
    },
    $url: (url?: { hash?: string }) => ({
      pathname: '/blog' as const,
      hash: url?.hash,
    }),
  },
  contact: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/contact' as const,
      hash: url?.hash,
    }),
  },
  matchShare: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/matchShare' as const,
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
