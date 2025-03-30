import { FC } from "react";
import { BallTriangle } from "react-loader-spinner";
import CenterBox from "./center-box";

interface IProps {
  color: string;
}

const LazyLoading: FC<IProps> = ({ color }) => {
  return (
    <CenterBox overflow={35.19}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color={color}
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </CenterBox>
  );
};

export default LazyLoading;
