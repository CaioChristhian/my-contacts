import { useState, useEffect } from 'react';

import ToastMessage from '../ToastMessage';
import { toastEventManager } from '../../../utils/toast';

import { Container } from './styles';

export default function ToastContainer() {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessage((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          type={message.type}
          text={message.text}
        />
      ))}
    </Container>
  );
}
