import React from "react";
import {Typography,AppBar} from "@material-ui/core";

 import Options from "./Components/Options";
 import VideoPlayer from "./Components/VideoPlayer";
 import Notifications from "./Components/Notifications";


const App = ()=>{
    return (
    <div>
       <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
            Video Chat App
              </Typography>
        
          <VideoPlayer/>
          <Options>
            <Notifications/>
          </Options>

       </AppBar>
    </div>
    );

  
};

export default App;