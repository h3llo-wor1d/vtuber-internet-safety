import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Page2(props) {
    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap", 
            alignContent: "center"
        }}>
            {
                /* Instagram hack url (real)
                http://l.instagram.com/?h31lo_wor1d=1496588401931345932&e=ATM_m55xEe_V8pJvU-noKPGeuhvGGBlnCItFkDhfKtkK4qHWIFXuFC9IrfUCCTxUjBy7ZCiE&s=1&u=http%3A%2F%2Fbusiness.instagram.com%2Fmicro_site%2Furl%2F%3Fevent_type%3Dclick%26site%3Digb%26destination%3Dhttps%253A%252F%252Fwww.facebook.com%252Fads%252Fig_redirect%252F%253Fd%253DAd-9UUpXVqVLNUx_LYaKZeKek5oYlWjoEdXwzKgPbUE9qRpf4p77ahkKJVJ0kuzPpFtsCo6iNW3tiZLDTY2LPR4xCa63d0ycYdTB4uq9n11GSU2h81N4csFuuiw8b0crQB08jWUYW08n1cc2LujG0j00JXW6R7_-_xEeAwWPs56HHv7PQhgj6ktkhSEU5AhwI8vAMSgikxz8VtJ4JiQRzIjL%2526a%253D1%2526hash%253DAd9_0TyBjc1n8sHe
                */
            }
            <Card sx={{width: "100%"}}>
                <CardContent className="cardGrid">
                    <div style={{maxWidth: "700px"}}>
                        <Typography variant="h5" component="div">
                            What is the instagram hack?
                        </Typography>
                        <Typography>
                            You have probably seen some dms floating around containing
                            someone's username and an INCREDIBLY long instagram url, like <code>l.instagram.com/?foo=bar</code> that 
                            continues for a couple hundred more characters, and wondered to yourself,
                            "what does it mean? what does this accomplish?"
                            <br /><br/>
                            I recieved the link myself one day, and I'd like to do a deep dive on the
                            actual purpose of this, what it accomplishes, and how to avoid giving it access
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="text.secondary">
                            Spoiler alert: links cannot steal your account.
                        </Typography>
                    </div>
                    <Card sx={{maxWidth: "500px", float: "right"}}>
                        <CardMedia component="img" image="assets/twitter/insta/tw_1.png" />
                        <Typography variant="body2" color="text.secondary" sx={{textAlign: "center", marginTop: "5px", marginBottom: "5px"}}>
                            Screenshot of the actual DM you recieve, as I have received it before.
                        </Typography>
                    </Card>
                </CardContent>
            </Card>
            <Card sx={{width: "100%"}}>
                <CardContent className="cardGrid">
                    <div style={{maxWidth: "700px"}}>
                        <Typography variant="h5" component="div">
                            So, what does it do?
                        </Typography>
                        <Typography>
                            It doesn't do much. When I tell you what it does do though, you probably won't be surprised.
                            Basically, when you click on the link, it sends you through 2 ad redirects, one from Instagram,
                            and one from Facebook. What I imagine is that the creator of this bot gets paid every time someone
                            clicks on it. Which makes a lot of sense, because it doesn't do anything other than DM more people the link.
                        </Typography>
                    </div>
                    <Card sx={{maxWidth: "500px", float: "right"}}>
                        <CardMedia component="img" image="assets/twitter/insta/bs_1.png" />
                        <Typography variant="body2" color="text.secondary" sx={{textAlign: "center", marginTop: "5px", marginBottom: "5px"}}>
                            Screenshot of the page you are sent to after the redirects
                        </Typography>
                    </Card>
                </CardContent>
            </Card>
            <Card sx={{width: "100%"}}>      
                <CardContent className="cardGrid">
                    <div style={{maxWidth: "700px"}}>
                        <Typography variant="h5" component="div">
                            So, if the link doesn't steal my account, what does?
                        </Typography>
                        <Typography>
                            It's going to hurt to hear this, but nothing steals your account. You willingly give up access to this bot.
                            When you get past the 2 sketchy ad redirects, it sends you to a page in poorly written english (see the image in the section above) 
                            that claims to tell you who views your content, which is impossible. It is genuinely impossible. Twitter does not
                            store that data, it is not possible to retrieve. You willingly give it access to basically your entire account
                            via an authentication page which can be seen to the right of this text, and I will go over the red flags
                            of this briefly, because this is what causes most of the account "hacks", not just for the instagram, but for
                            almost all things that take control of your account to post stuff.
                        </Typography>
                    </div>  
                    <Card sx={{maxWidth: "500px", float: "right"}}>
                        <CardMedia component="img" image="assets/twitter/insta/bs_2.png" />
                        <Typography variant="body2" color="text.secondary" sx={{textAlign: "center", marginTop: "5px", marginBottom: "5px"}}>
                            Screenshot of the oauth consent page you are sent to after clicking the button
                        </Typography>
                    </Card>
                </CardContent>
            </Card>
        </Box>
    )
}