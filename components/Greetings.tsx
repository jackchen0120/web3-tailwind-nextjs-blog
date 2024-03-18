/*
 * @description: 首页
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-07 23:59:16
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-18 23:06:58
 */
import React from 'react'
import Typed from 'typed.js'
import Link from 'next/link'
// import { Tooltip } from 'antd'

const Greetings = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef<Typed | null>(null)

  React.useEffect(() => {
    const options = {
      strings: ['专注Web3技术、应用与创新的学习与交流分享', '不止于此......'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current?.destroy()
    }
  }, [])

  return (
    <div className="lg:mb-10 lg:mt-10">
      <div className="relative isolate px-5 pb-14 pt-8 sm:pb-[164px] sm:pt-24">
        {/* <div className="absolute inset-0 -z-10 overflow-hidden  bg-[#fcfcfd] dark:bg-[#050a1a]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="none"
            viewBox="0 0 1440 900"
          >
            <path
              fill="url(#pattern0)"
              d="M0 0H1440V900H0z"
              opacity="0.36"
              style={{ mixBlendMode: 'exclusion' }}
            ></path>
            <defs>
              <pattern
                id="pattern0"
                width="0.429"
                height="0.687"
                patternContentUnits="objectBoundingBox"
              >
                <use transform="scale(.00044 .0007)" xlinkHref="#image0_1288_13896"></use>
              </pattern>
              <image
                id="image0_1288_13896"
                width="972"
                height="972"
                data-name="216.png"
                xlinkHref="/static/images/home_bg.png"
              ></image>
            </defs>
          </svg>
        </div> */}

        <div className="dark:prose-dark prose text-center lg:prose-lg sm:mx-auto">
          <h1 className="authorname select-none text-2xl font-semibold">Welcome To Web3 研习社</h1>
          <div className="type-wrap my-5 dark:text-white">
            <span style={{ whiteSpace: 'pre' }} ref={el} />
          </div>
          <Link href="/blog">
            <button className="rounded-lg bg-sky-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-sky-700 md:text-base">
              点我充电💪
            </button>
          </Link>
        </div>
      </div>
      {/* NewBlogButton */}
      {/* <Tooltip title="新的一天~ 记录一下." trigger="hover">
        <Link
          className="fixed bottom-40 right-8 cursor-pointer hover:shadow-lg hover:brightness-125 sm:bottom-20"
          target="_blank"
          href={`https://github.com/HansKing98/hans-nextjs-blog/new/main/data/posts/2024`}
        >
          <Image src="/button/add.svg" className="w-24 sm:w-32" alt="" width={140} height={30} />
        </Link>
      </Tooltip> */}
    </div>
  )
}

export default Greetings
