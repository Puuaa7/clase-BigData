"use client"

import { TrendUpIcon } from "@phosphor-icons/react"
import { LabelList, RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: { label: "Visitantes" },
  chrome: { label: "Chrome", color: "#8b5cf6" },
  safari: { label: "Safari", color: "#a78bfa" },
  firefox: { label: "Firefox", color: "#d946ef" },
  edge: { label: "Edge", color: "#c084fc" },
  other: { label: "Otros", color: "#7c3aed" },
} satisfies ChartConfig

export function ChartRadialLabel() {
  return (
    <Card className="w-full rounded-none border border-violet-400/30 bg-[#10091d]/80 text-violet-50 shadow-[0_0_45px_#8b5cf620] ring-0 backdrop-blur-xl">
      <CardHeader className="items-center gap-2 pt-3 text-center">
        <p className="font-mono text-[10px] tracking-[0.2em] text-violet-400">NEXUS // ANALYTICS_01</p>
        <CardTitle><h2>Visitantes por navegador</h2></CardTitle>
        <CardDescription className="text-xs text-violet-200/60">Enero – junio 2024 · Datos de ejemplo</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-[280px] [&_.recharts-radial-bar-background-sector]:fill-violet-400/10">
          <RadialBarChart accessibilityLayer data={chartData} startAngle={-90} endAngle={380} innerRadius={30} outerRadius={110}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel nameKey="browser" className="border-violet-400/30 bg-[#160d26] text-violet-50 [&_.text-muted-foreground]:text-violet-200/70" />} />
            <RadialBar dataKey="visitors" background isAnimationActive={false}>
              <LabelList position="insideStart" dataKey="browser" className="fill-white capitalize" fontSize={11} />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
        <ul aria-label="Visitantes por navegador" className="flex flex-wrap justify-center gap-x-4 gap-y-2 pb-5 text-[10px] text-violet-200/80">
          {chartData.map((item) => (
            <li key={item.browser} className="flex items-center gap-1.5">
              <span aria-hidden="true" className="size-1.5 rounded-full" style={{ backgroundColor: chartConfig[item.browser as Exclude<keyof typeof chartConfig, "visitors">].color }} />
              <span>{chartConfig[item.browser as keyof typeof chartConfig].label}: {item.visitors}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex-col gap-2 border-t border-violet-400/20 bg-violet-500/5 py-5 text-center text-xs">
        <div className="flex items-center gap-2 font-medium text-violet-200">
          Crecimiento del 5,2 % este mes <TrendUpIcon aria-hidden="true" className="size-4 text-fuchsia-400" />
        </div>
        <p className="text-violet-200/50">Total de visitantes de los últimos 6 meses</p>
      </CardFooter>
    </Card>
  )
}
