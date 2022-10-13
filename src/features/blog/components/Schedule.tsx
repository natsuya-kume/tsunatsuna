import type { BlogType } from '@/features/blog/types/blog'

const Schedule: React.FC<BlogType> = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) => {
  return <h1>{title}</h1>
}

export default Schedule
