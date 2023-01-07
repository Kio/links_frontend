import React, {memo} from "react";

type SpaceProps = {
    width?: number
    height?: number
}

const Space = (props: SpaceProps): JSX.Element => {
    const { width = 0, height = 0 } = props
    return (
        <div style={{width: width, height: height}}/>
    );
}

export default memo(Space)