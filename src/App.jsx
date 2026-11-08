import { useEffect } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import { profile } from '@/data/portfolio'
import AllProjects from '@/pages/AllProjects'
import Home from '@/pages/Home'

function usePageNavigation() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    document.title =
      pathname === '/projects' ? `Projects | ${profile.name}` : `${profile.name} | Portfolio`
  }, [pathname])

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash, key])
}

function Layout() {
  usePageNavigation()
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<AllProjects />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
