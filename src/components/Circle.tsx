import './Circle.css'

interface CircleProps {
  circleId: string
}

function Circle({ circleId }: CircleProps) {
  return <div className="circle" id={circleId}></div>
}

export default Circle
