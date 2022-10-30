import 'highlight.js/styles/night-owl.css'
import cheerio from 'cheerio'
import hljs from 'highlight.js'

type Props = {
  contentHTML: string
}

export const ConvertBody: React.FC<Props> = ({ contentHTML }) => {
  const $ = cheerio.load(contentHTML)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  // const contentReact = parse($.html(), {
  //   replace: (node) => {
  //     if (node instanceof Element && node.attribs && node.name === 'img') {
  //       const { src, alt, width, height } = node.attribs
  //       return (
  //         <Image
  //           layout="responsive"
  //           src={src}
  //           width={width}
  //           height={height}
  //           alt={alt}
  //           sizes="(min-width: 768px) 768px, 100vw"
  //         />
  //       )
  //     }
  //   },
  // })
  return <div dangerouslySetInnerHTML={{ __html: $.html() }}></div>
}
