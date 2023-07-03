const BarLoader = ({ percentage }) => {
  return (
    <div className="w-full bg-app-gray-2 rounded-2xl">
      <div
        className="bg-money p-0.5 text-center text-xs font-medium leading-none text-primary-100 rounded-2xl"
        style={ {width: `${percentage}%`} }>
        {percentage}%
      </div>
    </div>
  )
}

export { BarLoader };