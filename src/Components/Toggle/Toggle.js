export const Toggle = ({ handleChange, isChecked }) => {
  return (
<div className="toggle-container flex items-cente ml-8">
  <label htmlFor="check" className="text-sm font-medium sm:text-xs lg:text-sm xl:text-base flex items-center cursor-pointer pl-4 text-white">
    Dark Mode
    <span className="relative inline-block ml-2 w-6 h-3 bg-gray-300 rounded-full sm:ml-3 sm:w-8 sm:h-4">
      <span className={`block absolute inset-0 w-3 h-3 rounded-full bg-white transform transition-transform ${isChecked ? 'translate-x-full' : ''} sm:w-4 sm:h-4`}></span>
    </span>
  </label>
  <input
    type="checkbox"
    id="check"
    className="toggle absolute opacity-0 w-0 h-0"
    onChange={handleChange}
    checked={isChecked}
  />
</div>

  );
};
