import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import PropTypes from "prop-types"
import "../styles/Message.css"
import { forwardRef } from "react"
import { ref } from "firebase/storage"

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username
    return (
        <Box mt={2} ref={ref}>
            <Stack className={`message ${isUser && "message__user"}`}>
                <Card sx={{ width: "fit-content", borderRadius: 10 }} className={`${isUser ? "message__userCard" : "message__guestCard"}`}>
                    <CardContent>
                        <Typography variant="p" fontSize={20}>{!isUser && `${message.username || 'Unknown'}: `}{message.message}</Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    )
})


Message.propTypes = {
    message: PropTypes.object,
    username: PropTypes.string,
}
export default Message