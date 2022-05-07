import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          fontWeight: match ? "bold" : "400",
          textDecoration: match ? "underline" : "",
          textDecorationColor: match ? "#89c74a" : "",
          backgroundColor: match ? "#89c74a" : "",
          padding: match ? "5px 10px" : "",
          color: match ? "white" : "",
          borderRadius: match ? "5px" : "",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
