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
  },
  {
    id: '13',
    title: 'Tích hợp Redux với Next.js',
    slug: 'tich-hop-redux-nextjs',
    excerpt: 'Hướng dẫn chi tiết cách tích hợp Redux vào ứng dụng Next.js để quản lý state hiệu quả.',
    content: `
      # Tích hợp Redux với Next.js
      
      Redux là một thư viện quản lý state phổ biến cho ứng dụng React. Trong bài viết này, chúng ta sẽ tìm hiểu cách tích hợp Redux vào Next.js.
      
      ## Cài đặt dependencies
      
      Đầu tiên, cài đặt các thư viện cần thiết:
      
   bash
      npm install redux react-redux next-redux-wrapper @reduxjs/toolkit
   
      
      ## Tạo Redux store
      
      Tạo file \`store.js\` trong thư mục \`store\`:
      
   javascript
      import { configureStore } from '@reduxjs/toolkit';
      import { createWrapper } from 'next-redux-wrapper';
      import rootReducer from './reducers';
      
      const makeStore = () => configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production',
      });
      
      export const wrapper = createWrapper(makeStore);
   
      
      ## Tạo reducer
      
      Tạo file \`reducers/index.js\`:
      
   javascript
      import { combineReducers } from 'redux';
      import { HYDRATE } from 'next-redux-wrapper';
      import userReducer from './userSlice';
      
      const combinedReducer = combineReducers({
        user: userReducer,
        // Thêm các reducer khác ở đây
      });
      
      const rootReducer = (state, action) => {
        if (action.type === HYDRATE) {
          return {
            ...state,
            ...action.payload,
          };
        } else {
          return combinedReducer(state, action);
        }
      };
      
      export default rootReducer;
   
      
      ## Tạo slice với Redux Toolkit
      
   javascript
      // store/userSlice.js
      import { createSlice } from '@reduxjs/toolkit';
      
      const initialState = {
        user: null,
        isLoggedIn: false,
      };
      
      const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {
          login: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
          },
          logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
          },
        },
      });
      
      export const { login, logout } = userSlice.actions;
      export default userSlice.reducer;
   
      
      ## Tích hợp với Next.js
      
      Cập nhật file \`pages/_app.js\`:
      
   javascript
      import { wrapper } from '../store/store';
      
      function MyApp({ Component, pageProps }) {
        return <Component {...pageProps} />;
      }
      
      export default wrapper.withRedux(MyApp);
   
      
      ## Sử dụng Redux trong component
      
   javascript
      import { useSelector, useDispatch } from 'react-redux';
      import { login, logout } from '../store/userSlice';
      
      function Profile() {
        const dispatch = useDispatch();
        const { user, isLoggedIn } = useSelector((state) => state.user);
        
        const handleLogin = () => {
          dispatch(login({ id: 1, name: 'Nguyễn Văn A' }));
        };
        
        const handleLogout = () => {
          dispatch(logout());
        };
        
        return (
          <div>
            {isLoggedIn ? (
              <>
                <h2>Xin chào, {user.name}</h2>
                <button onClick={handleLogout}>Đăng xuất</button>
              </>
            ) : (
              <button onClick={handleLogin}>Đăng nhập</button>
            )}
          </div>
        );
      }
   
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-08',
    readTime: '7 phút',
    author: {
      name: 'Lê Minh K',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'Redux', 'State Management']
  },
  {
    id: '14',
    title: 'Authentication trong Next.js với NextAuth.js',
    slug: 'authentication-nextjs-nextauth',
    excerpt: 'Xây dựng hệ thống xác thực người dùng mạnh mẽ với NextAuth.js trong ứng dụng Next.js.',
    content: `
      # Authentication trong Next.js với NextAuth.js
      
      NextAuth.js là một giải pháp xác thực hoàn chỉnh cho Next.js, hỗ trợ nhiều provider như Google, Facebook, GitHub và cả xác thực bằng email/password.
      
      ## Cài đặt NextAuth.js
      
   bash
      npm install next-auth
   
      
      ## Cấu hình NextAuth.js
      
      Tạo file \`pages/api/auth/[...nextauth].js\`:
      
   javascript
      import NextAuth from 'next-auth';
      import Providers from 'next-auth/providers';
      
      export default NextAuth({
        providers: [
          Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
          Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          }),
          Providers.Credentials({
            name: 'Credentials',
            credentials: {
              email: { label: "Email", type: "text" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
              // Xử lý đăng nhập tại đây
              // Ví dụ đơn giản:
              if (credentials.email === "admin@example.com" && credentials.password === "password") {
                return { id: 1, name: "Admin", email: "admin@example.com" };
              }
              return null;
            }
          })
        ],
        session: {
          jwt: true,
        },
        callbacks: {
          async jwt(token, user) {
            if (user) {
              token.id = user.id;
            }
            return token;
          },
          async session(session, token) {
            session.user.id = token.id;
            return session;
          }
        },
        pages: {
          signIn: '/auth/signin',
          signOut: '/auth/signout',
          error: '/auth/error',
        },
        debug: process.env.NODE_ENV === 'development',
      });
   
      
      ## Tạo Provider cho ứng dụng
      
      Cập nhật file \`pages/_app.js\`:
      
   javascript
      import { Provider } from 'next-auth/client';
      
      function MyApp({ Component, pageProps }) {
        return (
          <Provider session={pageProps.session}>
            <Component {...pageProps} />
          </Provider>
        );
      }
      
      export default MyApp;
   
      
      ## Sử dụng trong component
      
   javascript
      import { signIn, signOut, useSession } from 'next-auth/client';
      
      export default function Header() {
        const [session, loading] = useSession();
        
        return (
          <header>
            <nav>
              {!session && (
                <button onClick={() => signIn()}>Đăng nhập</button>
              )}
              {session && (
                <>
                  <span>Xin chào, {session.user.name}</span>
                  <button onClick={() => signOut()}>Đăng xuất</button>
                </>
              )}
            </nav>
          </header>
        );
      }
   
      
      ## Bảo vệ các route
      
   javascript
      import { useSession, getSession } from 'next-auth/client';
      import { useEffect } from 'react';
      import { useRouter } from 'next/router';
      
      export default function Dashboard() {
        const [session, loading] = useSession();
        const router = useRouter();
        
        useEffect(() => {
          if (!loading && !session) {
            router.replace('/auth/signin');
          }
        }, [session, loading, router]);
        
        if (loading) {
          return <div>Loading...</div>;
        }
        
        if (!session) {
          return null;
        }
        
        return (
          <div>
            <h1>Dashboard</h1>
            <p>Chào mừng bạn đến với trang quản trị!</p>
          </div>
        );
      }
      
      export async function getServerSideProps(context) {
        const session = await getSession(context);
        
        if (!session) {
          return {
            redirect: {
              destination: '/auth/signin',
              permanent: false,
            },
          };
        }
        
        return {
          props: { session }
        };
      }
   
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-09',
    readTime: '8 phút',
    author: {
      name: 'Nguyễn Thị L',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'Authentication', 'NextAuth.js', 'Security']
  },
  {
    id: '15',
    title: 'Tối ưu hóa tốc độ tải trang Next.js',
    slug: 'toi-uu-hoa-toc-do-nextjs',
    excerpt: 'Các kỹ thuật và best practices để cải thiện hiệu suất và tốc độ tải trang trong ứng dụng Next.js.',
    content: `
      # Tối ưu hóa tốc độ tải trang Next.js
      
      Tốc độ tải trang là một yếu tố quan trọng ảnh hưởng đến trải nghiệm người dùng và SEO. Dưới đây là các kỹ thuật để tối ưu hóa ứng dụng Next.js của bạn.
      
      ## 1. Sử dụng Image Optimization
      
      Next.js cung cấp component \`Image\` giúp tối ưu hóa hình ảnh:
      
   jsx
      import Image from 'next/image';
      
      <Image
        src="/images/profile.jpg"
        alt="Profile"
        width={500}
        height={300}
        priority
      />
   
      
      ## 2. Font Optimization
      
      Sử dụng \`next/font\` để tối ưu font:
      
   jsx
      import { Inter } from 'next/font/google';
      
      const inter = Inter({ subsets: ['latin'] });
      
      export default function Layout({ children }) {
        return (
          <div className={inter.className}>
            {children}
          </div>
        );
      }
   
      
      ## 3. Code Splitting
      
      Next.js tự động thực hiện code splitting. Bạn cũng có thể sử dụng dynamic import để chia nhỏ bundle:
      
   jsx
      import dynamic from 'next/dynamic';
      
      const DynamicComponent = dynamic(() => import('../components/HeavyComponent'), {
        loading: () => <p>Loading...</p>,
        ssr: false // Nếu component chỉ cần ở client-side
      });
   
      
      ## 4. Preloading Routes
      
      Link component của Next.js tự động preload các trang liên quan:
      
   jsx
      import Link from 'next/link';
      
      <Link href="/about">
        <a>About Us</a>
      </Link>
   
      
      ## 5. Lazy Loading Components
      
      Lazy load các component không cần thiết ngay lập tức:
      
   jsx
      import { lazy, Suspense } from 'react';
      
      const HeavyComponent = lazy(() => import('../components/HeavyComponent'));
      
      function MyComponent() {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <HeavyComponent />
          </Suspense>
        );
      }
   
      
      ## 6. Cache Control
      
      Thêm headers để cấu hình cache:
      
   javascript
      // pages/blog/[slug].js
      export async function getServerSideProps({ res }) {
        res.setHeader(
          'Cache-Control',
          'public, s-maxage=10, stale-while-revalidate=59'
        );
        
        // ...fetch data
        
        return { props: { data } };
      }
   
      
      ## 7. Incremental Static Regeneration
      
      Sử dụng ISR để cập nhật các trang tĩnh:
      
   javascript
      export async function getStaticProps() {
        const res = await fetch('https://api.example.com/data');
        const data = await res.json();
        
        return {
          props: { data },
          revalidate: 60 // Tái tạo trang sau mỗi 60 giây
        };
      }
   
      
      ## 8. Minimize CSS và JavaScript
      
      Sử dụng các công cụ như PurgeCSS để loại bỏ CSS không sử dụng:
      
   javascript
      // next.config.js
      const withPurgeCss = require('next-purgecss');
      
      module.exports = withPurgeCss({
        purgeCss: {
          content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}']
        }
      });
   
      
      ## 9. Optimize Third-party Scripts
      
      Sử dụng \`next/script\` để tối ưu scripts bên thứ ba:
      
   jsx
      import Script from 'next/script';
      
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="lazyOnload"
        onLoad={() => console.log('Script loaded correctly')}
      />
   
      
      ## 10. Measure Performance
      
      Sử dụng công cụ như Lighthouse, WebPageTest để đo lường hiệu suất và phát hiện vấn đề:
      
   bash
      # Cài đặt Lighthouse CLI
      npm install -g lighthouse
      
      # Chạy kiểm tra
      lighthouse https://your-nextjs-app.com
   
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-10',
    readTime: '9 phút',
    author: {
      name: 'Trần Đức M',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'Performance', 'Optimization', 'Web Vitals']
  },
  {
    id: '16',
    title: 'Tối ưu SEO với Next.js: SSR và Metadata',
    slug: 'toi-uu-seo-voi-nextjs',
    excerpt: 'Next.js hỗ trợ tối ưu SEO mạnh mẽ thông qua tính năng SSR và khả năng cấu hình metadata dễ dàng, giúp cải thiện hiển thị trên công cụ tìm kiếm.',
    content: `
      # Tối ưu SEO với Next.js
  
      Khi xây dựng website, SEO là yếu tố không thể thiếu để tăng khả năng hiển thị. Next.js hỗ trợ điều này với:
  
      ## Server-side Rendering (SSR)
  
      Các trang được render từ server sẽ có nội dung đầy đủ khi Google crawl, giúp index hiệu quả hơn.
  
      ## Metadata tùy chỉnh
  
      Bạn có thể thêm thẻ \`<meta>\` tùy ý trong \`<Head>\` của Next.js để tối ưu tiêu đề, mô tả, và ảnh chia sẻ.
  
      ## Structured Data
  
      Dễ dàng tích hợp JSON-LD hoặc các loại dữ liệu có cấu trúc để hiển thị rich results trên Google.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-04-30',
    readTime: '4 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['SEO', 'Next.js', 'Web Performance']
  },
  {
    id: '17',
    title: 'So sánh SSR và SSG trong Next.js',
    slug: 'ssr-va-ssg-nextjs',
    excerpt: 'SSR và SSG là hai chiến lược render phổ biến trong Next.js. Bài viết này phân tích ưu nhược điểm của từng phương pháp và khi nào nên dùng chúng.',
    content: `
      # So sánh SSR và SSG trong Next.js
  
      Next.js cung cấp hai phương pháp render chính là SSR (Server-side Rendering) và SSG (Static Site Generation):
  
      ## SSR - Linh hoạt và thời gian thực
  
      Trang được tạo mỗi lần có request, phù hợp với nội dung thay đổi thường xuyên (ví dụ: dashboard, tin tức).
  
      ## SSG - Nhanh và ổn định
  
      Trang được build trước và phục vụ qua CDN, lý tưởng cho blog, landing page hoặc nội dung ít thay đổi.
  
      ## Khi nào nên dùng cái nào?
  
      - Dùng SSR nếu nội dung cần cập nhật thường xuyên.
      - Dùng SSG nếu ưu tiên tốc độ và có thể build sẵn nội dung.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-01',
    readTime: '6 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'SSR', 'SSG']
  },
  {
    id: '18',
    title: 'Routing trong Next.js: Cơ bản đến nâng cao',
    slug: 'routing-trong-nextjs',
    excerpt: 'Next.js sử dụng hệ thống routing dựa trên file-system. Bài viết này sẽ giúp bạn hiểu rõ cách hoạt động và mở rộng routing trong ứng dụng của bạn.',
    content: `
      # Routing trong Next.js
  
      Hệ thống routing của Next.js dựa trên cấu trúc thư mục \`pages/\`, rất đơn giản mà vẫn mạnh mẽ.
  
      ## Routing cơ bản
  
      - \`pages/index.tsx\` -> \`/\`
      - \`pages/about.tsx\` -> \`/about\`
  
      ## Dynamic Routing
  
      Bạn có thể tạo route động như \`pages/blog/[slug].tsx\` để phục vụ nhiều bài viết.
  
      ## Nested Routing & Layouts
  
      Next.js 13+ hỗ trợ layout mặc định và nested routing thông qua thư mục \`app/\`, giúp quản lý UI phức tạp hơn.
  
      ## Link và Navigation
  
      Sử dụng \`next/link\` để chuyển trang nhanh chóng mà không reload toàn bộ trang.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-02',
    readTime: '7 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'Routing', 'Frontend']
  },
  {
    id: '19',
    title: 'API Routes trong Next.js: Xây dựng backend đơn giản',
    slug: 'api-routes-nextjs',
    excerpt: 'API Routes là tính năng mạnh mẽ của Next.js cho phép bạn tạo backend trong cùng project mà không cần server riêng.',
    content: `
      # API Routes trong Next.js
  
      API Routes cho phép bạn định nghĩa các endpoint backend trong thư mục \`pages/api/\`.
  
      ## Cách tạo API route
  
      - Tạo file \`pages/api/hello.ts\` và export một hàm xử lý request.
  
      ## Hỗ trợ method GET, POST...
  
      Có thể xử lý các method HTTP khác nhau bằng cách kiểm tra \`req.method\`.
  
      ## Ứng dụng thực tế
  
      - Gửi form
      - Lưu dữ liệu
      - Tích hợp với database hoặc API bên ngoài
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-03',
    readTime: '5 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'API', 'Backend']
  },
  {
    id: '20',
    title: 'Tích hợp SCSS vào Next.js một cách dễ dàng',
    slug: 'tich-hop-scss-vao-nextjs',
    excerpt: 'SCSS giúp tổ chức CSS tốt hơn và dễ bảo trì. Next.js hỗ trợ tích hợp SCSS rất dễ dàng với cấu hình tối thiểu.',
    content: `
      # Tích hợp SCSS vào Next.js
  
      SCSS (Sass) giúp viết CSS rõ ràng, có cấu trúc và dễ tái sử dụng hơn.
  
      ## Cài đặt
  
      \`npm install sass\`
  
      ## Sử dụng SCSS Module
  
      Tạo file \`Component.module.scss\` và import trong component để tránh trùng class.
  
      ## Biến, mixin và nested rules
  
      SCSS cho phép tạo biến màu, mixin tái sử dụng và lồng class gọn gàng hơn nhiều so với CSS thuần.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-04',
    readTime: '4 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['SCSS', 'Next.js', 'Styling']
  },
  {
    id: '21',
    title: 'Triển khai Next.js lên Vercel: Nhanh chóng và miễn phí',
    slug: 'trien-khai-nextjs-vercel',
    excerpt: 'Vercel là nền tảng triển khai chính thức cho Next.js, giúp bạn publish ứng dụng chỉ với vài cú click.',
    content: `
      # Triển khai Next.js lên Vercel
  
      Vercel là lựa chọn số 1 để deploy ứng dụng Next.js.
  
      ## Đăng nhập và kết nối GitHub
  
      Chọn repo Next.js và Vercel sẽ tự động nhận diện project.
  
      ## Tự động build & deploy
  
      Mỗi lần push code, Vercel sẽ build lại và deploy tự động.
  
      ## Hỗ trợ custom domain, SSL, preview
  
      Vercel hỗ trợ domain riêng, HTTPS miễn phí và preview cho từng pull request.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-05',
    readTime: '3 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'Vercel', 'Deployment']
  },
  {
    id: '22',
    title: 'Quản lý dữ liệu với useSWR trong Next.js',
    slug: 'quan-ly-du-lieu-voi-useswr',
    excerpt: 'useSWR là một hook mạnh mẽ giúp bạn fetch và cache dữ liệu hiệu quả trong Next.js, tối ưu trải nghiệm người dùng.',
    content: `
      # Quản lý dữ liệu với useSWR
  
      SWR là thư viện do Vercel phát triển giúp fetch data thông minh trong React/Next.js.
  
      ## Cài đặt
  
      \`npm install swr\`
  
      ## Cách sử dụng cơ bản
  
      tsx
      const { data, error } = useSWR('/api/user', fetcher);
      
  
      ## Tính năng nổi bật
  
      - Tự động revalidate
      - Cache thông minh
      - Fallback khi offline
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-06',
    readTime: '5 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'SWR', 'Data Fetching']
  },
  {
    id: '23',
    title: 'Tạo giao diện tối/ sáng (Dark Mode) trong Next.js',
    slug: 'dark-mode-trong-nextjs',
    excerpt: 'Dark Mode là xu hướng giao diện hiện đại. Hãy cùng tạo tính năng này trong Next.js với Theme Provider hoặc class toggling.',
    content: `
      # Tạo Dark Mode trong Next.js
  
      Việc thêm Dark Mode sẽ nâng tầm trải nghiệm người dùng hiện đại.
  
      ## Cách đơn giản: Toggle class
  
      Dùng \`classList.toggle('dark')\` và tailwind hoặc SCSS để thay đổi theme.
  
      ## Cách chuyên nghiệp: Context hoặc ThemeProvider
  
      Quản lý theme bằng Context API và lưu trạng thái vào localStorage.
  
      ## Gợi ý UI
  
      Thêm nút chuyển chế độ sáng/tối và lưu lựa chọn của người dùng.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-07',
    readTime: '6 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['Dark Mode', 'Next.js', 'UI']
  },
  {
    id: '24',
    title: 'Tạo blog tĩnh bằng Next.js và Markdown',
    slug: 'tao-blog-tinh-voi-nextjs',
    excerpt: 'Bạn có thể xây dựng blog tĩnh đơn giản với Next.js bằng cách đọc file Markdown và chuyển thành HTML.',
    content: `
      # Tạo blog tĩnh với Markdown
  
      Blog cá nhân tĩnh bằng Next.js rất nhẹ, dễ triển khai và miễn phí.
  
      ## Cài thư viện cần thiết
  
      \`npm install gray-matter remark remark-html\`
  
      ## Đọc file Markdown
  
      Dùng \`fs\` và \`path\` để load nội dung trong thư mục \`posts/\`.
  
      ## Chuyển đổi sang HTML
  
      Sử dụng remark để parse nội dung Markdown thành HTML và hiển thị trong component.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-07',
    readTime: '7 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'Markdown', 'Blog']
  },
  {
    id: '25',
    title: 'Tối ưu hiệu suất trong Next.js',
    slug: 'toi-uu-hieu-suat-nextjs',
    excerpt: 'Next.js cung cấp nhiều công cụ để tối ưu hiệu suất, giúp trang web tải nhanh và mượt mà hơn cho người dùng.',
    content: `
      # Tối ưu hiệu suất trong Next.js
  
      Hiệu suất luôn là yếu tố quan trọng trong web hiện đại.
  
      ## Phân tách mã (Code Splitting)
  
      Next.js tự động chia nhỏ bundle để giảm tải.
  
      ## Lazy load ảnh
  
      Sử dụng \`next/image\` để lazy load và tối ưu ảnh hiệu quả.
  
      ## Tối ưu CSS
  
      Sử dụng SCSS module và purge CSS nếu dùng Tailwind để giảm kích thước file.
  
      ## Kiểm tra bằng Lighthouse
  
      Dùng Chrome DevTools hoặc Vercel Analytics để đo hiệu suất thực tế.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-08',
    readTime: '6 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'Performance', 'Web Optimization']
  },
  {
    id: '26',
    title: 'Sử dụng Font Awesome trong dự án Next.js',
    slug: 'font-awesome-trong-nextjs',
    excerpt: 'Font Awesome giúp bạn thêm các biểu tượng đẹp mắt và dễ sử dụng vào giao diện Next.js chỉ với vài bước cài đặt.',
    content: `
      # Sử dụng Font Awesome trong Next.js
  
      Font Awesome cung cấp hàng nghìn icon sẵn sàng để dùng.
  
      ## Cài đặt thư viện
  
      \`npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome\`
  
      ## Cấu hình để dùng trong dự án
  
      Tạo file \`_app.tsx\` để import cấu hình và tránh việc tải lại icon CSS nhiều lần.
  
      ## Dùng icon trong component
  
      tsx
      import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
      import { faCoffee } from '@fortawesome/free-solid-svg-icons'
  
      <FontAwesomeIcon icon={faCoffee} />
      
  
      Có thể thay đổi màu, kích thước, animation tùy ý với props.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-08',
    readTime: '4 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'Font Awesome', 'UI']
  },
  {
    id: '27',
    title: 'Xây dựng ứng dụng đa ngôn ngữ với Next.js và i18n',
    slug: 'da-ngon-ngu-nextjs-i18n',
    excerpt: 'Next.js hỗ trợ tích hợp i18n giúp bạn xây dựng ứng dụng đa ngôn ngữ, mở rộng thị trường và cải thiện trải nghiệm người dùng.',
    content: `
      # Đa ngôn ngữ với Next.js và i18n
  
      Việc hỗ trợ nhiều ngôn ngữ giúp ứng dụng thân thiện hơn với người dùng toàn cầu.
  
      ## Bật cấu hình i18n trong \`next.config.js\`
  
      js
      i18n: {
        locales: ['vi', 'en'],
        defaultLocale: 'vi',
      }
      
  
      ## Cách tổ chức file dịch
  
      Tạo thư mục \`locales/vi/\` và \`locales/en/\` với file JSON chứa nội dung từng ngôn ngữ.
  
      ## Sử dụng thư viện hỗ trợ
  
      Dùng \`next-i18next\` để xử lý dịch, chuyển ngôn ngữ và lấy text động trong component.
    `,
    featuredImage: '/images/nextjs.png',
    date: '2025-05-08',
    readTime: '6 phút',
    author: {
      name: 'Nguyễn Văn A',
      avatar: '/images/ava1.png'
    },
    tags: ['Next.js', 'i18n', 'Localization']
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(posts);
}