import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
    return (
        <>
            <RotatingLines
                strokeColor="rgb(53, 154, 108)"
                strokeWidth="5"
                animationDuration="0.75"
                width="100"
                visible={true}
            />
        </>
    )
};

export {
    Loader
}