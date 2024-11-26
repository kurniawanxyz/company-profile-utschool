"use client"
import { queryClient } from "@/utils/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function NextQueryProvider({children}: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
