import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Item } from "../../../components/item";
import Slideshow from "../../../components/slideshow";

export default function Page2(props) {
    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap", 
            alignContent: "center"
        }}>
            <Card sx={{width: "100%"}}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        What are QR Code Scams?
                    </Typography>
                    <Typography>
                        You may have noticed, at one point or another, that
                        when logging into Discord on a new computer, you are prompted
                        for a QR Code to log in using your phone app. These scams in particular
                        that utilize this feature to steal your account by sending
                        your login credentials to a foreign source, which will be shown
                        below using an example from GitHub of the scam.
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                        These scams can be avoided easily by just not scanning the QR code,
                        and to be completely real, most Discord users don't even use the feature to my knowledge anyway.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{width: "100%"}}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Example of a Real QR Login Prompt
                    </Typography>
                    <br/>
                    <Slideshow images={[
                        "assets/discord/loginpage_example.png",
                        "assets/discord/mobile_login_prompt.jpg"
                    ]} />
                    <Typography variant="body2" color="text.secondary">
                        The images above are the real Discord 
                        pages (desktop and mobile, set to my account) for QR Auth.
                    </Typography>
                </CardContent>
            </Card>
        </Box>   
    )
}