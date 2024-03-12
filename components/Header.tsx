/*
 * @description: 描述信息
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-05 20:30:07
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-12 23:34:32
 */
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="animate-wave mr-1">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="group hidden h-6 text-2xl font-semibold transition duration-300 sm:block">
                {siteMetadata.headerTitle}
                <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-[85%] dark:bg-white"></span>
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group hidden font-medium text-gray-900 transition duration-300 dark:text-gray-100 sm:block"
            >
              {link.title}
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-[85%] dark:bg-white"></span>
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
