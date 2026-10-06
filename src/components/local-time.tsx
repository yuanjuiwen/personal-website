"use client"

import { useEffect, useState } from "react"
import NumberFlow, { NumberFlowGroup } from "@number-flow/react"
import type { Locale } from "@/i18n"

type Clock = { hour: number; minute: number; pm: boolean }

// 取得指定時區的現在時間（12 小時制）
function readClock(timeZone: string): Clock {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date())
  const get = (type: string) =>
    Number(parts.find((part) => part.type === type)?.value ?? 0)
  const hour24 = get("hour")
  return { hour: hour24 % 12 || 12, minute: get("minute"), pm: hour24 >= 12 }
}

type Props = { timeZone: string; location: string; locale: Locale }

// 頁尾的「當地時間 + 地點」：每分鐘更新，數字以滾動動畫切換
export function LocalTime({ timeZone, location, locale }: Props) {
  // 頁面是預先產生的靜態檔，所以等瀏覽器載入後才顯示時間，避免顯示建置當下的舊時間
  const [clock, setClock] = useState<Clock | null>(null)

  useEffect(() => {
    const tick = () => setClock(readClock(timeZone))
    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [timeZone])

  const time = clock && (
    <NumberFlowGroup>
      <span className="tabular-nums">
        <NumberFlow value={clock.hour} />:
        <NumberFlow value={clock.minute} format={{ minimumIntegerDigits: 2 }} />
      </span>
    </NumberFlowGroup>
  )

  return (
    <p
      className="ease-standard transition-opacity duration-300"
      style={{ opacity: clock ? 1 : 0 }}
      aria-live="off"
    >
      {/* 保留一行高度，時間出現時版面不會跳動 */}
      {!clock ? (
        " "
      ) : locale === "zh" ? (
        <>
          {location} {clock.pm ? "下午" : "上午"} {time}
        </>
      ) : (
        <>
          {time}
          {clock.pm ? "pm" : "am"} in {location}
        </>
      )}
    </p>
  )
}
