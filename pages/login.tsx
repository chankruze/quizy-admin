/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 07:38:45 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { userService } from "../services";
import { Form, Formik } from "formik";
import { MdMail, MdPassword } from "react-icons/md";

function Login() {
    const router = useRouter();

    useEffect(() => {
        // redirect to home if already logged in
        if (userService.userValue) {
            router.push("/");
        }
    }, []);

    const initialValues = {
        email: "",
        password: "",
    };

    // form validation rules
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const onSubmit = ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        return userService
            .login(email, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                // const returnUrl = router.query.returnUrl || "/dashboard";
                router.push("/dashboard");
            })
            .catch((error) => {
                console.log("apiError", {
                    message: error.message,
                });
            });
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                }) => (
                    <Form
                        onSubmit={handleSubmit}
                        className="p-2 rounded-md w-[400px]"
                    >
                        <div className="py-2">
                            <div className="flex items-center bg-white text-black rounded-md py-2 px-4 border shadow-md">
                                <MdMail size={32} color="orange" />
                                <input
                                    className="w-full text-lg p-3 border-0 outline-none"
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Email"
                                    autoComplete="off"
                                />
                            </div>
                            {errors.email && (
                                <div className="py-2 text-sm text-right text-red-500">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div className="py-2">
                            <div className="flex items-center bg-white text-black rounded-md py-2 px-4 border shadow-md">
                                <MdPassword size={28} color="orange" />
                                <input
                                    className="w-full text-lg p-3 border-0 outline-none"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Password"
                                />
                            </div>
                            {errors.password && (
                                <div className="py-2 text-sm text-right text-red-500">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="mt-4 p-2 text-lg rounded-md w-full bg-blue-600 hover:bg-blue-500 text-white"
                        >
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Login;
