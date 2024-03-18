/*
 * @description: 工具库组件
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-05 20:30:07
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-18 23:14:56
 */
import toolsData from '@/data/toolsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: '工具' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            工具
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            你一定用得到的Web3百宝箱，选对工具助你事半功倍🧰
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <h2 className="mx-auto text-lg">码农紧急开发中...</h2>
            {toolsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
