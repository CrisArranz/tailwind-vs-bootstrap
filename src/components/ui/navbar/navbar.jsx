/* eslint-disable react/prop-types */
export default function Navbar({ options = [], className = '', isDark = false, onDarkMode = () => {} }) {
  return <div className={`${isDark ? 'dark' : ''} ${className}`}>
    {!!options.length && <div className="flex justify-end gap-x-4 dark:bg-black">
      <span className="p-4" onClick={onDarkMode}>
      { isDark
        ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-black dark:text-white hover:cursor-pointer dark:bg-white dark:rounded-md transition-colors duration-300 cursor-pointer" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z"></path></svg>
        : <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-black dark:text-white hover:cursor-pointer transition-colors duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z"></path></svg>
      }
      </span>
      {options.map((option, index) => {
        const href = option !== 'Inicio' ? option.toLowerCase() : "/";
        return <a key={option + index} className="p-4 hover:animate-pulse dark:text-white" href={href}>{option}</a>}
      )}
    </div>}
  </div>
}