/*
 * @description: 关于页面
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-07 23:59:16
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-13 01:33:07
 */
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { components } from '@/components/MDXComponents'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: '关于我' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} components={components} />
        <div className="flex flex-wrap items-center justify-center text-center md:justify-between">
          <div className="text-center">
            <div className="my-3 text-sm md:text-base">关注公众号</div>
            <Image
              className="mx-auto my-0 w-full rounded-md border border-gray-200 md:h-48 md:w-48"
              src="/static/images/qrcode1.png"
              alt="公众号二维码"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center">
            <div className="my-3 text-sm md:text-base">加微信交流</div>
            <Image
              className="mx-auto my-0 w-full rounded-md border border-gray-200 md:h-48 md:w-48"
              src="/static/images/qrcode2.jpg"
              alt="作者二维码"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center">
            <div className="my-3 text-sm md:text-base">如有收获，欢迎打赏</div>
            <Image
              className="mx-auto my-0 w-full rounded-md border border-gray-200 md:h-48 md:w-48"
              src="/static/images/qrcode.jpg"
              alt="小程序赞赏码"
              width={200}
              height={200}
            />
          </div>
        </div>
      </AuthorLayout>
    </>
  )
}
