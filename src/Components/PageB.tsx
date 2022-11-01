const PageB = () => {
  const data = localStorage.getItem('user')
  return (
    <div>
      {!data && <p>Hello world!</p>}
      {data && <p>Welcome back user {data}, this is pageB</p>}
    </div>
  )
}

export default PageB