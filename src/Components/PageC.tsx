const PageC = () => {
  return (
    <div>
      <p>Welcome back user {localStorage.getItem('user')}, this is pageC</p>
    </div>
  )
}

export default PageC