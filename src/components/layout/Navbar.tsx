"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function Navbar() {
    const router = useRouter();

    return (
        <header className="h-16 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-4">
                <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    <Image
                        src="/logo-kr.svg"
                        alt="Komanda Ryšys Logo"
                        width={40}
                        height={40}
                    />
                    <div className="flex flex-col leading-tight">
                        <span className="font-semibold text-lg tracking-wide">
                            Komanda Ryšys
                        </span>
                        <span className="text-xs text-gray-500">
                            Victory is born together
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        className="text-sm text-kr-blue font-medium hover:underline"
                        onClick={() => router.push("/(auth)/login")}
                    >
                        Log in
                    </button>
                    <Button
                        className="text-sm"
                        onClick={() => router.push("/(auth)/register")}
                    >
                        Get your One Pass
                    </Button>
                </div>
            </div>
        </header>
    );
}
