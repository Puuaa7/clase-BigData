"use client"

import AeroShards from "@/components/AeroShards"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="relative flex min-h-svh overflow-hidden p-6">
      <div className="absolute inset-0">
        <AeroShards className="size-full" onError={() => {}} />
      </div>
      <div className="relative z-10 flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>Un anillo para gobernarlos a todos</p>
          <p>We&apos;Gandalf</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </main>
  )
}
