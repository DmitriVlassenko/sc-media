import "./SidebarRow.css"
// import {Avatar} from "@material-ui/core";

const SidebarRow = ({ title, src, Icon }) => {
    return (
        <div className={"sidebarRow"}>
            {/*{src && <Avatar src={src} />}*/}
            {/*{Icon && <Icon />} first Icon what for ???*/}
            {<Icon />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow