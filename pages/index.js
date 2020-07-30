import Link from 'next/link'

function HomePage() {
  return ( 
  <div style={{ fontWeight: 'bold', fontSize: '50px' }}> 
    <Link href="/login">
      <a style={{ color: "pink" }}>这是我的第一个项目！</a>
  </Link>
  </div>
  )
}

export default HomePage
