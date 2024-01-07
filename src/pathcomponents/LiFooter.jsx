export default function LiFooter(props) {
  return (
    <li>
      <a href={props.href}>
        <i className={props.iClass} aria-hidden="true" />
      </a>
      <br /> {props.content}
    </li>
  );
}
