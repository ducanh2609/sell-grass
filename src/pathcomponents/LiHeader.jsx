import { Link } from "react-router-dom";

export default function LiHeader(props) {
  if (props.content === undefined) {
    return (
      <li className={props.class}>
        <Link className={props.aClass} to={props.href}>
          <i className="fa fa-shopping-bag" aria-hidden="true" />
          <i className="fa fa-search" aria-hidden="true" />
        </Link>
      </li>
    );
  } else {
    return (
      <li className={props.class}>
        <Link className={props.aClass} to={props.href}>
          {props.content}
        </Link>
      </li>
    );
  }
}
