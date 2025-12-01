"use client";

import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function DashboardPage() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/(auth)/login");
        }
    }, [user, loading, router]);

    if (loading || !user)
        return <p className="p-6 text-center">Loading...</p>;

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 space-y-4">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p>Welcome: {user.email}</p>

            <button
                onClick={() => signOut(auth)}
                className="bg-red-600 text-white py-2 px-4 rounded"
            >
                Logout
            </button>
        </main>
    );
}
