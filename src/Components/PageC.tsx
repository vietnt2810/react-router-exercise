import { useAuth } from './Auth'

const PageC = () => {
  const auth = useAuth();

  return (
    <div>
      <p>Welcome back user {auth?.user}, this is pageC</p>
    </div>
  )
}

export default PageC