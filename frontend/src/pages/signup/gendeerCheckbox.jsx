
const gendeerCheckbox = () => {
  return (
    <div className='flex'>
        <div className="form-control">
        <label className="label cursor-pointer">
        <span className="label-text">Male &nbsp;</span>
        <input type="checkbox" defaultChecked className="checkbox" />
    </label>
    </div>
    <div className="form-control">
        <label className="label cursor-pointer">
        <span className="label-text">Female &nbsp; </span>
        <input type="checkbox" defaultChecked className="checkbox" />
        </label>
    </div> 
    </div>
  )
}

export default gendeerCheckbox