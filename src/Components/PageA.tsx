const PageA = () => {
    return (
        <div>
            <p>Welcome back user {localStorage.getItem('user')}, this is pageA</p>
        </div>
    )
}

export default PageA