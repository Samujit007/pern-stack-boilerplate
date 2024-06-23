//Write common utility functions here

const decodeToken = (token) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return { 
        ...payload, 
        expiresIn: payload.exp * 1000 // Convert to milliseconds
      };
    } catch (error) {
      return null;
    }
  };
  
  export { decodeToken };