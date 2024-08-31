import { Container } from '@mui/material';
import React from 'react';

const Manuskichi = () => {
  return (<>
  
  <Container>
    
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center' }}>Manuskichi: A Journey of Compassion</h1>
      
      <img 
        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDEzNjB8MHwxfGFsbHwxfHx8fHx8fHwxNjIwNjg1NDA1&ixlib=rb-1.2.1&q=80&w=400" 
        alt="Compassion" 
        style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
      />
      
      <p>
        Manuskichi refers to the essence of being human—showing compassion, empathy, and kindness towards others. It is about understanding the struggles of others and offering help without expecting anything in return. This journey of compassion connects people and fosters a sense of community.
      </p>
    </div>
    </Container>
    </>
  );
}

export default Manuskichi;
