/*
 * @description: 详情标题
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-05 20:30:07
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-22 00:23:54
 */
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-3xl md:leading-14">
      {children}
    </h1>
  )
}
