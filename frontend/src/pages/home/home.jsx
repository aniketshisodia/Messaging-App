import Sidebar from '../../components/Sidebar'

const home = () => {
  return (
    <div>
        <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			{/* <MessageContainer /> */}
		</div>
    </div>
  )
}

export default home
