import { useEffect, useRef } from 'react'
import './NetworkNodes.css'

function getNodeCount() {
  const w = window.innerWidth
  if (w <= 600) return 50
  if (w <= 900) return 80
  if (w <= 1200) return 120
  return 180
}

function getConnectionDistance() {
  return window.innerWidth <= 600 ? 120 : 180
}

function NetworkNodes() {
  const canvasRef = useRef(null)
  const nodesRef = useRef([])
  const animRef = useRef(null)
  const scrollOffsetRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let nodeCount = getNodeCount()
    let connDist = getConnectionDistance()

    const initNodes = (count) => {
      return Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2.5 + 1.5,
        depth: Math.random() * 0.4 + 0.1
      }))
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const newCount = getNodeCount()
      connDist = getConnectionDistance()
      if (newCount !== nodeCount) {
        nodeCount = newCount
        nodesRef.current = initNodes(nodeCount)
      }
    }

    nodesRef.current = initNodes(nodeCount)
    resize()
    window.addEventListener('resize', resize)

    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const animate = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const scroll = scrollOffsetRef.current
      ctx.clearRect(0, 0, w, h)
      const nodes = nodesRef.current
      const connDistSq = connDist * connDist

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > w) node.vx *= -1
        if (node.y < 0 || node.y > h) node.vy *= -1
      }

      // Batch connections by similar opacity for fewer state changes
      ctx.lineWidth = 0.8
      for (let i = 0; i < nodes.length; i++) {
        const sy = nodes[i].y - scroll * nodes[i].depth
        if (sy < -100 || sy > h + 100) continue
        const sx = nodes[i].x
        for (let j = i + 1; j < nodes.length; j++) {
          const sjy = nodes[j].y - scroll * nodes[j].depth
          if (sjy < -100 || sjy > h + 100) continue
          const dx = sx - nodes[j].x
          const dy = sy - sjy
          const distSq = dx * dx + dy * dy
          if (distSq < connDistSq) {
            const opacity = (1 - Math.sqrt(distSq) / connDist) * 0.3
            ctx.beginPath()
            ctx.moveTo(sx, sy)
            ctx.lineTo(nodes[j].x, sjy)
            ctx.strokeStyle = `rgba(20, 184, 166, ${opacity})`
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      ctx.fillStyle = 'rgba(20, 184, 166, 0.4)'
      for (const node of nodes) {
        const sy = node.y - scroll * node.depth
        if (sy < -50 || sy > h + 50) continue
        ctx.beginPath()
        ctx.arc(node.x, sy, node.r, 0, Math.PI * 2)
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="network-nodes" />
}

export default NetworkNodes
