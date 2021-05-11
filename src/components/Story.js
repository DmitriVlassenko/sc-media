import "./Story.css"
import { Avatar } from "@material-ui/core";

const Story = ({ image, profileImage, title }) => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className={"story"}>
            <Avatar className={"story__avatar"} profileimage={profileImage} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story