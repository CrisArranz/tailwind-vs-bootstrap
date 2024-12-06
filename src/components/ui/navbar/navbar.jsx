/* eslint-disable react/prop-types */
export default function Navbar({ options = [], className = '' }) {
  return <div className={className}>
    {!!options.length && <div className="flex justify-end gap-x-4">
      {options.map((option, index) => {
        const href = option !== 'Inicio' ? option.toLowerCase() : "/";
        return <a key={option + index} className="p-4 hover:animate-pulse" href={href}>{option}</a>}
      )}
    </div>}
  </div>
}