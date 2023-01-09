import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Item } from "../../../components/item";

export default function Page2(props) {
    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap", 
            alignContent: "center"
        }}>
            <Card sx={{maxWidth: "500px"}}>
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
            <Card sx={{maxWidth: "500px"}}>
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
        </Box>   
    )
}