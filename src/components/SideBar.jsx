function SideBar(props) {
  return (
    <div className="sidebar flex flex-col">
      <ul className="flex flex-col">
        <li>
          <a href=".#">Home</a>
        </li>
        <li>
          <a href="https://github.com/vishmallik">Contact</a>
        </li>
        <li>
          <a href="https://github.com/vishmallik">About</a>
        </li>
      </ul>
      <div>
        <div className="flex back" onClick={props.handler}>
          <i className="fas fa-caret-left"></i>
          Back
        </div>
      </div>
    </div>
  );
}
export default SideBar;
