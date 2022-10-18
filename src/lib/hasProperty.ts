import type { PostsType } from '@/features/blog/types/blog'

type ObjType = PostsType

export const hasProperty = (obj: ObjType, key: string) => {
  return !!obj && Object.prototype.hasOwnProperty.call(obj, key)
}
