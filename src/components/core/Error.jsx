const Error = ({description, className = ""}) => {
  return (
    <div className={`error ${className}`}>
      {description}
    </div>
  )
}
export default Error