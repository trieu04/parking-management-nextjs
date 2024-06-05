import { signIn } from "next-auth/react"

export default function SignIn() {


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            signIn('credentials', {
                redirect: false,
                email: e.currentTarget.email.value,
                password: e.currentTarget.password.value,
            })
                .then((result) => {
                    if (!result) {
                        throw new Error('No response')
                    }

                    if (result.error == "CredentialsSignin") {
                        throw new Error('Incorrect credentials. Please try again.')
                    }

                    if (result.error !== null) {
                        throw new Error('An error occurred')
                    }

                    alert("redirect('/')")
                })
                .catch((error) => {
                    alert(error.message)
                })
        }}>

            <label>
                Username
                <input name="email" type="text" />
            </label>
            <label>
                Password
                <input name="password" type="password" />
            </label>
            <button type="submit">Sign in</button>
        </form>
    )
}