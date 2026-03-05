import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

interface ShootingStar {
  x: number
  y: number
  len: number
  speed: number
  angle: number
  opacity: number
  active: boolean
  trail: number
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let stars: Star[] = []
    let shooters: ShootingStar[] = []
    let lastShooter = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 6000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.2,
        opacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
      }))
    }

    const spawnShooter = () => {
      const angle = (Math.random() * 30 + 15) * (Math.PI / 180)
      shooters.push({
        x: Math.random() * canvas.width * 0.7,
        y: Math.random() * canvas.height * 0.4,
        len: Math.random() * 120 + 80,
        speed: Math.random() * 8 + 6,
        angle,
        opacity: 1,
        active: true,
        trail: 0,
      })
    }

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Twinkling stars
      stars.forEach(s => {
        s.twinklePhase += s.twinkleSpeed
        const alpha = s.opacity * (0.6 + 0.4 * Math.sin(s.twinklePhase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.fill()
      })

      // Shooting stars — spawn every 4-8 seconds
      if (time - lastShooter > Math.random() * 4000 + 4000) {
        spawnShooter()
        lastShooter = time
      }

      shooters = shooters.filter(s => s.opacity > 0)
      shooters.forEach(s => {
        s.trail += s.speed
        s.opacity -= 0.012

        const tailX = s.x + Math.cos(s.angle) * s.trail
        const tailY = s.y + Math.sin(s.angle) * s.trail
        const headX = tailX + Math.cos(s.angle) * s.len
        const headY = tailY + Math.sin(s.angle) * s.len

        const grad = ctx.createLinearGradient(tailX, tailY, headX, headY)
        grad.addColorStop(0, `rgba(255,255,255,0)`)
        grad.addColorStop(0.4, `rgba(255,255,255,${s.opacity * 0.3})`)
        grad.addColorStop(1, `rgba(255,255,255,${s.opacity})`)

        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(headX, headY)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Glow at head
        ctx.beginPath()
        ctx.arc(headX, headY, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.opacity})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}