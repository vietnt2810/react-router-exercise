import { useAuth } from './Auth'

const PageA = () => {
    const auth = useAuth()

    return (
        <div>
            <p>Welcome back user {auth?.user}, this is pageA</p>
        </div>
    )
}

export default PageA