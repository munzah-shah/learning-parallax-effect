type MainButtonProps = {
  name: string;
  path: string;
};

const MainButton = ({ name, path }: MainButtonProps) => {
  return (
    <a className="main-button" href={path}>
      {name}
    </a>
  );
};

export default MainButton;
