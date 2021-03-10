import Loader from "react-loader-spinner";

function Loading(props: any) {
  return (
    <Loader
      type="Hearts"
      color="#FF9E1B"
      height={100}
      width={100}
      visible={props.visible}
    />
  );
}

export default Loading;
