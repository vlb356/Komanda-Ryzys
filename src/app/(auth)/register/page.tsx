"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push("/dashboard");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-semibold mb-6">Create account</h1>

            <form
                onSubmit={handleRegister}
                className="bg-white p-6 rounded-lg shadow w-full max-w-sm space-y-4"
            >
                {error && <p className="text-red-600 text-sm">{error}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Register
                </button>

                <p
                    className="text-blue-600 text-sm text-center cursor-pointer"
                    onClick={() => router.push("/(auth)/login")}
                >
                    Already have an account? Login
                </p>
            </form>
        </main>
    );
}
