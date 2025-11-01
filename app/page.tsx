"use client"

import { useState, useEffect } from "react"
import {
  TrendingUp,
  Gift,
  LogOut,
  Zap,
  Search,
  Filter,
  ShoppingCart,
  Star,
  Crown,
  Leaf,
  Waves,
  ZapIcon,
  Flame,
  Home,
  Beaker,
} from "lucide-react"

function CarbonXLogo() {
  return (
    <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" stroke="#1a1a1a" strokeWidth="2" />
      <g transform="translate(50, 50)">
        <ellipse cx="0" cy="-16" rx="8" ry="14" fill="#e9dbc0" transform="rotate(0)" />
        <ellipse cx="16" cy="0" rx="8" ry="14" fill="#e9dbc0" transform="rotate(90)" />
        <ellipse cx="0" cy="16" rx="8" ry="14" fill="#e9dbc0" transform="rotate(180)" />
        <ellipse cx="-16" cy="0" rx="8" ry="14" fill="#e9dbc0" transform="rotate(270)" />
        <circle cx="0" cy="0" r="4" fill="#1a1a1a" />
      </g>
    </svg>
  )
}

function EarthSegment({ segment, contribution, maxContribution, color, index }) {
  const angle = (index * 60 - 90) * (Math.PI / 180)
  const percentage = Math.min(contribution / maxContribution, 1)
  const radius = 80 + percentage * 40

  return (
    <g key={index}>
      {/* Segment arc background */}
      <path
        d={`M 100 100 L ${100 + 80 * Math.cos(angle)} ${100 + 80 * Math.sin(angle)} A 80 80 0 0 1 ${
          100 + 80 * Math.cos(angle + (60 * Math.PI) / 180)
        } ${100 + 80 * Math.sin(angle + (60 * Math.PI) / 180)} Z`}
        fill={`${color}20`}
        stroke={color}
        strokeWidth="1"
        opacity="0.5"
      />
      {/* Segment arc progress */}
      <path
        d={`M 100 100 L ${100 + radius * Math.cos(angle)} ${100 + radius * Math.sin(angle)} A ${radius} ${radius} 0 0 1 ${
          100 + radius * Math.cos(angle + (60 * Math.PI) / 180)
        } ${100 + radius * Math.sin(angle + (60 * Math.PI) / 180)} Z`}
        fill={color}
        opacity={percentage}
      />
    </g>
  )
}

