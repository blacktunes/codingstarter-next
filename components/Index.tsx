import { useRouter } from 'next/router'
import Layout from './Layout'
import Post from './Post'
import List from './List'

function creatTestData() {
  const list: {
    id: number
    title: string
    text: string
    time: string
  }[] = []

  for (let i = 1; i <= 10; i++) {
    list.push({
      id: i,
      title: `测试标题 ${i}`,
      text: `测试内容 ${i}`,
      time: '@test now'
    })
  }

  return list
}

export default function Index() {
  const router = useRouter()

  return (
    <Layout>
      <List list={creatTestData()} />
      <Post id={router.query.id} />
    </Layout>
  )
}
