import { useAuth } from './Auth'

const PageB = () => {
  const auth = useAuth();
  
  return (
    <div>
      {!auth?.user && <p>Hello world!</p>}
      {auth?.user && <p>Welcome back user {auth.user}, this is pageB</p>}
    </div>
  )
}

export default PageB