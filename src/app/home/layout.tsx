"use client"

import DashboardLayout from "@/components/layout/dashboard/dashboard.layout"
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

type LayoutProps = {
    children: ReactNode
}

export default function HomeLayout({ children }: LayoutProps) {
    return (
   
            <DashboardLayout>
                {children}
            </DashboardLayout>

    )
}
