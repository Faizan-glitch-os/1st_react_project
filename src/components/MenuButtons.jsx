export default function MenuButtons({ children, onClick, pressed }) {
  return (
    <li>
      <button className={pressed ? "active" : undefined} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
