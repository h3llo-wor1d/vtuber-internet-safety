import { Paper } from "@mui/material";
import { Item } from "../../../components/item";

export default function Page1(props) {
    return (
        <div>
            <Item>
                <span style={{textAlign: "center"}}>
                    This is an overview of various different scam messages you may receive on Discord, how to identify them,
                    and how not to leave yourself vulnerable to them.
                </span>
            </Item>
        </div>
    )
}