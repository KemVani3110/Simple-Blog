import type { NextApiRequest, NextApiResponse } from 'next';

const posts = [
  {
    id: '1',
    title: 'Giới thiệu về Next.js: Framework React hiện đại',
    slug: 'gioi-thieu-ve-nextjs',
    excerpt: 'Next.js là một framework React mạnh mẽ cho phép xây dựng ứng dụng web hiện đại với nhiều tính năng như SSR, SSG, routing tích hợp và nhiều hơn nữa.',
    content: `
      # Giới thiệu về Next.js
      
      Next.js là một framework phổ biến cho React, được phát triển bởi Vercel. Nó cung cấp nhiều tính năng hữu ích như:
      
      ## Server-side Rendering (SSR)
      
      Next.js cho phép render các trang React từ phía server, giúp cải thiện SEO và tăng tốc độ tải trang ban đầu.
      
      ## Static Site Generation (SSG)
      
      Bạn có thể pre-render các trang tại thời điểm build, giúp trang web có tốc độ tải nhanh như chớp và dễ dàng host trên CDN.
      
      ## File-system Based Routing
      
      Next.js sử dụng hệ thống routing dựa trên cấu trúc thư mục, giúp việc tạo và quản lý các routes trở nên trực quan và dễ dàng hơn.
      
      ## API Routes
      
      Next.js cho phép bạn tạo API endpoints ngay trong ứng dụng của mình, giúp đơn giản hóa việc phát triển full-stack.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-04-28',
    readTime: '5 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'React', 'Frontend']
  },
  {
    id: '2',
    title: 'Tìm hiểu về Server-side Rendering và Static Generation trong Next.js',
    slug: 'server-side-rendering-vs-static-generation',
    excerpt: 'So sánh hai phương pháp rendering chính trong Next.js: Server-side Rendering (SSR) và Static Site Generation (SSG). Khi nào nên sử dụng cái nào?',
    content: `
      # SSR vs SSG trong Next.js
      
      Next.js cung cấp hai phương pháp rendering chính: Server-side Rendering (SSR) và Static Site Generation (SSG).
      
      ## Server-side Rendering
      
      Với SSR, HTML được tạo ra ở phía server mỗi khi có request. Điều này đảm bảo nội dung luôn được cập nhật nhưng có thể chậm hơn một chút.
      
   javascript
      export async function getServerSideProps() {
        const res = await fetch('https://api.example.com/data')
        const data = await res.json()
        
        return { props: { data } }
      }
   
      
      ## Static Site Generation
      
      Với SSG, HTML được tạo ra tại thời điểm build và được tái sử dụng cho mỗi request. Điều này giúp trang web có tốc độ tải nhanh hơn nhưng nội dung có thể không phải lúc nào cũng được cập nhật.
      
   javascript
      export async function getStaticProps() {
        const res = await fetch('https://api.example.com/data')
        const data = await res.json()
        
        return { props: { data } }
      }
   
      
      ## Incremental Static Regeneration
      
      Next.js cũng hỗ trợ Incremental Static Regeneration (ISR), cho phép bạn cập nhật các trang tĩnh sau khi build mà không cần phải build lại toàn bộ site.
      
      javascript
      export async function getStaticProps() {
        const res = await fetch('https://api.example.com/data')
        const data = await res.json()
        
        return { 
          props: { data },
          revalidate: 60 // Tái tạo trang sau mỗi 60 giây
        }
      }
    `,
    featuredImage: '/images/ssr.jpg',
    date: '2025-04-25',
    readTime: '7 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'SSR', 'SSG', 'Performance']
  },
  {
    id: '3',
    title: 'Cách sử dụng API Routes trong Next.js',
    slug: 'su-dung-api-routes-trong-nextjs',
    excerpt: 'Tìm hiểu cách tạo và sử dụng API Routes trong Next.js để xây dựng ứng dụng full-stack mà không cần server riêng biệt.',
    content: `
      # API Routes trong Next.js
      
      Next.js cho phép bạn tạo API endpoints trong cùng một ứng dụng, giúp đơn giản hóa việc phát triển full-stack.
      
      ## Tạo API Route đơn giản
      
      Để tạo một API endpoint, bạn chỉ cần tạo một file trong thư mục \`pages/api\`.
      
   javascript
      // pages/api/hello.js
      export default function handler(req, res) {
        res.status(200).json({ name: 'John Doe' })
      }
   
      
      ## Xử lý các HTTP methods
      
      Bạn có thể xử lý các HTTP methods khác nhau như GET, POST, PUT, DELETE.
      
   javascript
      export default function handler(req, res) {
        const { method } = req
        
        switch (method) {
          case 'GET':
            // Xử lý GET request
            res.status(200).json({ users: ['John', 'Jane'] })
            break
          case 'POST':
            // Xử lý POST request
            const { name } = req.body
            res.status(201).json({ message: \`User \${name} created\` })
            break
          default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(\`Method \${method} Not Allowed\`)
        }
      }
   
      
      ## Dynamic API Routes
      
      Next.js cũng hỗ trợ dynamic API routes, cho phép bạn xử lý các endpoints động.
      
   javascript
      // pages/api/users/[id].js
      export default function handler(req, res) {
        const { id } = req.query
        res.status(200).json({ id, name: \`User \${id}\` })
      }
   
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-04-22',
    readTime: '6 phút',
    author: {
      name: 'Lê Văn C',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'API', 'Backend', 'Full-stack']
  },
  {
    id: '4',
    title: 'Tối ưu hóa SEO cho ứng dụng Next.js',
    slug: 'toi-uu-hoa-seo-cho-nextjs',
    excerpt: 'Các kỹ thuật và best practices để tối ưu hóa SEO cho ứng dụng Next.js, từ metadata đến structured data.',
    content: `
      # Tối ưu hóa SEO cho Next.js
      
      Next.js cung cấp nhiều tính năng giúp cải thiện SEO cho ứng dụng web của bạn.
      
      ## Metadata với Next.js
      
      Sử dụng component \`Head\` để thêm các thẻ meta vào trang của bạn.
      
   jsx
      import Head from 'next/head'
      
      export default function Page() {
        return (
          <>
            <Head>
              <title>Tiêu đề trang</title>
              <meta name="description" content="Mô tả trang của bạn" />
              <meta property="og:title" content="Tiêu đề trang" />
              <meta property="og:description" content="Mô tả trang của bạn" />
              <meta property="og:image" content="https://example.com/image.jpg" />
            </Head>
            <main>
              {/* Nội dung trang */}
            </main>
          </>
        )
      }
   
      
      ## Dynamic Metadata
      
      Bạn có thể tạo metadata động dựa trên dữ liệu của trang.
      
   jsx
      export async function getStaticProps() {
        const res = await fetch('https://api.example.com/post/1')
        const post = await res.json()
        
        return {
          props: { post }
        }
      }
      
      export default function Post({ post }) {
        return (
          <>
            <Head>
              <title>{post.title}</title>
              <meta name="description" content={post.excerpt} />
            </Head>
            <main>
              {/* Nội dung bài post */}
            </main>
          </>
        )
      }
   
      
      ## Structured Data
      
      Thêm structured data (JSON-LD) để giúp Google hiểu nội dung trang của bạn tốt hơn.
      
   jsx
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.title,
              "image": post.featuredImage,
              "author": {
                "@type": "Person",
                "name": post.author.name
              },
              "datePublished": post.date
            })
          }}
        />
      </Head>
   
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-04-20',
    readTime: '8 phút',
    author: {
      name: 'Phạm Thị D',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'SEO', 'Marketing', 'Performance']
  },
  {
    id: '5',
    title: 'Sử dụng Environment Variables trong Next.js',
    slug: 'su-dung-environment-variables',
    excerpt: 'Hướng dẫn sử dụng Environment Variables trong Next.js để quản lý cấu hình ứng dụng một cách an toàn và hiệu quả.',
    content: `
      # Environment Variables trong Next.js
      
      Next.js có hỗ trợ sẵn cho Environment Variables, giúp bạn quản lý cấu hình ứng dụng một cách an toàn.
      
      ## Cách sử dụng Environment Variables
      
      ### Tạo file .env.local
      
      Đầu tiên, tạo file \`.env.local\` ở thư mục gốc của dự án:
      
   
      DB_HOST=localhost
      DB_USER=myuser
      DB_PASS=mypassword
      NEXT_PUBLIC_API_URL=https://api.example.com
   
      
      ### Sử dụng trong code
      
      Next.js tự động load các biến từ file \`.env.local\` vào \`process.env\`.
      
   javascript
      // Sử dụng ở server-side
      export async function getStaticProps() {
        const db = await connectDB({
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASS
        })
        
        const data = await db.query('SELECT * FROM posts')
        
        return {
          props: { posts: data }
        }
      }
   
      
      ### Client-side Environment Variables
      
      Để sử dụng Environment Variables ở client-side, bạn cần prefix chúng với \`NEXT_PUBLIC_\`.
      
   javascript
      // Sử dụng ở client-side
      function fetchData() {
        return fetch(\`\${process.env.NEXT_PUBLIC_API_URL}/posts\`)
          .then(res => res.json())
      }
   
      
      ## Environment Variables cho các môi trường khác nhau
      
      Next.js cũng hỗ trợ các file environment khác nhau cho các môi trường:
      
      - \`.env.development\`: Cho môi trường development
      - \`.env.production\`: Cho môi trường production
      - \`.env.test\`: Cho môi trường test
      
      Thứ tự ưu tiên: \`.env.local\` > \`.env.development\`/\`.env.production\` > \`.env\`
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-04-18',
    readTime: '5 phút',
    author: {
      name: 'Hoàng Văn E',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'Environment Variables', 'Configuration']
  },
  {
    id: '6',
    title: 'Xây dựng blog cá nhân với Next.js và TypeScript',
    slug: 'xay-dung-blog-ca-nhan-voi-nextjs',
    excerpt: 'Hướng dẫn từng bước để xây dựng một blog cá nhân đẹp mắt và hiệu quả với Next.js, TypeScript và SCSS.',
    content: `
      # Xây dựng blog cá nhân với Next.js
      
      Trong bài viết này, chúng ta sẽ xây dựng một blog cá nhân sử dụng Next.js, TypeScript và SCSS.
      
      ## Cài đặt dự án
      
      Đầu tiên, tạo một dự án Next.js mới:
      
   bash
      npx create-next-app my-blog --typescript
      cd my-blog
      npm install sass
   
      
      ## Cấu trúc thư mục
      
   
      my-blog/
      ├── components/
      │   ├── Layout.tsx
      │   ├── Navbar.tsx
      │   ├── PostCard.tsx
      │   └── Footer.tsx
      ├── pages/
      │   ├── _app.tsx
      │   ├── index.tsx
      │   └── posts/
      │       └── [slug].tsx
      ├── styles/
      │   ├── globals.scss
      │   └── components/
      │       ├── layout.module.scss
      │       └── post-card.module.scss
      └── utils/
          └── posts.ts
   
      
      ## Tạo component PostCard
      
   tsx
      // components/PostCard.tsx
      import Link from 'next/link'
      import Image from 'next/image'
      import styles from '@/styles/components/post-card.module.scss'
      
      interface PostCardProps {
        title: string
        excerpt: string
        slug: string
        date: string
        featuredImage: string
      }
      
      export default function PostCard({ title, excerpt, slug, date, featuredImage }: PostCardProps) {
        return (
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src={featuredImage}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>
                <Link href={\`/posts/\${slug}\`}>{title}</Link>
              </h3>
              <p className={styles.excerpt}>{excerpt}</p>
              <div className={styles.meta}>
                <span className={styles.date}>{date}</span>
              </div>
            </div>
          </div>
        )
      }
   
      
      ## Trang chủ hiển thị danh sách bài viết
      
   tsx
      // pages/index.tsx
      import { GetStaticProps } from 'next'
      import Layout from '@/components/Layout'
      import PostGrid from '@/components/PostGrid'
      import { getPosts } from '@/utils/posts'
      import styles from '@/styles/pages/home.module.scss'
      
      export default function Home({ posts }) {
        return (
          <Layout>
            <div className={styles.banner}>
              <h1>My Blog</h1>
              <p>Chia sẻ kiến thức về lập trình web và công nghệ</p>
            </div>
            <div className="container">
              <PostGrid posts={posts} />
            </div>
          </Layout>
        )
      }
      
      export const getStaticProps: GetStaticProps = async () => {
        const posts = getPosts()
        
        return {
          props: {
            posts
          }
        }
      }
   
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-04-15',
    readTime: '10 phút',
    author: {
      name: 'Nguyễn Thị F',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'TypeScript', 'Blog', 'Tutorial']
  },
  {
    id: '7',
    title: 'Hướng dẫn tạo blog bằng Next.js và Markdown',
    slug: 'tao-blog-voi-nextjs-va-markdown',
    excerpt: 'Tự tạo blog cá nhân đơn giản với Next.js và nội dung viết bằng Markdown.',
    content: `
      # Tạo blog với Next.js và Markdown

      Markdown là một cách tuyệt vời để viết nội dung dễ đọc và dễ viết. Trong bài này, chúng ta sẽ kết hợp Next.js và Markdown để xây dựng một blog cá nhân.

      ## Bước 1: Cài đặt Next.js project

      Sử dụng lệnh \`npx create-next-app blog-markdown\` để bắt đầu.

      ## Bước 2: Cấu hình để đọc file Markdown

      Sử dụng thư viện như \`gray-matter\` để parse nội dung và metadata của bài viết Markdown.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-05',
    readTime: '6 phút',
    author: {
      name: 'Lê Thị D',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'Markdown', 'Blog']
  },
  {
    id: '8',
    title: 'Cách hoạt động của Static Generation trong Next.js',
    slug: 'cach-hoat-dong-static-generation',
    excerpt: 'Hiểu rõ cách Static Generation giúp tăng tốc độ tải trang và tối ưu SEO trong Next.js.',
    content: `
      # Static Generation là gì?

      Đây là quá trình tạo HTML tại thời điểm build. HTML sau đó được lưu vào file tĩnh và được phục vụ cho mỗi request.

      ## Ưu điểm

      - Tốc độ nhanh
      - Phù hợp với nội dung không thay đổi thường xuyên

      ## Khi nào nên dùng?

      Khi dữ liệu không cần cập nhật liên tục hoặc chỉ thay đổi theo lịch trình cụ thể.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-06',
    readTime: '4 phút',
    author: {
      name: 'Phạm Văn E',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'Static Generation', 'Web Performance']
  },
  {
    id: '9',
    title: 'Tối ưu tốc độ tải trang với Image Optimization trong Next.js',
    slug: 'toi-uu-anh-nextjs',
    excerpt: 'Sử dụng tính năng Image Optimization để giảm dung lượng ảnh và tăng tốc độ tải trang trong Next.js.',
    content: `
      # Image Optimization trong Next.js

      Next.js hỗ trợ tối ưu hóa hình ảnh tự động với thẻ \`<Image />\` từ \`next/image\`.

      ## Các lợi ích chính

      - Tải ảnh theo kích thước phù hợp
      - Nén ảnh hiệu quả
      - Hỗ trợ lazy loading

      ## Cách sử dụng

      Sử dụng như sau: \`<Image src="/images/example.jpg" width={500} height={300} alt="Example" />\`
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-07',
    readTime: '5 phút',
    author: {
      name: 'Ngô Minh F',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'Performance', 'Image']
  },
  {
    id: '10',
    title: 'Sử dụng API Routes trong Next.js để tạo backend đơn giản',
    slug: 'api-routes-trong-nextjs',
    excerpt: 'API Routes giúp bạn xây dựng các endpoint backend nhanh chóng trong ứng dụng Next.js.',
    content: `
      # API Routes trong Next.js
      Next.js cho phép bạn viết các endpoint ngay trong thư mục \`/pages/api\`, rất tiện lợi cho các ứng dụng fullstack.
      ## Ví dụ:
      Tạo file \`/pages/api/hello.ts\`:
      ts
      export default function handler(req, res) {
        res.status(200).json({ message: 'Xin chào từ API!' });
      }
      Bạn có thể gọi API này từ client như gọi bất kỳ REST API nào.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-07',
    readTime: '4 phút',
    author: {
      name: 'Nguyễn Hữu G',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'API', 'Fullstack']
  },
  {
    id: '11',
    title: 'Tạo giao diện responsive với SCSS trong Next.js',
    slug: 'responsive-voi-scss-nextjs',
    excerpt: 'Hướng dẫn cấu hình SCSS và tạo giao diện responsive trong Next.js.',
    content: `
      # Responsive design với SCSS trong Next.js

      SCSS giúp quản lý CSS tốt hơn và hỗ trợ biến, mixin rất tiện cho responsive.

      ## Cài đặt:

      \`npm install sass\`

      ## Ví dụ:

      scss
      $breakpoint: 768px;

      .container {
        padding: 20px;

        @media (max-width: $breakpoint) {
          padding: 10px;
        }
      }
      

      Tạo file SCSS cho từng component và import trong file TSX.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-07',
    readTime: '6 phút',
    author: {
      name: 'Đỗ Thị H',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'SCSS', 'Responsive']
  },
  {
    id: '12',
    title: 'Tích hợp Font Awesome vào dự án Next.js',
    slug: 'font-awesome-nextjs',
    excerpt: 'Hiển thị icon đẹp mắt với Font Awesome trong dự án Next.js một cách dễ dàng.',
    content: `
      # Font Awesome trong Next.js

      Font Awesome cung cấp hơn 1,500 icon miễn phí giúp bạn cải thiện giao diện người dùng.

      ## Cài đặt:

      \`npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core\`

      ## Sử dụng:

      ts
      import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
      import { faCoffee } from '@fortawesome/free-solid-svg-icons';

      <FontAwesomeIcon icon={faCoffee} />
      
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-07',
    readTime: '3 phút',
    author: {
      name: 'Trần Văn I',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'Font Awesome', 'UI']
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(posts);
}