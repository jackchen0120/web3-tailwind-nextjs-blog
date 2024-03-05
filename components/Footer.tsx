/*
 * @description: 描述信息
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-05 20:30:07
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-05 22:06:02
 */
import Link from './Link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="juejin" href={siteMetadata.juejin} size={6} />
          <SocialIcon kind="csdn" href={siteMetadata.csdn} size={6} />
          {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} /> */}
          {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}
          {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} /> */}
          {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} /> */}
          {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} /> */}
          {/* <SocialIcon kind="threads" href={siteMetadata.threads} size={6} /> */}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          {/* <div>{siteMetadata.author}</div> */}
          {/* <div>{` • `}</div> */}
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <Link href="http://beian.miit.gov.cn">湘ICP备2023013145号-1</Link>
          <Link
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43012102000901"
            className="flex items-center"
          >
            <Image
              width={16}
              height={16}
              src="/static/images/gongan.png"
              className="mr-1 h-4 w-4"
              alt="Web3研习社"
            />
            湘公网安备43012102000901号
          </Link>
        </div>
      </div>
    </footer>
  )
}
