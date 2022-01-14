import logo from 'images/bmlogo.png';

type LogoProps = {
  width?: number | string;
  height?: number | string;
};

export const Logo: React.VFC<LogoProps> = ({ width, height }) => {
  return <img src={logo} width={width} height={height} alt="cjt logo" />;
};
