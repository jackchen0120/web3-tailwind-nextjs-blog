/*
 * @description: 工具库组件
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-05 20:30:07
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-19 21:38:25
 */
import toolsData from '@/data/toolsData'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: '工具箱', description: '常用工具集合' })

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
        <div className="pb-8">
          <div className="md:flex md:flex-wrap">
            {toolsData.map((item, index) => (
              <section className="relative" key={index}>
                <h2 className="mb-3 mt-8 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-200">
                  {item.title}
                </h2>
                <ul className="mx-4 mt-10 grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-3 md:gap-y-8 xl:grid-cols-4">
                  {item.tools.map((v, i) => (
                    <li key={i} className="relative mb-3 flex w-full items-start md:w-60">
                      <div className="dark:highlight-white/20 h-16 w-16 flex-none overflow-hidden rounded-full bg-white p-[0.1875rem] shadow ring-1 ring-slate-900/10">
                        <div
                          className="aspect-w-1 aspect-h-1 mx-auto rounded-full bg-[length:100%] dark:hidden"
                          style={{
                            backgroundImage: `url(${v.imgSrc})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: '100%',
                          }}
                        ></div>
                        <div
                          className="aspect-w-1 aspect-h-1 mx-auto hidden rounded-full bg-[length:100%] dark:block"
                          style={{
                            backgroundImage: `url(${v.imgSrc})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: '100%',
                          }}
                        ></div>
                      </div>
                      <div className="group peer ml-6 flex-auto">
                        <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                          <Link
                            className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
                            href={v.href}
                            target="_blank"
                          >
                            {v.title}
                            <svg
                              viewBox="0 0 3 6"
                              className="-mt-px ml-3 inline h-1.5 w-auto overflow-visible text-slate-400 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100"
                            >
                              <path
                                d="M0 0L3 3L0 6"
                                fill="none"
                                strokeWidth="2"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </Link>
                        </h3>
                        <div className="dark:prose-dark prose prose-sm prose-slate text-slate-400">
                          <p>{v.description}</p>
                        </div>
                      </div>
                      <div className="absolute -inset-3 -z-10 rounded-2xl border border-gray-200 border-opacity-60 bg-transparent dark:border-gray-700 sm:-inset-4"></div>
                      <div className="absolute -inset-3 -z-10 rounded-2xl border border-gray-200 border-opacity-60 bg-slate-100 opacity-0 peer-hover:opacity-100 dark:border-gray-700 dark:bg-slate-800/50 sm:-inset-4"></div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
