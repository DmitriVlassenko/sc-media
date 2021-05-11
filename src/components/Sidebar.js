import "./Sidebar.css"
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import { ExpandMoreOutlined } from "@material-ui/icons";

const Sidebar = () => {
    return (
        <div className={"sidebar"}>
            {/*<SidebarRow src={''} title={'Dmitri Vlassenko'} />*/}
            <SidebarRow title={'Pages'} Icon={EmojiFlagsIcon}/>
            <SidebarRow title={'Friends'} Icon={PeopleIcon}/>
            <SidebarRow title={'Messenger'} Icon={ChatIcon}/>
            <SidebarRow title={'Marketplace'} Icon={StorefrontIcon}/>
            <SidebarRow title={'Videos'} Icon={VideoLibraryIcon}/>
            <SidebarRow title={'Marketplace'} Icon={ExpandMoreOutlined} />
        </div>
    )
}

export default Sidebar