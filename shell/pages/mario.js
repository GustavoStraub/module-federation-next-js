import dynamic from 'next/dynamic'

const RemoteButton = dynamic(
  () => import('app1/Test'),
  { ssr: false }
)

const App1 = () => (<RemoteButton />)

export default App1