export default function CarbonX() {
  const [activeNav, setActiveNav] = useState("dashboard")
  const [userLevel, setUserLevel] = useState(2)
  const [userXP, setUserXP] = useState(4250)
  const [xpToNextLevel, setXpToNextLevel] = useState(10000)
  const [isFloating, setIsFloating] = useState(false)
  const [retireCredits, setRetireCredits] = useState(0)
  const [retireStep, setRetireStep] = useState("select")
  const [selectedPath, setSelectedPath] = useState<number | null>(null)
  const [retireHistory, setRetireHistory] = useState([
    { pathId: 1, amount: 50, timestamp: "2 hours ago" },
    { pathId: 2, amount: 80, timestamp: "5 hours ago" },
    { pathId: 1, amount: 70, timestamp: "1 day ago" },
    { pathId: 3, amount: 95, timestamp: "2 days ago" },
  ])

  const [pathContributions, setPathContributions] = useState({
    1: 120, // Forest Healer
    2: 280, // Ocean Guardian
    3: 95, // Solar Pioneer
    4: 60, // Waste Reclaimer
    5: 140, // Earth Nurturer
    6: 50, // Carbon Alchemist
  })

  const [userInvestments, setUserInvestments] = useState([
    { projectId: 1, projectName: "Amazon Rainforest Protection", pathId: 1, amount: 50, date: "2024-11-15" },
    { projectId: 3, projectName: "Mangrove Restoration", pathId: 2, amount: 30, date: "2024-11-10" },
  ])

  useEffect(() => {
    setIsFloating(true)
  }, [])

  const nftPaths = [
    { id: 1, name: "Forest Healer", icon: Leaf, color: "#2ECC71" },
    { id: 2, name: "Ocean Guardian", icon: Waves, color: "#3498DB" },
    { id: 3, name: "Solar Pioneer", icon: ZapIcon, color: "#F39C12" },
    { id: 4, name: "Waste Reclaimer", icon: Flame, color: "#E74C3C" },
    { id: 5, name: "Earth Nurturer", icon: Home, color: "#1ABC9C" },
    { id: 6, name: "Carbon Alchemist", icon: Beaker, color: "#9B59B6" },
  ]

  const launchpadProjects = [
    {
      id: 1,
      name: "Amazon Rainforest Protection",
      pathId: 1,
      owner: "Conservation International",
      description: "Protect 50,000 hectares of rainforest from deforestation",
      credits: 100000,
      price: 15,
      progress: 65,
      image: "/amazon-rainforest-aerial.png",
      verified: true,
      featured: true,
    },
    {
      id: 2,
      name: "Solar Farm Initiative",
      pathId: 3,
      owner: "GreenEnergy Corp",
      description: "Build renewable energy infrastructure across 10 countries",
      credits: 50000,
      price: 18,
      progress: 42,
      image: "/solar-panels-field.jpg",
      verified: true,
      featured: false,
    },
    {
      id: 3,
      name: "Mangrove Restoration",
      pathId: 2,
      owner: "Ocean Alliance",
      description: "Restore 5,000 hectares of coastal mangrove ecosystems",
      credits: 30000,
      price: 12,
      progress: 78,
      image: "/mangrove-forest-wetland.jpg",
      verified: true,
      featured: true,
    },
    {
      id: 4,
      name: "Reforestation Mexico",
      pathId: 1,
      owner: "Forest Guardians",
      description: "Plant 1 million trees across Mexico over 5 years",
      credits: 75000,
      price: 14,
      progress: 33,
      image: "/reforestation-tree-planting.jpg",
      verified: false,
      featured: false,
    },
  ]

  const marketplaceTokens = [
    {
      id: 1,
      name: "Amazon Protection Credits",
      symbol: "APC",
      price: 16.5,
      change: 2.3,
      volume: "125.5K",
      listings: 324,
      image: "/amazon-rainforest.png",
    },
    {
      id: 2,
      name: "Solar Energy Tokens",
      symbol: "SET",
      price: 19.75,
      change: -1.2,
      volume: "89.2K",
      listings: 156,
      image: "/solar-panels-sunset.png",
    },
    {
      id: 3,
      name: "Ocean Restoration",
      symbol: "ORT",
      price: 12.25,
      change: 5.1,
      volume: "203.8K",
      listings: 421,
      image: "/ocean-water-waves.png",
    },
    {
      id: 4,
      name: "Forest Carbon Credits",
      symbol: "FCC",
      price: 14.8,
      change: 3.6,
      volume: "156.2K",
      listings: 267,
      image: "/lush-green-forest.png",
    },
    {
      id: 5,
      name: "Wind Energy Tokens",
      symbol: "WET",
      price: 17.45,
      change: 1.8,
      volume: "98.5K",
      listings: 189,
      image: "/wind-turbine-field.jpg",
    },
    {
      id: 6,
      name: "Wetland Protection",
      symbol: "WPT",
      price: 11.9,
      change: -2.4,
      volume: "72.1K",
      listings: 143,
      image: "/wetland-marsh-nature.jpg",
    },
  ]

  const leaderboard = [
    { rank: 1, name: "EcoWarrior", retiredTons: 2840, level: 5, avatar: "👨‍🌾" },
    { rank: 2, name: "GreenGuard", retiredTons: 2650, level: 5, avatar: "👩‍🦰" },
    { rank: 3, name: "PlanetSaver", retiredTons: 2480, level: 4, avatar: "👨‍💼" },
    { rank: 4, name: "You", retiredTons: 745, level: 2, avatar: "👤", isUser: true },
    { rank: 5, name: "SolarChampion", retiredTons: 1920, level: 4, avatar: "⚡" },
    { rank: 6, name: "ForestGuard", retiredTons: 1750, level: 4, avatar: "🌲" },
  ]

  const xpPercent = (userXP / xpToNextLevel) * 100
  const xpPerCredit = 9.41
  const projectedXP = Math.floor(retireCredits * xpPerCredit)
  const carbonImpact = retireCredits * 1.5

  const handleRetireCredits = () => {
    if (retireCredits > 0 && retireCredits <= 1250 && selectedPath) {
      setRetireStep("confirm")
    }
  }

  const handleConfirmRetire = () => {
    setRetireStep("success")
    if (selectedPath) {
      setPathContributions({
        ...pathContributions,
        [selectedPath]: pathContributions[selectedPath] + retireCredits,
      })
      setRetireHistory([{ pathId: selectedPath, amount: retireCredits, timestamp: "just now" }, ...retireHistory])
    }
    setTimeout(() => {
      setUserXP(userXP + projectedXP)
      setRetireCredits(0)
      setSelectedPath(null)
      setRetireStep("select")
    }, 2000)
  }

  const handleInvestProject = (projectId) => {
    const project = launchpadProjects.find((p) => p.id === projectId)
    if (project) {
      const newInvestment = {
        projectId,
        projectName: project.name,
        pathId: project.pathId,
        amount: 20, // Default investment amount
        date: new Date().toISOString().split("T")[0],
      }
      setUserInvestments([...userInvestments, newInvestment])

      setPathContributions({
        ...pathContributions,
        [project.pathId]: pathContributions[project.pathId] + 20,
      })
    }
  }

  const getProjectsForPath = (pathId) => {
    return userInvestments.filter((inv) => inv.pathId === pathId)
  }

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: TrendingUp },
    { id: "launchpad", label: "Launchpad", icon: Gift },
    { id: "marketplace", label: "Marketplace", icon: TrendingUp },
    { id: "retire", label: "Retire", icon: Zap },
    { id: "leaderboard", label: "Leaderboard", icon: Crown },
    { id: "paths", label: "NFT Paths", icon: Leaf },
  ]

  const totalContribution = Object.values(pathContributions).reduce((a, b) => a + b, 0)

  return (
    <div className="min-h-screen flex bg-background">
      <aside className="w-64 border-r border-border bg-card/50 sticky top-0 h-screen flex flex-col p-6">
        <div className="flex items-center gap-3 mb-12">
          <CarbonXLogo />
          <h1 className="text-2xl font-bold tracking-tight text-foreground">CarbonX</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                  activeNav === item.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:bg-secondary text-muted"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="pt-6 border-t border-border">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted hover:text-foreground text-sm font-medium transition-colors">
            <LogOut className="w-5 h-5" />
            Disconnect
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="sticky top-0 z-40 bg-card border-b border-border px-8 py-4 backdrop-blur-sm bg-card/95">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide font-semibold">Level {userLevel}</p>
                  <p className="text-sm text-muted">
                    {userXP.toLocaleString()} / {xpToNextLevel.toLocaleString()} XP
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted uppercase tracking-wide font-semibold">
                  {Math.round(xpPercent)}% to Next
                </p>
              </div>
            </div>
            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-700 ease-out"
                style={{ width: `${xpPercent}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto px-8 py-12">
            {activeNav === "dashboard" && (
              <div>
                <div className="mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-2">Your Impact</h2>
                  <p className="text-muted">6 paths to heal the earth. Contribute to each and watch them grow.</p>
                </div>

                <div className="mb-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Global Earth Status</h3>
                      <p className="text-muted mb-6">Our collective healing journey</p>

                      <div className="space-y-6">
                        <div className="bg-card rounded-xl p-6 border border-border">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold text-muted uppercase tracking-wide">
                              Current Level
                            </span>
                            <span className="text-3xl font-bold text-primary">3</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden mb-3">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-primary/60"
                              style={{ width: "68%" }}
                            />
                          </div>
                          <p className="text-xs text-muted">68% progress to Level 4</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-card rounded-lg p-4 border border-border">
                            <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-2">
                              Total Retired
                            </p>
                            <p className="text-2xl font-bold text-foreground">145.2K</p>
                            <p className="text-xs text-muted mt-1">metric tons CO₂</p>
                          </div>
                          <div className="bg-card rounded-lg p-4 border border-border">
                            <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-2">
                              Contributors
                            </p>
                            <p className="text-2xl font-bold text-foreground">8,432</p>
                            <p className="text-xs text-muted mt-1">users worldwide</p>
                          </div>
                        </div>

                        <div className="bg-secondary rounded-lg p-4 border border-border">
                          <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-2">
                            To Reach Level 4
                          </p>
                          <div className="flex items-end gap-2">
                            <span className="text-2xl font-bold text-foreground">67.8K</span>
                            <span className="text-xs text-muted mb-1">more tons needed</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Earth visualization placeholder for Level 3 */}
                    <div className="flex items-center justify-center">
                      <div className="relative w-64 h-64 bg-secondary rounded-2xl border border-border flex items-center justify-center overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
                        <div className="text-center z-10">
                          <p className="text-sm text-muted uppercase tracking-widest mb-2 font-semibold">Level 3</p>
                          <p className="text-6xl font-bold text-foreground">🌍</p>
                          <p className="text-xs text-muted mt-4">Renewable Energy & Ocean Thriving</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-16">
                  <div className="relative w-full max-w-5xl mx-auto">
                    {/* Earth center visualization with 6 radial path badges */}
                    <div className="relative mx-auto mb-12 flex justify-center">
                      <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                        {/* Central earth level image */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-foreground/20 bg-secondary shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
                            <div className="text-center z-10">
                              <p className="text-sm text-muted uppercase tracking-widest mb-2 font-semibold">Level 3</p>
                              <p className="text-6xl mb-2">🌍</p>
                              <p className="text-xs text-muted">Global Progress</p>
                            </div>
                          </div>
                        </div>

                        {/* 6 radial path badges arranged in circle */}
                        <svg viewBox="0 0 500 500" className="absolute w-full h-full" style={{ zIndex: 10 }}>
                          {nftPaths.map((path, idx) => {
                            const angle = idx * 60 * (Math.PI / 180)
                            const radius = 140
                            const x = 250 + radius * Math.cos(angle)
                            const y = 250 + radius * Math.sin(angle)
                            const contribution = pathContributions[path.id]
                            const percentage = Math.min(contribution / 300, 1)

                            return (
                              <g key={path.id}>
                                {/* Connection line from center to badge */}
                                <line
                                  x1="250"
                                  y1="250"
                                  x2={x}
                                  y2={y}
                                  stroke={path.color}
                                  strokeWidth="2"
                                  opacity="0.3"
                                  strokeDasharray="5,5"
                                />
                                <circle
                                  cx={x}
                                  cy={y}
                                  r="50"
                                  fill={path.color}
                                  opacity={0.1 + percentage * 0.2}
                                  style={{
                                    transition: "opacity 0.5s ease",
                                  }}
                                />
                                <circle
                                  cx={x}
                                  cy={y}
                                  r="48"
                                  fill="none"
                                  stroke={path.color}
                                  strokeWidth="2"
                                  opacity={0.4 + percentage * 0.6}
                                  style={{
                                    transition: "opacity 0.5s ease",
                                  }}
                                />
                              </g>
                            )
                          })}
                        </svg>

                        {/* HTML badges positioned absolutely over SVG */}
                        {nftPaths.map((path, idx) => {
                          const angle = idx * 60 * (Math.PI / 180)
                          const radius = 140
                          const x = 50 + radius * Math.cos(angle)
                          const y = 50 + radius * Math.sin(angle)
                          const contribution = pathContributions[path.id]

                          return (
                            <div
                              key={path.id}
                              className="absolute w-24 h-24 flex items-center justify-center"
                              style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: "translate(-50%, -50%)",
                                zIndex: 30,
                              }}
                            >
                              <button
                                onClick={() => setActiveNav("retire")}
                                className="w-full h-full rounded-xl flex flex-col items-center justify-center p-3 transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer backdrop-blur-sm border-2"
                                style={{
                                  backgroundColor: `${path.color}15`,
                                  borderColor: path.color,
                                  boxShadow: `0 0 20px ${path.color}40`,
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = `${path.color}30`
                                  e.currentTarget.style.boxShadow = `0 0 30px ${path.color}60`
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = `${path.color}15`
                                  e.currentTarget.style.boxShadow = `0 0 20px ${path.color}40`
                                }}
                              >
                                <div
                                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-1"
                                  style={{ backgroundColor: `${path.color}30` }}
                                >
                                  <path.icon className="w-4 h-4" style={{ color: path.color }} />
                                </div>
                                <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors text-center leading-tight">
                                  {path.name.split(" ")[0]}
                                </p>
                                <p className="text-xs font-bold mt-1" style={{ color: path.color }}>
                                  {contribution}T
                                </p>
                              </button>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Path growth breakdown below earth */}
                    <div className="mb-12 p-6 bg-card border border-border rounded-xl">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Path Growth Breakdown</h3>
                      <div className="space-y-3">
                        {nftPaths.map((path) => {
                          const contribution = pathContributions[path.id]
                          const percentage = (contribution / totalContribution) * 100 || 0
                          const investedProjects = getProjectsForPath(path.id)
                          return (
                            <div key={path.id} className="space-y-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div
                                    className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: `${path.color}20` }}
                                  >
                                    <path.icon className="w-3 h-3" style={{ color: path.color }} />
                                  </div>
                                  <span className="text-sm font-semibold text-foreground">{path.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-bold" style={{ color: path.color }}>
                                    {contribution} tons
                                  </span>
                                  <span className="text-xs text-muted">({percentage.toFixed(0)}%)</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                                  <div
                                    className="h-full transition-all duration-500"
                                    style={{
                                      width: `${percentage}%`,
                                      backgroundColor: path.color,
                                    }}
                                  />
                                </div>
                                {investedProjects.length > 0 && (
                                  <span className="text-xs text-muted whitespace-nowrap">
                                    {investedProjects.length} project{investedProjects.length !== 1 ? "s" : ""}
                                  </span>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {nftPaths.map((path, idx) => {
                        const contribution = pathContributions[path.id]
                        const nextMilestone = Math.ceil(contribution / 100) * 100
                        const progressToMilestone = (contribution % 100) / 100

                        // Get representative image from launchpad projects
                        const pathProject = launchpadProjects.find((p) => p.pathId === path.id)
                        const pathImage = pathProject?.image || "/placeholder.svg"

                        return (
                          <div
                            key={path.id}
                            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
                          >
                            {/* Path representative image */}
                            <div className="relative h-32 overflow-hidden bg-secondary">
                              <img
                                src={pathImage || "/placeholder.svg"}
                                alt={path.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>

                            <div className="p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <div
                                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                  style={{ backgroundColor: `${path.color}20` }}
                                >
                                  <path.icon className="w-4 h-4" style={{ color: path.color }} />
                                </div>
                                <h3 className="font-semibold text-sm text-foreground">{path.name}</h3>
                              </div>

                              <div className="mb-3">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-xs text-muted">{contribution} tons</span>
                                  <span className="text-xs font-semibold" style={{ color: path.color }}>
                                    Lvl {Math.floor(contribution / 100) + 1}
                                  </span>
                                </div>
                                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                                  <div
                                    className="h-full transition-all"
                                    style={{
                                      width: `${progressToMilestone * 100}%`,
                                      backgroundColor: path.color,
                                    }}
                                  />
                                </div>
                                <p className="text-xs text-muted mt-1">
                                  {nextMilestone - contribution} tons to next level
                                </p>
                              </div>

                              <button
                                onClick={() => setActiveNav("retire")}
                                className="w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                                style={{
                                  backgroundColor: `${path.color}20`,
                                  color: path.color,
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor = path.color
                                  e.target.style.color = "#ffffff"
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor = `${path.color}20`
                                  e.target.style.color = path.color
                                }}
                              >
                                Contribute
                              </button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl">
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                    <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-1">Total Retired</p>
                    <p className="text-3xl font-bold text-foreground">{totalContribution}</p>
                    <p className="text-xs text-muted">Across all paths</p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                    <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-1">Paths Active</p>
                    <p className="text-3xl font-bold text-foreground">
                      {nftPaths.filter((p) => pathContributions[p.id] > 0).length}/{nftPaths.length}
                    </p>
                    <p className="text-xs text-muted">Contribution paths</p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                    <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-1">Total XP</p>
                    <p className="text-3xl font-bold text-foreground">{userXP.toLocaleString()}</p>
                    <p className="text-xs text-muted">From retirements</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 max-w-lg">
                  <button
                    onClick={() => setActiveNav("retire")}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-sm"
                  >
                    Retire Credits Now
                  </button>
                  <button
                    onClick={() => setActiveNav("launchpad")}
                    className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
                  >
                    Explore Projects
                  </button>
                </div>
              </div>
            )}

            {activeNav === "launchpad" && (
              <div>
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-foreground mb-2">Launchpad</h2>
                  <p className="text-muted mb-8">Discover projects by contribution path</p>

                  {/* Featured Projects Section */}
                  <div className="mb-16">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Featured Projects</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                      {launchpadProjects
                        .filter((p) => p.featured)
                        .map((project) => {
                          const path = nftPaths.find((p) => p.id === project.pathId)
                          const userInvestedInProject = userInvestments.some((inv) => inv.projectId === project.id)
                          return (
                            <div
                              key={project.id}
                              className="group relative bg-card border-2 border-primary rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                            >
                              <div className="absolute top-4 right-4 z-10">
                                <div className="flex items-center gap-2 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/50">
                                  <span className="text-xs font-bold text-primary-foreground uppercase tracking-wide">
                                    Featured
                                  </span>
                                </div>
                              </div>

                              <div className="relative h-48 overflow-hidden bg-secondary">
                                <img
                                  src={project.image || "/placeholder.svg"}
                                  alt={project.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {project.verified && (
                                  <div className="absolute top-3 left-3 bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 border border-green-500/50">
                                    <Star className="w-3 h-3 text-green-500 fill-green-500" />
                                    <span className="text-xs font-semibold text-green-600">Verified</span>
                                  </div>
                                )}
                              </div>

                              <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                  {path && (
                                    <div
                                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                                      style={{ backgroundColor: `${path.color}20` }}
                                    >
                                      <path.icon className="w-4 h-4" style={{ color: path.color }} />
                                    </div>
                                  )}
                                  <span className="text-xs font-semibold text-muted">{path?.name}</span>
                                </div>
                                <h3 className="font-semibold text-foreground mb-1 text-lg">{project.name}</h3>
                                <p className="text-xs text-muted mb-4">{project.owner}</p>
                                <p className="text-sm text-foreground/80 mb-6">{project.description}</p>

                                <div className="space-y-4 mb-6">
                                  <div>
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="text-xs text-muted uppercase tracking-wide font-semibold">
                                        Funding Progress
                                      </span>
                                      <span className="text-xs font-semibold text-foreground">{project.progress}%</span>
                                    </div>
                                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                      <div
                                        className="h-full transition-all"
                                        style={{ width: `${project.progress}%`, backgroundColor: path?.color }}
                                      />
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-3 gap-2 text-xs">
                                    <div>
                                      <p className="text-muted mb-1">Credits</p>
                                      <p className="font-semibold text-foreground">
                                        {(project.credits / 1000).toFixed(0)}K
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-muted mb-1">Price</p>
                                      <p className="font-semibold text-foreground">${project.price}</p>
                                    </div>
                                    <div>
                                      <p className="text-muted mb-1">Status</p>
                                      <p className="font-semibold" style={{ color: path?.color }}>
                                        Active
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <button
                                  onClick={() => handleInvestProject(project.id)}
                                  className="w-full px-4 py-2.5 text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                                  style={{ backgroundColor: path?.color }}
                                >
                                  {userInvestedInProject ? "✓ Invested" : "Invest Now"}
                                </button>
                              </div>
                            </div>
                          )
                        })}
                    </div>
                  </div>

                  {/* Path Categories Excluding Featured Projects */}
                  {nftPaths.map((path) => {
                    const pathProjects = launchpadProjects.filter((p) => p.pathId === path.id && !p.featured)
                    if (pathProjects.length === 0) return null

                    return (
                      <div key={path.id} className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${path.color}20` }}
                          >
                            <path.icon className="w-5 h-5" style={{ color: path.color }} />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{path.name}</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {pathProjects.map((project) => {
                            const userInvestedInProject = userInvestments.some((inv) => inv.projectId === project.id)
                            return (
                              <div
                                key={project.id}
                                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
                              >
                                <div className="relative h-40 overflow-hidden bg-secondary">
                                  <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                  {project.verified && (
                                    <div className="absolute top-3 right-3 bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 border border-green-500/50">
                                      <Star className="w-3 h-3 text-green-500 fill-green-500" />
                                      <span className="text-xs font-semibold text-green-600">Verified</span>
                                    </div>
                                  )}
                                </div>

                                <div className="p-6">
                                  <h3 className="font-semibold text-foreground mb-1">{project.name}</h3>
                                  <p className="text-xs text-muted mb-4">{project.owner}</p>
                                  <p className="text-sm text-foreground/80 mb-4 line-clamp-2">{project.description}</p>

                                  <div className="space-y-3 mb-4">
                                    <div>
                                      <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs text-muted uppercase tracking-wide font-semibold">
                                          Funding Progress
                                        </span>
                                        <span className="text-xs font-semibold text-foreground">
                                          {project.progress}%
                                        </span>
                                      </div>
                                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                                        <div
                                          className="h-full transition-all"
                                          style={{ width: `${project.progress}%`, backgroundColor: path.color }}
                                        />
                                      </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 text-xs">
                                      <div>
                                        <p className="text-muted mb-1">Credits</p>
                                        <p className="font-semibold text-foreground">
                                          {(project.credits / 1000).toFixed(0)}K
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-muted mb-1">Price</p>
                                        <p className="font-semibold text-foreground">${project.price}</p>
                                      </div>
                                      <div>
                                        <p className="text-muted mb-1">Status</p>
                                        <p className="font-semibold" style={{ color: path.color }}>
                                          Active
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <button
                                    onClick={() => handleInvestProject(project.id)}
                                    className="w-full px-4 py-2 text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                                    style={{ backgroundColor: path.color }}
                                  >
                                    {userInvestedInProject ? "✓ Invested" : "Invest Now"}
                                  </button>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {activeNav === "marketplace" && (
              <div>
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-foreground mb-2">Marketplace</h2>
                  <p className="text-muted mb-8">Trade carbon credit tokens peer-to-peer</p>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-3 w-5 h-5 text-muted" />
                      <input
                        type="text"
                        placeholder="Search tokens..."
                        className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg text-foreground hover:bg-secondary transition-colors">
                      <Filter className="w-5 h-5" />
                      Filter
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {marketplaceTokens.map((token) => (
                    <div
                      key={token.id}
                      className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
                    >
                      <div className="relative h-32 overflow-hidden bg-secondary">
                        <img
                          src={token.image || "/placeholder.svg"}
                          alt={token.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-foreground">{token.name}</h3>
                            <p className="text-xs text-muted">{token.symbol}</p>
                          </div>
                          <div
                            className={`text-xs font-semibold px-2 py-1 rounded ${
                              token.change >= 0 ? "bg-green-500/20 text-green-600" : "bg-red-500/20 text-red-600"
                            }`}
                          >
                            {token.change >= 0 ? "+" : ""}
                            {token.change}%
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted">Price</span>
                            <span className="font-semibold text-foreground">${token.price.toFixed(2)}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted">Volume</span>
                            <span className="font-semibold text-foreground">{token.volume}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted">Listings</span>
                            <span className="font-semibold text-foreground">{token.listings}</span>
                          </div>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                          <ShoppingCart className="w-4 h-4" />
                          Buy Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeNav === "retire" && (
              <div>
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-foreground mb-2">Retire Credits</h2>
                  <p className="text-muted">Choose a path and permanently retire your carbon credits</p>
                </div>

                {retireStep === "select" && (
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="bg-card border border-border rounded-xl p-8 mb-6">
                        <h3 className="text-xl font-semibold text-foreground mb-6">Select Your Path</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                          {nftPaths.map((path) => {
                            const contribution = pathContributions[path.id]
                            const nextMilestone = Math.ceil(contribution / 100) * 100
                            const progressToMilestone = (contribution % 100) / 100
                            return (
                              <button
                                key={path.id}
                                onClick={() => setSelectedPath(path.id)}
                                className={`p-4 rounded-lg border-2 transition-all ${
                                  selectedPath === path.id
                                    ? "border-primary bg-primary/10"
                                    : "border-border hover:border-primary/50"
                                }`}
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: `${path.color}20` }}
                                  >
                                    <path.icon className="w-5 h-5" style={{ color: path.color }} />
                                  </div>
                                  <div className="text-left">
                                    <p className="font-semibold text-foreground">{path.name}</p>
                                    <p className="text-xs text-muted">{contribution} tons retired</p>
                                  </div>
                                </div>
                                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                                  <div
                                    className="h-full transition-all"
                                    style={{ width: `${progressToMilestone * 100}%`, backgroundColor: path.color }}
                                  />
                                </div>
                                <p className="text-xs text-muted mt-2 text-left">
                                  {nextMilestone - contribution} tons to level up
                                </p>
                              </button>
                            )
                          })}
                        </div>

                        <div className="mb-8">
                          <label className="block text-sm font-semibold text-foreground mb-3">Credits to Retire</label>
                          <div className="flex items-center gap-4">
                            <input
                              type="number"
                              min="0"
                              max="1250"
                              value={retireCredits}
                              onChange={(e) =>
                                setRetireCredits(Math.min(1250, Math.max(0, Number.parseInt(e.target.value) || 0)))
                              }
                              className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg text-foreground font-semibold focus:outline-none focus:border-primary transition-colors"
                            />
                            <button
                              onClick={() => setRetireCredits(1250)}
                              className="px-4 py-3 bg-secondary border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors"
                            >
                              Max
                            </button>
                          </div>
                        </div>

                        <div className="mb-8">
                          <label className="block text-sm font-semibold text-foreground mb-3">Quick Select</label>
                          <div className="grid grid-cols-4 gap-3">
                            {[100, 250, 500, 1000].map((amount) => (
                              <button
                                key={amount}
                                onClick={() => setRetireCredits(Math.min(amount, 1250))}
                                className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                                  retireCredits === amount
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary border border-border text-foreground hover:bg-secondary/80"
                                }`}
                              >
                                {amount}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Retirements</h3>
                        <div className="space-y-3">
                          {retireHistory.slice(0, 5).map((entry, idx) => {
                            const path = nftPaths.find((p) => p.id === entry.pathId)
                            return (
                              <div key={idx} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                                <div className="flex items-center gap-3">
                                  {path && (
                                    <div
                                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                                      style={{ backgroundColor: `${path.color}20` }}
                                    >
                                      <path.icon className="w-4 h-4" style={{ color: path.color }} />
                                    </div>
                                  )}
                                  <div>
                                    <p className="text-sm font-semibold text-foreground">{path?.name}</p>
                                    <p className="text-xs text-muted">{entry.timestamp}</p>
                                  </div>
                                </div>
                                <p className="font-bold" style={{ color: path?.color }}>
                                  +{entry.amount}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="bg-card border border-border rounded-xl p-6 sticky top-4">
                        <h3 className="text-lg font-semibold text-foreground mb-6">Impact Preview</h3>

                        {selectedPath && (
                          <div className="mb-6 p-4 bg-secondary rounded-lg border border-border">
                            <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-2">
                              Selected Path
                            </p>
                            <div className="flex items-center gap-2">
                              {nftPaths.find((p) => p.id === selectedPath) &&
                                (() => {
                                  const selectedPathObj = nftPaths.find((p) => p.id === selectedPath)
                                  const IconComponent = selectedPathObj?.icon
                                  return (
                                    <>
                                      <div
                                        className="w-6 h-6 rounded-lg flex items-center justify-center"
                                        style={{
                                          backgroundColor: `${selectedPathObj?.color}20`,
                                        }}
                                      >
                                        {IconComponent && (
                                          <IconComponent
                                            className="w-4 h-4"
                                            style={{
                                              color: selectedPathObj?.color,
                                            }}
                                          />
                                        )}
                                      </div>
                                      <span className="font-semibold text-foreground">{selectedPathObj?.name}</span>
                                    </>
                                  )
                                })()}
                            </div>
                          </div>
                        )}

                        <div className="space-y-4">
                          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                            <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-1">XP Earned</p>
                            <p className="text-3xl font-bold text-primary">{projectedXP.toLocaleString()}</p>
                          </div>

                          <div className="bg-secondary rounded-lg p-4">
                            <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-1">CO2 Removed</p>
                            <p className="text-2xl font-bold text-foreground">{carbonImpact.toFixed(1)}</p>
                            <p className="text-xs text-muted mt-2">Metric tons</p>
                          </div>

                          <div className="bg-secondary rounded-lg p-4">
                            <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-1">
                              Credits to Retire
                            </p>
                            <p className="text-2xl font-bold text-foreground">{retireCredits.toLocaleString()}</p>
                          </div>

                          {selectedPath && (
                            <div className="bg-secondary rounded-lg p-4">
                              <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-1">
                                Path Total After
                              </p>
                              <p className="text-2xl font-bold text-foreground">
                                {(pathContributions[selectedPath] + retireCredits).toLocaleString()}
                              </p>
                            </div>
                          )}
                        </div>

                        <button
                          onClick={handleRetireCredits}
                          disabled={retireCredits === 0 || !selectedPath}
                          className="w-full mt-6 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Review Retirement
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {retireStep === "confirm" && (
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-card border border-border rounded-xl p-8">
                      <div className="flex items-center justify-center mb-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <Zap className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Confirm Retirement</h3>
                      <p className="text-muted text-center mb-8">
                        You're about to retire {retireCredits.toLocaleString()} credits on the{" "}
                        {selectedPath ? nftPaths.find((p) => p.id === selectedPath)?.name : "path"}
                      </p>

                      <div className="space-y-3 mb-8 p-6 bg-secondary rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-foreground font-semibold">Credits Retiring:</span>
                          <span className="text-xl font-bold text-foreground">{retireCredits.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-foreground font-semibold">XP You'll Earn:</span>
                          <span className="text-xl font-bold text-primary">+{projectedXP.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-foreground font-semibold">CO2 Removed:</span>
                          <span className="text-xl font-bold text-foreground">{carbonImpact.toFixed(1)} tons</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted mb-6 p-4 bg-secondary rounded-lg">
                        This action is permanent. Retired credits cannot be recovered. Your contribution will be
                        recorded on-chain.
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => setRetireStep("select")}
                          className="px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleConfirmRetire}
                          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                          Confirm Retirement
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {retireStep === "success" && (
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-card border border-border rounded-xl p-8 text-center">
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
                          <Zap className="w-10 h-10 text-green-500" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-2">Success!</h3>
                      <p className="text-muted mb-8">
                        You successfully retired {retireCredits.toLocaleString()} carbon credits on{" "}
                        {selectedPath ? nftPaths.find((p) => p.id === selectedPath)?.name : "the path"}
                      </p>

                      <div className="space-y-4 mb-8 p-6 bg-gradient-to-r from-green-500/10 to-primary/10 rounded-lg border border-green-500/20">
                        <div>
                          <p className="text-sm text-muted mb-1">XP Earned</p>
                          <p className="text-4xl font-bold text-green-500">+{projectedXP.toLocaleString()}</p>
                        </div>
                        <div className="h-px bg-border" />
                        <div>
                          <p className="text-sm text-muted mb-1">CO2 Impact</p>
                          <p className="text-lg font-semibold text-foreground">
                            {carbonImpact.toFixed(1)} metric tons removed
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveNav("dashboard")}
                        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                      >
                        View Your Impact
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeNav === "leaderboard" && (
              <div>
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-foreground mb-2">Global Leaderboard</h2>
                  <p className="text-muted">Top carbon credit retirees</p>
                </div>

                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-secondary/50">
                          <th className="text-left px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wide">
                            Rank
                          </th>
                          <th className="text-left px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wide">
                            User
                          </th>
                          <th className="text-left px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wide">
                            Retired (tons)
                          </th>
                          <th className="text-left px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wide">
                            Level
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaderboard.map((entry, idx) => (
                          <tr
                            key={idx}
                            className={`border-b border-border hover:bg-secondary/50 transition-colors ${entry.isUser ? "bg-primary/5" : ""}`}
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                {entry.rank <= 3 && <Crown className="w-4 h-4 text-primary" />}
                                <span className="font-bold text-foreground">{entry.rank}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="text-2xl">{entry.avatar}</div>
                                <span className={`font-semibold ${entry.isUser ? "text-primary" : "text-foreground"}`}>
                                  {entry.name}
                                  {entry.isUser && <span className="text-xs ml-2 text-muted">(You)</span>}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="font-semibold text-foreground">
                                {entry.retiredTons.toLocaleString()}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                  <span className="text-sm font-bold text-primary">{entry.level}</span>
                                </div>
                                <span className="text-xs text-muted">Global</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeNav === "paths" && (
              <div>
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-foreground mb-2">NFT Paths</h2>
                  <p className="text-muted">Track your contributions to each environmental path</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {nftPaths.map((path) => {
                    const contribution = pathContributions[path.id]
                    const level = Math.floor(contribution / 100) + 1
                    const investedProjects = getProjectsForPath(path.id)

                    return (
                      <div
                        key={path.id}
                        className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-start gap-4">
                            <div
                              className="w-12 h-12 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: `${path.color}20` }}
                            >
                              <path.icon className="w-6 h-6" style={{ color: path.color }} />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">{path.name}</h3>
                              <p className="text-xs text-muted">Level {level}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6 p-4 bg-secondary rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted">CO₂ Retired</span>
                            <span className="font-semibold text-foreground">{contribution} tons</span>
                          </div>
                          <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                            <div
                              className="h-full transition-all"
                              style={{
                                width: `${Math.min((contribution / 500) * 100, 100)}%`,
                                backgroundColor: path.color,
                              }}
                            />
                          </div>
                        </div>

                        <div className="mb-6">
                          <p className="text-sm font-semibold text-foreground mb-3">Projects Invested</p>
                          {investedProjects.length > 0 ? (
                            <div className="space-y-2">
                              {investedProjects.map((inv, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center justify-between p-2 bg-secondary rounded-lg"
                                >
                                  <span className="text-xs text-foreground truncate">{inv.projectName}</span>
                                  <span className="text-xs font-semibold text-muted">{inv.amount} tons</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-xs text-muted italic">No projects invested yet</p>
                          )}
                        </div>

                        <p className="text-sm text-foreground/80">{path.name} projects completed</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
