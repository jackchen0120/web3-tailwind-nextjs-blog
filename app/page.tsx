/*
 * @description: 主入口
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-07 23:59:16
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-18 21:23:00
 */
'use client'

import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import Greetings from '@/components/Greetings'

export default function Page() {
  // console.log('allBlogs', allBlogs)
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  // return <Main posts={posts} />
  return (
    <>
      <Greetings />
      <Main posts={posts} />
    </>
  )
}
