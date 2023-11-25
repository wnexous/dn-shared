"use client"

import { regex } from "@/Regex";
import Link from "next/link";
import React, { ChangeEventHandler, useState } from "react";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export default function Login() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [seePass, setSeePass] = React.useState(false);

    function handleForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    return <main className=" inset-0 absolute flex items-center justify-center p-10">
        <form className="max-w-xl bg-slate-800 p-10 rounded-2xl flex flex-col gap-8" onSubmit={handleForm}>
            <h1 className="text-2xl">Login</h1>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col  gap-2">
                    <label htmlFor="username-field">Username</label>
                    <input value={username} onChange={({ target }) => setUsername(regex.username(target.value))} className="p-2 rounded-md w-full text-black" type="text" name="username" id="username-field" required />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="pass-field">Password</label>
                    <span className="flex gap-2">
                        <input value={password} onChange={({ target }) => setPassword(regex.password(target.value))} className="p-2 rounded-md w-full text-black" type={seePass ? "text" : "password"} name="password" id="pass-field" required />
                        <button className="text-2xl" onClick={() => setSeePass(!seePass)}>{seePass ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                    </span>
                </div>
            </div>
            <div className="flex gap-2 flex-wrap justify-end min-w-full ">
                <Link href="/signout" className="text-center hover:opacity-50 p-2 rounded-md flex-grow bg-slate-700" type="button">Create account</Link>
                <button className="hover:opacity-50 p-2 rounded-md flex-grow bg-green-500 " type="submit">Sign In</button>
            </div>
        </form>
    </main >
}