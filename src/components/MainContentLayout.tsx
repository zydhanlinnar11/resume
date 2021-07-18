import './MainContentLayout.css'

interface MainContentLayoutProps {
  title: string
  children?: JSX.Element | string
}

function MainContentLayout({ title, children }: MainContentLayoutProps) {
  return (
    <div className="main-content">
      <h3 className="main-content-title">{title}</h3>
      {children}
    </div>
  )
}

export default MainContentLayout
