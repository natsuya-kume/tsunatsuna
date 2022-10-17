import type { GetStaticProps } from 'next'

import Container from '@/components/layouts/container/Container'
import { getAllCategories } from '@/features/blog/api/getBlog'
import PostHeader from '@/features/blog/components/PostHeader'
import type { CategoryTypes } from '@/features/blog/types/blog'

type Props = {
  name: string
}

const CategoryPage: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <PostHeader title={name} subtitle="Blog Catagory" />
    </Container>
  )
}

export default CategoryPage

export const getStaticPaths = async () => {
  const allCats: CategoryTypes[] = await getAllCategories()
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const catSlug = context.params?.slug

  const allCats: CategoryTypes[] = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)
  return {
    props: {
      name: cat?.name,
    },
  }
}
