
const GenderCheckBox = ({oncheckBoxChange , selectGender}) => {
  return (
    <div className='flex'>
        <div className="form-control">
        <label className="label cursor-pointer ">
        <span className="label-text">Male &nbsp;</span>
        <input type="checkbox" defaultChecked className="checkbox"
          checked={selectGender === "male"}
          onChange={() => oncheckBoxChange("male")} 
        />
    </label>
    </div>
    <div className="form-control">
        <label className="label cursor-pointer">
        <span className="label-text">Female &nbsp; </span>
        <input type="checkbox" defaultChecked className="checkbox"
          checked={selectGender === "female"}
          onChange={() => oncheckBoxChange("female")}
        />
        </label>
    </div> 
    </div>
  )
}

export default GenderCheckBox