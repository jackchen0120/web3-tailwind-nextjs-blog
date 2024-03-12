/*
 * @description: 描述信息
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-07 23:59:16
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-13 00:30:46
 */
import React from 'react'
import Typed from 'typed.js'
import Link from 'next/link'
// import Image from 'next/image'
// import { Tooltip } from 'antd'

const Greetings = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef<Typed | null>(null)

  React.useEffect(() => {
    const options = {
      strings: ['专注于Web3技术学习、交流与创新的平台'],
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
      <div className="dark:prose-dark prose lg:prose-lg">
        <h1 className="authorname select-none text-xl font-semibold">Welcome To Web3 研习社</h1>
        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
        </div>
        <Link className="rounded-xl" href="/about">
          <button className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-sky-700">
            开启学习之门
          </button>
        </Link>
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
