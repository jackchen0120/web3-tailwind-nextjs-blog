import Link from '@/components/Link'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
// import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-6 pt-4 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100  md:text-3xl md:leading-14">
            最新动态
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">{siteMetadata.description}</p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images } = post
            return (
              <li key={slug} className="py-6">
                <article>
                  <div className="space-y-2 md:grid md:grid-cols-4 md:items-center md:space-y-0">
                    <dl>
                      <dt className="sr-only">发布文章</dt>
                      <dd className="shrink-0 overflow-hidden rounded-lg md:mr-5">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          <Image
                            alt={title}
                            src={
                              images
                                ? images[0] || '/static/images/default.jpg'
                                : '/static/images/default.jpg'
                            }
                            className="h-36 w-full rounded-lg object-cover object-center duration-300 hover:-translate-y-1 hover:scale-110"
                            width={256}
                            height={100}
                          />
                        </Link>
                      </dd>
                    </dl>
                    <div className="space-y-5 md:col-span-3">
                      <div className="space-y-6">
                        <div className="shrink-0">
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none truncate text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="flex text-base font-medium leading-6">
                        <div className="mr-3 text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>
                            {new Date(date).toLocaleDateString(
                              siteMetadata.locale,
                              postDateTemplate
                            )}
                          </time>
                          {/* <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time> */}
                        </div>
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          详情 &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            所有文章 &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
