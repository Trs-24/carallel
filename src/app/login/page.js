"use client"

import Error from "@/components/ui/form/error/error"
import { login } from "@/lib/apiUtils"
import { PATHNAMES } from "@/lib/constants"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import Input from "../../components/ui/form/input/input"
import styles from "./login.module.css"

const LoginPage = () => {
    const { handleSubmit, control, watch } = useForm()

    const [loginError, setLoginError] = useState(null)

    const router = useRouter()

    const onSubmit = (data) => {
        login(data.email, data.password).then(res => {
            if (!res) {
                return setLoginError("Invalid credentials!")
            }
            router.push(PATHNAMES.library.path)
        })
    }

    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            setLoginError(null)
        })
        return () => subscription.unsubscribe()
    }, [watch])

    return (
        <div className={styles.main}>
            <div className={styles.modal}>
                <h1>{PATHNAMES.library.label}</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ 
                            required: "Required field!",
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
                                message: "Invalid email!"
                            }
                        }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <Input
                                label="Email"
                                placeholder="Your email..."
                                onChange={onChange}
                                value={value}
                                error={error}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Required field!" }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <Input
                                label="Password"
                                placeholder="Your password..."
                                type="password"
                                onChange={onChange}
                                value={value}
                                error={error}
                            />
                        )}
                    />
                    <button type="submit">Login</button>
                    {loginError && <Error>{loginError}</Error>}
                </form>
            </div>
        </div>
    )
}

export default LoginPage
