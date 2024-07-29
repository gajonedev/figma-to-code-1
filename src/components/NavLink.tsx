export const NavLink = ({
  href,
  content,
}: {
  href: string;
  content: string;
}) => {
  return (
    <a href={href} className="font-semibold">
      {content}
    </a>
  );
};
