/* eslint-disable react/prop-types */
export default function PageLayout({ className = '', children }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}