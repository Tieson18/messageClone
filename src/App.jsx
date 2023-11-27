import { useEffect, useState } from 'react'
import './App.css'
import { Box, Container, FormControl, IconButton, Input, Stack, Typography } from '@mui/material'
import Message from './components/Message'
import db from './database/firebase'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import FlipMove from 'react-flip-move'
import { Send } from '@mui/icons-material'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')


  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const colRef = collection(db, "messages")


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) {
      return;
    }
    // const userObj = {
    //   username: username,
    //   message: input
    // }
    addDoc(colRef, {
      username: username,
      message: input,
      timestamp: serverTimestamp()
    })
    console.log("MESSAGE:", messages)
    setInput('')
  }

  useEffect(() => {
    setUsername(prompt('Enter username'))
    // console.log("USER:", username);
  }, [])

  useEffect(() => {
    onSnapshot(query(colRef, orderBy("timestamp", "desc")),
      (snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })));
      })
  }, [])

  return (
    <Box>
      <Container maxWidth="lg">
        <Stack alignItems={"center"} textAlign={"center"}>
          <img
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain"
            }}
            src="data:image/jpeg;base64,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" alt="" />
          <Typography variant='h4'>Messenger</Typography>
          <form className='app__form'>
            <FormControl className='app__formControl'>
              {/* <InputLabel></InputLabel> */}
              <Input className='app__input' placeholder='Enter a message...' value={input} onChange={handleChange} />
              <IconButton type='submit' className='app__button' disabled={!input} onClick={handleSubmit}><Send /></IconButton>
            </FormControl>
          </form>
        </Stack>
        <Stack>
          <FlipMove>
            {messages.map(({ message, id }) => (
              <Message key={id} username={username} message={message} />
            ))}
          </FlipMove>
        </Stack>
      </Container>
    </Box>
  )
}

export default App
