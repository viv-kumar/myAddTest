import React from "react";
import Server from "./Server/Server";
import Client from "./Client/Client";
import "./chathome.css"
function ChatHome(){
    return(
        <div id="ParentDiv">
            <Client/>
               <Server/>

        </div>
    )
}
export default ChatHome;