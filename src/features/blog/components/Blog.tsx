type Props = {
  title: string
  subtitle: string
}

const Blog: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  )
}

export default Blog
